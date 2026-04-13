import { getCompanyBySlug } from "./companies";

// --- Types ---

export interface PaginatedResult<T> {
  items: T[];
  totalPages: number;
}

export interface AcfImageSizes {
  thumbnail: string;
  "thumbnail-width": number;
  "thumbnail-height": number;
  medium: string;
  "medium-width": number;
  "medium-height": number;
  medium_large: string;
  "medium_large-width": number;
  "medium_large-height": number;
  large: string;
  "large-width": number;
  "large-height": number;
}

export interface AcfFoto {
  ID: number;
  id: number;
  title: string;
  filename: string;
  url: string;
  width: number;
  height: number;
  mime_type: string;
  sizes: AcfImageSizes;
}

export interface PupoAcf {
  soggetto: string;
  tipo: string;
  collezione: string;
  descrizione: string;
  materiale_testa: string;
  ossatura: string;
  armatura: string;
  dimensione_piede_testa: string;
  dimensione_piede_spalla: string;
  dimensione_piede_uncino: string;
  datazione: string;
  provenienza: string;
  costruzione: string;
  inventario: string;
  serie: string;
  annotazioni: string;
  altre_note: string;
  foto: AcfFoto[] | null;
}

export interface Pupo {
  id: number;
  acf: PupoAcf;
}

export interface LibroAcf {
  titolo: string;
  autore: string;
  anno: string;
  editore: string;
  pagine: string;
  keywords: string;
  luogo: string;
  collocazione: string;
  inventario: string;
}

export interface Libro {
  id: number;
  acf: LibroAcf;
}

// --- Core fetch ---

const API_BASE = import.meta.env.VITE_API_BASE;
if (!API_BASE) throw new Error("VITE_API_BASE environment variable is not set");

async function apiFetch<T>(
  endpoint: string,
  params?: Record<string, string>,
): Promise<{ data: T; headers: Headers }> {
  const url = new URL(`${API_BASE}/${endpoint}`);
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      if (v) url.searchParams.set(k, v);
    }
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const data: T = await res.json();
  return { data, headers: res.headers };
}

async function fetchList<T>(
  endpoint: string,
  page: number,
  search?: string,
  perPage = 10,
): Promise<PaginatedResult<T>> {
  const params: Record<string, string> = {
    per_page: String(perPage),
    page: String(page),
  };
  if (search) params.search = search;

  const { data, headers } = await apiFetch<T[]>(endpoint, params);
  const totalPages = parseInt(headers.get("x-wp-totalpages") ?? "1", 10);
  return { items: data, totalPages };
}

async function fetchOne<T>(endpoint: string, id: number): Promise<T> {
  const { data } = await apiFetch<T>(`${endpoint}/${id}`);
  return data;
}

// --- Public API ---

export function fetchPupi(
  page: number,
  search?: string,
): Promise<PaginatedResult<Pupo>> {
  return fetchList<Pupo>("pupo", page, search);
}

export function fetchPupo(id: number): Promise<Pupo> {
  return fetchOne<Pupo>("pupo", id);
}

export function fetchLibri(
  page: number,
  search?: string,
): Promise<PaginatedResult<Libro>> {
  return fetchList<Libro>("libro", page, search);
}

export function fetchLibro(id: number): Promise<Libro> {
  return fetchOne<Libro>("libro", id);
}

export function fetchCompanyOpere(
  slug: string,
  page: number,
  search?: string,
  perPage?: number,
): Promise<PaginatedResult<Pupo>> {
  const company = getCompanyBySlug(slug);
  if (!company) throw new Error(`Unknown company slug: ${slug}`);
  return fetchList<Pupo>(company.endpoint, page, search, perPage);
}

export function fetchCompanyOpera(slug: string, id: number): Promise<Pupo> {
  const company = getCompanyBySlug(slug);
  if (!company) throw new Error(`Unknown company slug: ${slug}`);
  return fetchOne<Pupo>(company.endpoint, id);
}
