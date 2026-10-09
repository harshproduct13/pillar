// Result sharing for the free tools: WhatsApp text link, and a picture of the result for Instagram
// stories / status (made in the browser, never uploaded anywhere).

export function whatsappHref(text: string): string {
  return 'https://wa.me/?text=' + encodeURIComponent(text);
}

function wrap(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = '';
  for (const w of words) {
    const next = line ? line + ' ' + w : w;
    if (ctx.measureText(next).width > maxWidth && line) { lines.push(line); line = w; } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

// 1080×1350 card in the site's colours. Uses the phone's own fonts, so every Indian script renders.
export async function resultImage(big: string, lines: string[], footer: string): Promise<Blob | null> {
  const c = document.createElement('canvas');
  c.width = 1080; c.height = 1350;
  const ctx = c.getContext('2d');
  if (!ctx) return null;
  ctx.fillStyle = '#0f0f0d'; ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = '#f97316'; ctx.fillRect(0, 0, c.width, 14);
  ctx.textAlign = 'center';
  ctx.fillStyle = '#f5f0ea';
  ctx.font = '700 132px system-ui, sans-serif';
  let y = 470;
  for (const l of wrap(ctx, big, 960)) { ctx.fillText(l, 540, y); y += 150; }
  ctx.font = '500 52px system-ui, sans-serif';
  ctx.fillStyle = '#c0c0b8';
  y += 30;
  for (const text of lines) for (const l of wrap(ctx, text, 940)) { ctx.fillText(l, 540, y); y += 70; }
  ctx.font = '600 40px system-ui, sans-serif';
  ctx.fillStyle = '#f97316';
  ctx.fillText(footer, 540, 1270);
  return new Promise((res) => c.toBlob((b) => res(b), 'image/png'));
}

// Share the picture through the phone's share sheet; fall back to downloading it.
export async function shareImage(blob: Blob, filename: string, text: string): Promise<void> {
  const file = new File([blob], filename, { type: 'image/png' });
  const nav = navigator as any;
  if (nav.canShare && nav.canShare({ files: [file] })) {
    try { await nav.share({ files: [file], text }); return; } catch { /* user closed the sheet */ return; }
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}

// Adds the page's "in the result" Pillar card (a <template id="result-promo"> rendered by ToolLayout) under a result.
export function appendPromo(out: HTMLElement): void {
  const t = document.getElementById('result-promo') as HTMLTemplateElement | null;
  if (t) out.appendChild(t.content.cloneNode(true));
}
