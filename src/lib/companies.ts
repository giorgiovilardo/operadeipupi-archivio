export interface Company {
  name: string;
  menuLabel: string;
  city: string;
  slug: string;
  endpoint: string;
}

export const companies: Company[] = [
  {
    name: "Napoli Fiorenzo",
    menuLabel: "Napoli",
    city: "Catania",
    slug: "napoli",
    endpoint: "operanapoli",
  },
  {
    name: "Vincenzo Argento",
    menuLabel: "Argento",
    city: "Palermo",
    slug: "argento",
    endpoint: "operaargento",
  },
  {
    name: "Salvatore Bumbello",
    menuLabel: "Bumbello",
    city: "Palermo",
    slug: "bumbello",
    endpoint: "operabumbello",
  },
  {
    name: "G. Canino",
    menuLabel: "Canino",
    city: "Alcamo (TP)",
    slug: "canino",
    endpoint: "operaolivericanino",
  },
  {
    name: "Gargano",
    menuLabel: "Gargano",
    city: "Messina",
    slug: "gargano",
    endpoint: "operagargano",
  },
  {
    name: "Vincenzo Mancuso",
    menuLabel: "Mancuso",
    city: "Palermo",
    slug: "mancuso",
    endpoint: "operamancuso",
  },
  {
    name: "Vaccaro-Mauceri",
    menuLabel: "Mauceri",
    city: "Siracusa",
    slug: "mauceri",
    endpoint: "operamauceri",
  },
  {
    name: "Cuticchio",
    menuLabel: "G. Cuticchio",
    city: "Palermo",
    slug: "gcuticchio",
    endpoint: "operagcuticchio",
  },
  {
    name: "Franco Cuticchio",
    menuLabel: "F. Cuticchio",
    city: "Palermo",
    slug: "fcuticchio",
    endpoint: "operafcuticchio",
  },
  {
    name: "Famiglia Puglisi",
    menuLabel: "Puglisi",
    city: "Sortino (SR)",
    slug: "puglisi",
    endpoint: "operapuglisi",
  },
  {
    name: "A. Sicilia",
    menuLabel: "Sicilia",
    city: "Palermo",
    slug: "sicilia",
    endpoint: "operasicilia",
  },
];

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find((c) => c.slug === slug);
}
