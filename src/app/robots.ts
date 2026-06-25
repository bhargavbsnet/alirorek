import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/_next/",
        "/thank-you"
      ],
    },
    sitemap: "https://alirorek.com/sitemap.xml",
  };
}
