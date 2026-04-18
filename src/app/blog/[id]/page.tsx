import { blogsData } from "@/data/blogs";
import BlogDetailClient from "@/components/BlogDetailClient";

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    id: blog.id.toString(),
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params;

  return <BlogDetailClient id={id} />;
}
