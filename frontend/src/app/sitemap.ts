import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, priority: 1 },
    { url: `${siteUrl}/services`, priority: 0.9 },
    { url: `${siteUrl}/contact`, priority: 0.9 },
  ];
}
