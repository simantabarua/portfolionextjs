import React from "react";
import SectionHeader from "./SectionHeader";
const projects = [
  {
    projectName: "EcoTravel",
    projectDescription:
      "A sustainable travel booking platform that promotes eco-friendly travel options.",
    githubLink: "https://i.ibb.co/8Ng18qb/Jazz4.jpg",
    liveSiteLink: "https://www.ecotravel.com",
    image: "https://i.ibb.co/8Ng18qb/Jazz4.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    projectName: "GreenHouse",
    projectDescription:
      "A social network for people who are passionate about sustainability.",
    githubLink: "https://i.ibb.co/8Ng18qb/Jazz4.jpg",
    liveSiteLink: "https://www.greenhouse.com",
    image: "https://i.ibb.co/8Ng18qb/Jazz4.jpg",
    technologies: ["Python", "Django", "PostgreSQL"],
  },
  {
    projectName: "TreePlanter",
    projectDescription:
      "A mobile app that helps people plant trees in their communities.",
    githubLink: "https://github.com/your-username/treeplanter",
    liveSiteLink: "https://www.treeplanter.com",
    image: "https://www.example.com/images/treeplanter.jpg",
    technologies: ["Swift", "UIKit", "Firebase"],
  },
  {
    projectName: "ClimateTracker",
    projectDescription:
      "A website that tracks climate change data and provides insights into its impact.",
    githubLink: "https://github.com/your-username/climatetracker",
    liveSiteLink: "https://www.climatetracker.com",
    image: "https://www.example.com/images/climatetracker.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    projectName: "SustainableLiving",
    projectDescription:
      "A blog that provides tips and advice on sustainable living.",
    githubLink: "https://github.com/your-username/sustainableliving",
    liveSiteLink: "https://www.sustainableliving.com",
    image: "https://www.example.com/images/sustainableliving.jpg",
    technologies: ["WordPress"],
  },
  {
    projectName: "ZeroWaste",
    projectDescription:
      "A community of people who are committed to living a zero-waste lifestyle.",
    githubLink: "https://github.com/your-username/zerowaste",
    liveSiteLink: "https://www.zerowaste.com",
    image: "https://www.example.com/images/zerowaste.jpg",
    technologies: ["Discord"],
  },
];

const Projects = () => {
  return (
    <div id="project" className="mt-8 mystyle h-full p-8">
      <div className="max-w-7xl mx-auto m-10 ">
        <SectionHeader title={"Few selected works."} />
        <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2  gap-8 place-items-center">
          {projects.map((project, index) => (
            <div key={index} className=" h-full w-full mystyle">
              <div className=" h-full flex flex-col">
                <div>
                <img
                  src={project.image}
                  alt="Project Image"
                  className="object-cover w-full h-48 rounded-t-3xl"
                />
               </div>
                <div className="p-4 flex-grow">
                  <h2 className="text-xl font-bold mb-2">
                    {project.projectName}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {project.projectDescription}
                  </p>
                  <div className="flex justify-between">
                    <a
                      href={project.githubLink}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.liveSiteLink}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Live Site
                    </a>
                  </div>
                  <div className="flex mt-4">
                    {project.technologies.map((technology, index) => (
                      <span
                        key={index}
                        className="mr-2 bg-gray-200  px-2 py-1 rounded-lg text-sm text-gray-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
