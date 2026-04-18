"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { BsArrowRight, BsCalendar, BsClock } from "react-icons/bs";

interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const categories = ["All", "Development", "Design", "Product", "Career"];

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/data/blogs.json");
        const data = await response.json();
        setBlogs(data);
        setFilteredBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter((b) => b.category === selectedCategory));
    }
  }, [selectedCategory, blogs]);

  const featuredBlog = blogs.find((b) => b.featured);
  const regularBlogs = filteredBlogs.filter((b) => b.id !== featuredBlog?.id);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-4 md:pt-6 px-4 md:px-8 max-w-7xl mx-auto space-y-6">
      <div className="text-center">
        <SectionHeader title="Inside the Code & Beyond" />
        <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mt-4">
          Thoughts on development, design, and the journey of building digital products.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
              selectedCategory === cat
                ? "mystyle text-accent scale-105"
                : "nav-link text-secondary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {selectedCategory === "All" && featuredBlog && (
        <section className="mystyle p-4 md:p-8 rounded-[40px] overflow-hidden group">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2 aspect-video rounded-[30px] overflow-hidden">
              <img
                src={featuredBlog.image}
                alt={featuredBlog.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6 p-4">
              <div className="flex items-center gap-4 text-accent font-bold uppercase tracking-widest text-xs">
                <span className="tech-badge px-3 py-1">{featuredBlog.category}</span>
                <span>Featured Post</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight">
                {featuredBlog.title}
              </h2>
              <p className="text-secondary text-lg leading-relaxed line-clamp-3">
                {featuredBlog.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-secondary font-medium">
                <div className="flex items-center gap-2">
                  <BsCalendar className="text-accent" />
                  {new Date(featuredBlog.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <BsClock className="text-accent" />
                  {featuredBlog.readTime} read
                </div>
              </div>
              <Link
                href={`/blog/${featuredBlog.id}`}
                className="group flex items-center gap-3 text-accent font-bold text-lg hover:translate-x-2 transition-transform duration-300"
              >
                Read Full Story <BsArrowRight />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
        {regularBlogs.map((blog) => (
          <article
            key={blog.id}
            className="mystyle p-6 rounded-[40px] flex flex-col group h-full"
          >
            <div className="relative aspect-video rounded-[24px] overflow-hidden mb-6">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="tech-badge text-xs px-3 py-1 bg-black/5 backdrop-blur-sm border-none shadow-none">
                  {blog.category}
                </span>
              </div>
            </div>

            <div className="space-y-4 flex-grow">
              <div className="flex items-center gap-4 text-xs text-secondary font-bold">
                <div className="flex items-center gap-1">
                  <BsCalendar className="text-accent/60" />
                  {new Date(blog.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <BsClock className="text-accent/60" />
                  {blog.readTime}
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary leading-snug group-hover:text-accent transition-colors duration-300">
                {blog.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed line-clamp-3">
                {blog.excerpt}
              </p>
            </div>

            <Link
              href={`/blog/${blog.id}`}
              className="mt-8 nav-link block w-full py-3 rounded-2xl font-bold text-center group-hover:scale-[1.02] transition-transform"
              style={{ color: "var(--accent)" }}
            >
              Learn More
            </Link>
          </article>
        ))}
      </div>
      
      {filteredBlogs.length === 0 && (
        <div className="text-center py-20">
           <h3 className="text-2xl font-bold text-primary">No articles found in this category.</h3>
           <p className="text-secondary mt-2">Check back soon for new content!</p>
        </div>
      )}
    </div>
  );
}
