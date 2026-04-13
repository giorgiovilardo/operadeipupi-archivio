import { describe, it, expect } from "vitest";
import { paginationPages } from "../pagination";

describe("paginationPages", () => {
  it("returns empty for 0 pages", () => {
    expect(paginationPages(1, 0)).toEqual([]);
  });

  it("returns empty for 1 page", () => {
    expect(paginationPages(1, 1)).toEqual([]);
  });

  it("shows all pages when totalPages <= 7", () => {
    expect(paginationPages(2, 3)).toEqual([1, 2, 3]);
    expect(paginationPages(4, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("shows window at start (page 1 of 10)", () => {
    expect(paginationPages(1, 10)).toEqual([1, 2, null, 10]);
  });

  it("shows window at end (page 10 of 10)", () => {
    expect(paginationPages(10, 10)).toEqual([1, null, 9, 10]);
  });

  it("shows window in middle (page 5 of 10)", () => {
    expect(paginationPages(5, 10)).toEqual([1, null, 4, 5, 6, null, 10]);
  });

  it("collapses leading ellipsis when near start (page 2 of 10)", () => {
    expect(paginationPages(2, 10)).toEqual([1, 2, 3, null, 10]);
  });

  it("collapses trailing ellipsis when near end (page 9 of 10)", () => {
    expect(paginationPages(9, 10)).toEqual([1, null, 8, 9, 10]);
  });

  it("handles large page counts (page 10 of 20)", () => {
    expect(paginationPages(10, 20)).toEqual([1, null, 9, 10, 11, null, 20]);
  });

  it("page 3 of 10 — leading ellipsis collapses", () => {
    expect(paginationPages(3, 10)).toEqual([1, 2, 3, 4, null, 10]);
  });

  it("page 8 of 10 — trailing ellipsis collapses", () => {
    expect(paginationPages(8, 10)).toEqual([1, null, 7, 8, 9, 10]);
  });
});
