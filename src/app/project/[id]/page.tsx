import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import SectionHeader from "@/components/SectionHeader";
import { BsGithub, BsGlobe, BsArrowLeft, BsSearch } from "react-icons/bs";
import { HiOutlineLightBulb, HiOutlineCodeBracket } from "react-icons/hi2";

import { DataService } from "@/lib/services";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = await DataService.getProjectById(id);

  if (!project) {
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
            Project Not Found
          </h1>
          <p className="text-secondary text-lg md:text-xl mb-10 max-w-md mx-auto">
            The project you're searching for seems to have wandered off. Let's find another one.
          </p>

          <Link
            href="/#project"
            className="mystyle send-me-btn h-14 px-8 font-bold transition-transform hover:scale-105 mx-auto max-w-xs"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br mystyle py-12 px-4 sm:px-6 rounded-t-none">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="mb-12">
          <Link
            href="/#project"
            className="group flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 w-fit"
          >
            <div className="mystyle p-3 rounded-full group-hover:scale-110 transition-transform">
              <BsArrowLeft fontSize={20} />
            </div>
            <span className="font-bold uppercase tracking-wider text-sm">Back to Projects</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <div>
              <SectionHeader title={project.projectName} />
              <p className="text-secondary text-lg md:text-xl leading-relaxed mt-4">
                {project.projectDescription}
              </p>
            </div>

            {/* Project Links */}
            <div className="flex flex-wrap gap-6 mt-8">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mystyle send-me-btn h-14 px-8 font-bold transition-all duration-300 hover:scale-105"
              >
                <BsGithub fontSize={22} className="mr-2" />
                Source Code
              </a>
              <a
                href={project.liveSiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mystyle send-me-btn h-14 px-8 font-bold transition-all duration-300 hover:scale-105"
                style={{ color: "var(--accent)" }}
              >
                <BsGlobe fontSize={22} className="mr-2" />
                Live Demo
              </a>
            </div>
          </div>

          <div className="mystyle p-4 rounded-[40px] overflow-hidden group">
            <div className="rounded-[32px] overflow-hidden aspect-video relative">
              <img
                src={project.image}
                alt={project.projectName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tech Stack */}
          <div className="md:col-span-1 space-y-6">
            <div className="mystyle p-8 rounded-[40px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="mystyle p-3 rounded-2xl" style={{ color: "var(--accent)" }}>
                  <HiOutlineCodeBracket fontSize={24} />
                </div>
                <h2 className="text-xl font-bold text-primary">Core Tech</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge text-xs uppercase tracking-widest px-4 py-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="md:col-span-2 space-y-6">
            <div className="mystyle p-8 rounded-[40px]">
              <div className="flex items-center gap-4 mb-8">
                <div className="mystyle p-3 rounded-2xl" style={{ color: "#22c55e" }}>
                  <HiOutlineLightBulb fontSize={24} />
                </div>
                <h2 className="text-xl font-bold text-primary">Key Features & Solutions</h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex gap-4 group">
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full mystyle flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: "var(--inset-shadow-dark)" }}>
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                    </div>
                    <span className="text-secondary font-medium leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
