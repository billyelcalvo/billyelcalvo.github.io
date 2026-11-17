const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prepends the `base` configured in astro.config.mjs to an internal path. */
export function url(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${clean}` || '/';
}

/** Compares the current path against a navbar link. */
export function isActive(currentPath: string, href: string): boolean {
  const strip = (p: string) => p.replace(BASE, '').replace(/\/$/, '') || '/';
  const current = strip(currentPath);
  const target = strip(url(href));
  return target === '/' ? current === '/' : current === target || current.startsWith(`${target}/`);
}
