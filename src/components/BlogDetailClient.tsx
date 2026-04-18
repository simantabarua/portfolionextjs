"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { 
  BsArrowLeft, 
  BsCalendar, 
  BsPerson, 
  BsClock, 
  BsSearch, 
  BsShare,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

import { Blog } from "@/types";
import { DataService } from "@/lib/services";

export default function BlogDetailClient({ id }: { id: string }) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await DataService.getBlogById(id);
        
        if (data) {
          setBlog(data);
          // Get related blogs from same category
          const allBlogs = await DataService.getBlogs();
          setRelatedBlogs(allBlogs.filter((b) => b.category === data.category && b.id.toString() !== data.id.toString()).slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="mystyle p-8 md:p-16 rounded-[40px] shadow-xl max-w-2xl w-full text-center">
          <div className="relative mb-8 flex justify-center">
            <div className="text-[8rem] md:text-[12rem] font-bold opacity-10 select-none">
              404
            </div>
            <div 
              className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl text-accent"
            >
              <BsSearch />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4">Article Not Found</h2>
          <Link href="/blog" className="mystyle send-me-btn h-14 px-8 font-bold mx-auto max-w-xs transition-all hover:scale-105">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-10 pb-20 px-4 md:px-8 max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          href="/blog"
          className="group flex items-center gap-3 text-secondary hover:text-primary transition-all duration-300 w-fit mb-12"
        >
          <div className="mystyle p-3 rounded-full group-hover:scale-110 shadow-sm transition-transform">
            <BsArrowLeft fontSize={20} />
          </div>
          <span className="font-bold uppercase tracking-widest text-xs">Back to Articles</span>
        </Link>

        {/* Header Section */}
        <header className="space-y-8 text-center max-w-4xl mx-auto">
          <div className="flex justify-center">
            <span className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg bg-accent">
              {blog.category}
            </span>
          </div>
          
          <SectionHeader title={blog.title} />

          {/* Author & Metadata */}
          <div className="flex flex-col items-center gap-6 py-6 border-y border-gray-300/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full mystyle p-1 overflow-hidden relative">
                <Image src={blog.author.avatar} alt={blog.author.name} fill className="rounded-full object-cover" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-primary">{blog.author.name}</h4>
                <p className="text-xs text-secondary font-medium uppercase tracking-tighter">{blog.author.role}</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-secondary text-sm font-semibold">
              <div className="flex items-center gap-2">
                <BsCalendar className="text-accent/60" />
                {new Date(blog.date).toLocaleDateString(undefined, { dateStyle: 'long' })}
              </div>
              <div className="flex items-center gap-2">
                <BsClock className="text-accent/60" />
                {blog.readTime} read
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mystyle p-3 rounded-[40px] mt-12 mb-16 shadow-2xl overflow-hidden aspect-video relative group">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover rounded-[30px] transition-transform duration-1000 group-hover:scale-105"
          />
        </div>

        {/* Article Body */}
        <article className="mystyle p-8 md:p-16 rounded-[40px] relative">
          {/* Social Share Sidebar */}
          <div className="hidden xl:flex flex-col gap-4 absolute -left-20 top-16">
            <button className="mystyle p-3 rounded-2xl text-secondary hover:text-accent transition-all hover:scale-110"><BsShare fontSize={18} /></button>
            <button className="mystyle p-3 rounded-2xl text-secondary hover:text-accent transition-all hover:scale-110"><BsTwitter fontSize={18} /></button>
            <button className="mystyle p-3 rounded-2xl text-secondary hover:text-accent transition-all hover:scale-110"><BsLinkedin fontSize={18} /></button>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-secondary">
             <p className="text-xl font-medium text-primary mb-10 leading-relaxed italic border-l-4 border-accent pl-6">
                {blog.excerpt}
             </p>
             <div className="space-y-8 leading-loose text-lg font-medium">
               {blog.content.split('\n\n').map((para, i) => (
                 <p key={i}>{para}</p>
               ))}
             </div>
          </div>

          <div className="mt-16 pt-12 border-t border-gray-300/10">
            <div className="flex flex-wrap gap-3">
              {blog.tags.map((tag, index) => (
                <span key={index} className="tech-badge px-5 py-2 text-xs uppercase font-bold tracking-widest">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedBlogs.length > 0 && (
          <div className="mt-20 space-y-10">
            <h3 className="text-3xl font-bold text-primary text-center">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((b) => (
                <Link key={b.id} href={`/blog/${b.id}`} className="mystyle p-4 rounded-[30px] group block transition-all hover:-translate-y-2">
                  <div className="aspect-video rounded-[20px] overflow-hidden mb-4 relative">
                    <Image src={b.image} alt={b.title} fill className="object-cover" />
                  </div>
                  <h4 className="font-bold text-primary group-hover:text-accent leading-tight line-clamp-2">
                    {b.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
    </div>
  );
}
