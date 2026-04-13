import { describe, it, expect } from "vitest";
import { companies, getCompanyBySlug } from "../companies";

describe("companies", () => {
  it("has 11 companies", () => {
    expect(companies).toHaveLength(11);
  });

  it("every company has all required fields", () => {
    for (const c of companies) {
      expect(c.name).toBeTruthy();
      expect(c.city).toBeTruthy();
      expect(c.slug).toBeTruthy();
      expect(c.endpoint).toBeTruthy();
    }
  });

  it("has no duplicate slugs", () => {
    const slugs = companies.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has no duplicate endpoints", () => {
    const endpoints = companies.map((c) => c.endpoint);
    expect(new Set(endpoints).size).toBe(endpoints.length);
  });
});

describe("getCompanyBySlug", () => {
  it("finds every company by its slug", () => {
    for (const company of companies) {
      expect(getCompanyBySlug(company.slug)).toBe(company);
    }
  });

  it("returns undefined for unknown slug", () => {
    expect(getCompanyBySlug("nonexistent")).toBeUndefined();
  });

  it("returns undefined for empty string", () => {
    expect(getCompanyBySlug("")).toBeUndefined();
  });
});
