import { describe, it, expect } from "vitest";
import { letterAdder } from "../letterAdder";

describe("letterAdder", () => {
  const cases: [string, string][] = [
    ["Argento", "AR"],
    ["Bumbello", "BM"],
    ["Franco Cuticchio", "CF"],
    ["Gargano", "GR"],
    ["Mancuso", "MN"],
    ["Mauceri", "MC"],
    ["Napoli", "NP"],
    ["Oliveri", "OL"],
    ["Puglisi", "PG"],
    ["Sicilia", "SC"],
    ["Girolamo Cuticchio", "CG"],
  ];

  it.each(cases)('returns "%s" → "%s"', (collection, prefix) => {
    expect(letterAdder(collection)).toBe(prefix);
  });

  it("returns empty string for unknown collection", () => {
    expect(letterAdder("Sconosciuto")).toBe("");
  });

  it("returns empty string for empty string", () => {
    expect(letterAdder("")).toBe("");
  });
});
