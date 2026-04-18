import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  // Await the params Promise
  const { id } = await params;

  const project = projectsData.find(
    (p) => p.id.toLowerCase() === id.toLowerCase()
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br mystyle">
        <div className=" mystyle p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <div style={{ color: "var(--accent)" }} className="text-5xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-primary mb-2">
            Project Not Found
          </h2>
          <p className="text-secondary mb-6">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/#project"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br mystyle py-12 px-4 sm:px-6 rounded-t-none">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8 flex justify-center">
          <Link
            href="/#project"
            className="mystyle px-6 py-3 font-bold flex items-center transition-all duration-300 hover:scale-105"
            style={{ color: "#6c63ff" }}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className=" mystyle rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {project.projectName}
            </h1>
            <p className="text-secondary text-lg mb-6">
              {project.projectDescription}
            </p>

            {/* Project Links */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mystyle flex items-center px-6 py-3 font-bold transition-all duration-300 hover:scale-105"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Repository
              </a>
              <a
                href={project.liveSiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mystyle flex items-center px-6 py-3 font-bold transition-all duration-300 hover:scale-105"
                style={{ color: "var(--accent)" }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
                Live Demo
              </a>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative h-64 md:h-96 bg-gray-200">
            <img
              src={project.image}
              alt={project.projectName}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Technologies Section */}
        <div className=" mystyle rounded-2xl shadow-xl p-6 md:p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-lg mr-4" style={{ backgroundColor: "var(--inset-shadow-dark)" }}>
              <svg
                className="w-6 h-6"
                style={{ color: "var(--accent)" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary">
              Technologies Used
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="tech-badge"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className=" mystyle rounded-2xl shadow-xl p-6 md:p-8">
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-lg mr-4" style={{ backgroundColor: "var(--inset-shadow-dark)" }}>
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary">Key Features</h2>
          </div>

          <ul className="space-y-4">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--inset-shadow-dark)" }}>
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span className="text-secondary">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
