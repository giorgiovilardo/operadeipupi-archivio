/**
 * Generate page numbers for pagination UI.
 * Returns an array of page numbers and `null` values (ellipsis).
 * Returns empty array when pagination is unnecessary (0 or 1 pages).
 */
export function paginationPages(
  currentPage: number,
  totalPages: number,
): (number | null)[] {
  if (totalPages <= 1) return [];
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | null)[] = [1];

  const windowStart = Math.max(2, currentPage - 1);
  const windowEnd = Math.min(totalPages - 1, currentPage + 1);

  if (windowStart > 2) pages.push(null);
  for (let i = windowStart; i <= windowEnd; i++) pages.push(i);
  if (windowEnd < totalPages - 1) pages.push(null);

  pages.push(totalPages);
  return pages;
}
