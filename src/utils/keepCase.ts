// Brand names that must keep their own casing inside uppercase styles (.display, .label).
// Returns HTML: use with set:html.
const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const keepCase = (text: string) =>
  escape(text).replace(/\be21/g, '<span class="keep-case">e21</span>');
