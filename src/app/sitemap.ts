import { MetadataRoute } from "next";
import { supplements } from "@/data/supplements";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://supplement-lab.example.com";

  // Ingredient pages
  const ingredientUrls = supplements.map((s) => ({
    url: `${baseUrl}/ingredients/${s.slug}`,
    lastModified: new Date(),
  }));

  // Article pages
  const articleUrls = articles.map((a) => ({
    url: `${baseUrl}/articles/${a.slug}`,
    lastModified: new Date(),
  }));

  // Static pages
  const staticPages = [
    "",
    "/ingredients",
    "/purposes",
    "/stacks",
    "/supplements",
    "/faq",
    "/about",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...ingredientUrls, ...articleUrls];
}
