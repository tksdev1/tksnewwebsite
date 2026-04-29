import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://thetks.com/sitemap.xml",
    host: "https://thetks.com",
  };
}
