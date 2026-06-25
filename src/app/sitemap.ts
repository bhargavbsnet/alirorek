import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alirorek.com";
  
  const routes = [
    "",
    "/about",
    "/services",
    "/resourceflow",
    "/membership",
    "/solutions",
    "/industries",
    "/resources",
    "/blog",
    "/case-studies",
    "/careers",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
    "/cookies",
    "/security",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
