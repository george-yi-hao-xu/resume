/**
 * @param {unknown} value
 * @returns {string}
 */
export const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

/**
 * @param {string[]} [items]
 * @returns {string}
 */
export const paragraphs = (items = []) =>
  items.map((item) => `<p>${escapeHtml(item)}</p>`).join("");

/** @param {{ href: string, label: string }[]} [items] */
export const links = (items = []) =>
  items
    .map(
      (item) =>
        `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`,
    )
    .join("");
