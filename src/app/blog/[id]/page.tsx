import Link from "next/link";
import React from "react";
import { blogsData } from "@/data/blogs";
import SectionHeader from "@/components/SectionHeader";
import { BsArrowLeft, BsCalendar, BsPerson, BsClock, BsSearch } from "react-icons/bs";

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    id: blog.id.toString(),
  }));
}

function BlogNotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="mystyle p-8 md:p-16 rounded-[40px] shadow-xl max-w-2xl w-full text-center">
        <div className="relative mb-8 flex justify-center">
          <div className="text-[8rem] md:text-[12rem] font-bold opacity-10 select-none">
            404
          </div>
          <div 
            className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl"
            style={{ color: "var(--accent)" }}
          >
            <BsSearch />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          Article Not Found
        </h1>
        <p className="text-secondary text-lg md:text-xl mb-10 max-w-md mx-auto">
          The story you're looking for hasn't been written yet, or it's hiding in another category.
        </p>

        <Link
          href="/blog"
          className="mystyle send-me-btn h-14 px-8 font-bold transition-transform hover:scale-105 mx-auto max-w-xs"
        >
          Back to Blogs
        </Link>
      </div>
    </div>
  );
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blogId = parseInt(id);

  const blog = blogsData.find((b) => b.id === blogId);

  if (!blog) return <BlogNotFound />;

  return (
    <div className="min-h-screen bg-gradient-to-br">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        {/* Back Button */}
        <div className="mb-12">
          <Link
            href="/blog"
            className="group flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 w-fit"
          >
            <div className="mystyle p-3 rounded-full group-hover:scale-110 transition-transform">
              <BsArrowLeft fontSize={20} />
            </div>
            <span className="font-bold uppercase tracking-wider text-sm">Back to Articles</span>
          </Link>
        </div>

        <article className="space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <span
                className="px-6 py-2 rounded-full text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg"
                style={{ backgroundColor: "var(--accent)" }}
              >
                {blog.category}
              </span>
            </div>
            
            <div className="text-center">
              <SectionHeader title={blog.title} />
            </div>

            {/* Metadata */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-secondary font-medium py-6 border-y border-gray-300/20">
              <div className="flex items-center gap-2">
                <BsPerson className="text-accent" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <BsCalendar className="text-accent" />
                <span>{new Date(blog.date).toLocaleDateString(undefined, { dateStyle: 'long' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <BsClock className="text-accent" />
                <span>{blog.readTime} read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mystyle p-3 rounded-[40px] overflow-hidden group">
            <div className="rounded-[30px] overflow-hidden aspect-video relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>

          {/* Content */}
          <div className="mystyle p-8 md:p-12 rounded-[40px] text-lg leading-relaxed text-secondary space-y-8">
             {blog.content.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
             ))}
          </div>

          {/* Footer / Tags */}
          <div className="mystyle p-8 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="tech-badge px-4 py-2 text-xs uppercase tracking-widest"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <Link
              href="/blog"
              className="nav-link px-8 py-3 font-bold transition-all duration-300"
              style={{ color: "var(--accent)" }}
            >
              Share Article
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
