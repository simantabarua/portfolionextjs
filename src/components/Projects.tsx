"use client";
import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import Link from "next/link";

interface Project {
  image: string;
  projectName: string;
  projectDescription: string;
  githubLink: string;
  liveSiteLink: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false);

  const fetchProjects = async (): Promise<void> => {
    const res = await fetch("projects.json");
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    const data = await res.json();
    setProjectsData(data.projects);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const renderProject = (project: Project, index: number) => (
    <div key={index} className="h-full w-full mystyle">
      <div className="h-full flex flex-col">
        <div>
          <div className="card-img h-64">
            <img
              src={project.image}
              alt="Project Image"
              className="object-cover w-full rounded-t-3xl"
              loading="lazy"
            />
          </div>
        </div>
        <div className="p-4 flex-grow">
          <h2 className="text-xl font-bold mb-2">{project.projectName}</h2>
          <p className="text-gray-600 mb-4">{project.projectDescription}</p>
          <div className="flex justify-between px-4">
            <Link
              href={project.githubLink}
              target="_blank"
              className="text-blue-500 font-bold hover:text-blue-700"
            >
              GitHub
            </Link>
            <Link
              href={project.liveSiteLink}
              target="_blank"
              className="text-blue-500 font-bold hover:text-blue-700"
            >
              Live Site
            </Link>
            <Link
              href={`/project/${project.projectName.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-blue-500 font-bold hover:text-blue-700"
            >
              Project Details
            </Link>
          </div>
          <div className="flex mt-4 flex-wrap gap-2">
            {project.technologies.map((technology: string, index: number) => (
              <span
                key={index}
                className="mr-2 bg-gray-200 px-2 py-1 rounded-lg text-sm text-gray-700"
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
