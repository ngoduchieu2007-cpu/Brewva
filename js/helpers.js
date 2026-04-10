/* ---------- HELPERS ---------- */
function $(id) { return document.getElementById(id); }
function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

/* ---------- TOAST ---------- */
function toast(msg) {
  const t = el(`<div class="debug-toast">${escapeHtml(msg)}</div>`);
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1800);
}
