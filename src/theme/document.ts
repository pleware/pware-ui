/** Set `data-theme` on the document element. No-op outside the browser. */
export function applyDocumentTheme(id: string): void {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.theme = id
}
