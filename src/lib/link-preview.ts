// Best-effort build-time link preview: fetches a URL's own og:image so
// external cards can show a real thumbnail automatically, no manual work.
// Many sites (LinkedIn, Facebook) block scrapers or require a login wall —
// this fails silently (returns null) for those rather than breaking the
// build. Set `imageUrl` by hand on the data entry for anything that comes
// back empty and you want a thumbnail on anyway.
const cache = new Map<string, Promise<string | null>>();

async function fetchOgImage(url: string): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 6000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; LinkPreviewBot/1.0; +https://bealambitco.com)",
        Accept: "text/html",
      },
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    const html = await res.text();
    const match =
      html.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["']/i) ??
      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]*property=["']og:image["']/i);
    return match?.[1]?.trim() || null;
  } catch {
    return null;
  }
}

export function getPreviewImage(url: string): Promise<string | null> {
  if (!cache.has(url)) cache.set(url, fetchOgImage(url));
  return cache.get(url)!;
}
