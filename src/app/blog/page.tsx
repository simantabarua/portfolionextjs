import React from "react";
import Link from "next/link";
import { blogsData } from "@/data/blogs";

export default function BlogPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 h-full min-h-screen pt-10 md:pt-16 mystyle">
      {blogsData.map((blog) => (
        <article
          key={blog.id}
          className="mystyle rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl"
        >
          <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1 rounded-full text-sm font-medium text-white shadow-lg"
                style={{ backgroundColor: "var(--accent)" }}
              >
                {blog.category}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-primary">{blog.title}</h2>

            <p className="text-secondary overflow-hidden line-clamp-3">
              {blog.content}
            </p>

            <div className="flex items-center justify-between text-sm text-secondary">
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
                  className="tech-badge"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={`/blog/${blog.id}`}
              className="nav-link block w-full py-3 rounded-xl font-medium text-center transition-all duration-200"
              style={{ color: "var(--accent)" }}
            >
              Read More
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
