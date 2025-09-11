"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
  tags: string[];
}

function BlogNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
      <p className="text-gray-600 mb-6">
        The blog you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl font-medium text-white"
        style={{ backgroundColor: "#6c63ff" }}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default function BlogDetailPage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [blogId, setBlogId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchParamsAndBlogs() {
      const params = await paramsPromise; // unwrap the promise
      setBlogId(parseInt(params.id));

      try {
        const res = await fetch("/blogs.json");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchParamsAndBlogs();
  }, [paramsPromise]);

  if (loading || blogId === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) return <BlogNotFound />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:opacity-90 mb-8"
          style={{
            background: "#f0f0f3",
            boxShadow:
              "inset 9px 9px 16px #a1a1a6, inset -9px -9px 16px #ffffff",
            color: "#6c63ff",
          }}
        >
          ← Back to Blogs
        </Link>

        <article className="rounded-2xl p-8 mb-8" style={{ background: "#f0f0f3", boxShadow: "9px 9px 16px #a1a1a6, -9px -9px 16px #ffffff" }}>
          <div className="mb-6">
            <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: "#6c63ff", color: "#ffffff" }}>
              {blog.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">{blog.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2"><span className="font-medium">Author:</span> {blog.author}</div>
            <div className="flex items-center gap-2"><span className="font-medium">Published:</span> {new Date(blog.date).toLocaleDateString()}</div>
            <div className="flex items-center gap-2"><span className="font-medium">Reading Time:</span> {blog.readTime}</div>
          </div>

          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg leading-relaxed mb-6">{blog.content}</p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 rounded-md text-sm" style={{ backgroundColor: "#cacace", color: "#2d2d2d" }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
