/** Canonical site URL for SEO (metadata, sitemap, robots, structured data). */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://abhishekenterprises.com"
).replace(/\/$/, "");
