import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  fetchPupi,
  fetchPupo,
  fetchLibri,
  fetchLibro,
  fetchCompanyOpere,
  fetchCompanyOpera,
} from "../api";

function mockFetch(body: unknown, headers?: Record<string, string>) {
  return vi.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(body),
    headers: new Headers(headers),
  });
}

function mockFetchError(status: number) {
  return vi.fn().mockResolvedValue({
    ok: false,
    status,
    json: () => Promise.resolve({}),
    headers: new Headers(),
  });
}

function calledUrl(): URL {
  const call = vi.mocked(globalThis.fetch).mock.calls[0];
  return call[0] as URL;
}

beforeEach(() => {
  vi.restoreAllMocks();
});

describe("fetchPupi", () => {
  it("builds correct URL with page and per_page", async () => {
    globalThis.fetch = mockFetch([], { "x-wp-totalpages": "5" });

    const result = await fetchPupi(2);
    const url = calledUrl();

    expect(url.pathname).toContain("/pupo");
    expect(url.searchParams.get("page")).toBe("2");
    expect(url.searchParams.get("per_page")).toBe("10");
    expect(url.searchParams.has("search")).toBe(false);
    expect(result.totalPages).toBe(5);
    expect(result.items).toEqual([]);
  });

  it("includes search param when provided", async () => {
    globalThis.fetch = mockFetch([], { "x-wp-totalpages": "1" });

    await fetchPupi(1, "crociato");
    const url = calledUrl();

    expect(url.searchParams.get("search")).toBe("crociato");
  });

  it("omits search param when empty string", async () => {
    globalThis.fetch = mockFetch([], { "x-wp-totalpages": "1" });

    await fetchPupi(1, "");
    const url = calledUrl();

    expect(url.searchParams.has("search")).toBe(false);
  });

  it("defaults totalPages to 1 when header missing", async () => {
    globalThis.fetch = mockFetch([]);

    const result = await fetchPupi(1);

    expect(result.totalPages).toBe(1);
  });
});

describe("fetchPupo", () => {
  it("fetches single item by ID", async () => {
    const pupo = { id: 123, acf: { soggetto: "test" } };
    globalThis.fetch = mockFetch(pupo);

    const result = await fetchPupo(123);
    const url = calledUrl();

    expect(url.pathname).toContain("/pupo/123");
    expect(result.id).toBe(123);
  });
});

describe("fetchLibri", () => {
  it("builds correct URL for libro endpoint", async () => {
    globalThis.fetch = mockFetch([], { "x-wp-totalpages": "3" });

    const result = await fetchLibri(1, "antropologia");
    const url = calledUrl();

    expect(url.pathname).toContain("/libro");
    expect(url.searchParams.get("search")).toBe("antropologia");
    expect(result.totalPages).toBe(3);
  });
});

describe("fetchLibro", () => {
  it("fetches single book by ID", async () => {
    const libro = { id: 456, acf: { titolo: "test" } };
    globalThis.fetch = mockFetch(libro);

    const result = await fetchLibro(456);
    const url = calledUrl();

    expect(url.pathname).toContain("/libro/456");
    expect(result.id).toBe(456);
  });
});

describe("fetchCompanyOpere", () => {
  it("resolves slug to correct endpoint", async () => {
    globalThis.fetch = mockFetch([], { "x-wp-totalpages": "1" });

    await fetchCompanyOpere("napoli", 1);
    const url = calledUrl();

    expect(url.pathname).toContain("/operanapoli");
  });

  it("resolves canino slug to olivericanino endpoint", async () => {
    globalThis.fetch = mockFetch([], { "x-wp-totalpages": "1" });

    await fetchCompanyOpere("canino", 1);
    const url = calledUrl();

    expect(url.pathname).toContain("/operaolivericanino");
  });

  it("throws on unknown slug", () => {
    expect(() => fetchCompanyOpere("unknown", 1)).toThrow(
      "Unknown company slug: unknown",
    );
  });
});

describe("fetchCompanyOpera", () => {
  it("fetches single opera by slug and ID", async () => {
    const opera = { id: 789, acf: { soggetto: "test" } };
    globalThis.fetch = mockFetch(opera);

    const result = await fetchCompanyOpera("napoli", 789);
    const url = calledUrl();

    expect(url.pathname).toContain("/operanapoli/789");
    expect(result.id).toBe(789);
  });
});

describe("error handling", () => {
  it("throws on non-ok response", async () => {
    globalThis.fetch = mockFetchError(404);

    await expect(fetchPupo(999)).rejects.toThrow("API error: 404");
  });
});
