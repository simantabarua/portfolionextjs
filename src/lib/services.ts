import { Blog, Project } from "@/types";
import { projectsData } from "@/data/projects";
import { blogsData } from "@/data/blogs";

/**
 * Service to handle data fetching for Blogs and Projects.
 * Centralizing this logic ensures consistent error handling and type safety.
 */
export class DataService {
  static async getBlogs(): Promise<Blog[]> {
    // In a real production environment, this could be an external API.
    // For static export, we return the local data array directly.
    return blogsData as unknown as Blog[];
  }

  static async getBlogById(id: string | number): Promise<Blog | null> {
    const blogs = await this.getBlogs();
    return blogs.find((b) => b.id.toString() === id.toString()) || null;
  }

  static async getProjects(): Promise<Project[]> {
    return projectsData as unknown as Project[];
  }

  static async getProjectById(id: string): Promise<Project | null> {
    const projects = await this.getProjects();
    return projects.find((p) => p.id === id) || null;
  }
}
