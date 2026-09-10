/**
 * Resolves a path under /public against Vite's configured base path, so
 * links to static assets (resume, certificates, images) work whether the
 * app is served at "/" (local dev, Vercel) or a subpath like "/saie/"
 * (a GitHub Pages project site).
 */
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
