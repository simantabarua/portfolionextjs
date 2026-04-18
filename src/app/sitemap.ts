import { MetadataRoute } from "next";
import { blogsData } from "@/data/blogs";
import { projectsData } from "@/data/projects";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = blogsData.map((blog) => ({
    url: `${SITE_URL}/blog/${blog.id}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projects = projectsData.map((project) => ({
    url: `${SITE_URL}/project/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "always" as const,
    priority: 1,
  }));

  return [...routes, ...blogs, ...projects];
}
