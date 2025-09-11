"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  tags: string[];
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async (): Promise<void> => {
    try {
      const res = await fetch("blogs.json");
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  p-4 h-full min-h-screen pt-10 md:pt-16 mystyle">
      {blogs.map((blog) => (
        <article
          key={blog.id}
          className="rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl"
          style={{
            background: "#f0f0f3",
            boxShadow: "9px 9px 16px #a1a1a6, -9px -9px 16px #ffffff",
          }}
        >
          <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{ backgroundColor: "#6c63ff", color: "#fff" }}
              >
                {blog.category}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>

            <p className="text-gray-600 overflow-hidden line-clamp-3">
              {blog.content}
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span>{blog.author}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
              <span>{new Date(blog.date).toLocaleDateString()}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded-md text-xs"
                  style={{ backgroundColor: "#cacace", color: "#2d2d2d" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={`/blog/${blog.id}`}
              className="block w-full py-3 rounded-xl font-medium text-center transition-all duration-200 hover:opacity-90"
              style={{
                background: "#f0f0f3",
                boxShadow:
                  "inset 9px 9px 16px #a1a1a6, inset -9px -9px 16px #ffffff",
                color: "#6c63ff",
              }}
            >
              Read More
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
