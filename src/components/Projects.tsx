"use client";
import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import Link from "next/link";
import { projectsData, Project } from "@/data/projects";
import Image from "next/image";

const ProjectImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="card-img h-64 relative overflow-hidden bg-secondary/10 rounded-t-3xl">
      {isLoading && (
        <div className="absolute inset-0 bg-secondary/20 animate-pulse z-10" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover rounded-t-3xl transition-all duration-700 ${
          isLoading ? "opacity-0 scale-105" : "opacity-100 scale-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

const Projects: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false);

  const renderProject = (project: Project, index: number) => (
    <div key={index} className="h-full w-full mystyle">
      <div className="h-full flex flex-col">
        <div>
          <ProjectImage src={project.image} alt={project.projectName} />
        </div>
        <div className="p-4 flex-grow">
          <h2 className="text-xl font-bold mb-2 text-primary">{project.projectName}</h2>
          <p className="text-secondary mb-4">{project.projectDescription}</p>
          <div className="flex justify-between px-4">
            <Link
              href={project.githubLink}
              target="_blank"
              className="font-bold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              GitHub
            </Link>
            <Link
              href={project.liveSiteLink}
              target="_blank"
              className="font-bold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              Live Site
            </Link>
            <Link
              href={`/project/${project.id}`}
              className="font-bold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              Project Details
            </Link>
          </div>
          <div className="flex mt-4 flex-wrap gap-2">
            {project.technologies.map((technology: string, index: number) => (
              <span
                key={index}
                className="tech-badge"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const toggleShowAllProjects = (): void => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <div id="project" className="mt-8 mystyle h-full p-4 md:p-8">
      <div className="max-w-7xl mx-auto m-8 md:mt-10 md:mb-14">
        <SectionHeader title={"Few selected works"} />
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 place-items-center my-2">
          {showAllProjects
            ? projectsData.map(renderProject)
            : projectsData.slice(0, 4).map(renderProject)}
        </div>
        <div className="text-center mt-4">
          <button
            onClick={toggleShowAllProjects}
            className="mystyle send-me-btn h-16 w-full max-w-xs mt-4 md:mt-6 font-bold"
          >
            {showAllProjects ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
