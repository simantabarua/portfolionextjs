"use client";
import React from "react";
import SectionHeader from "./SectionHeader";

const experienceData = [
  {
    title: "Frontend Developer",
    company: "Goama",
    duration: "September 2023 – September 2025 (Ongoing)",
    points: [
      "✓ Gained hands-on experience developing responsive user interfaces with React, TypeScript, and Redux Toolkit while collaborating in agile teams to implement modern design systems.",
      "✓ Delivered a complete redesign of the arcade page, enhancing user engagement, visual consistency, and responsiveness across devices.",
      "✓ Successfully migrated the entire tournament platform from React Bootstrap to Tailwind CSS, resulting in cleaner, more maintainable styles and improved frontend performance.",
      "✓ Developed and integrated a complex ‘Spin the Wheel’ feature with dynamic animations and state management for seamless user interaction.",
      "✓ Proactively identified and fixed critical frontend bugs, improving application stability and overall user experience.",
    ],
    recognition: {
      title: "🏆 Recognition:",
      detail:
        "Honored as MVP of the Month for outstanding contributions, initiative, and team collaboration.",
    },
  },
  {
    title: "Frontend Development Intern",
    company: "Goram Tech",
    duration: "June 2023 – August 2023",
    points: [
      "✓ Built responsive UI components using HTML, CSS, and basic JavaScript.",
      "✓ Collaborated with the team to implement feedback and improve page performance.",
      "✓ Gained practical exposure to real-world agile workflows.",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    company: "Self-employed",
    duration: "2021 – 2023",
    points: [
      "✓ Developed custom websites for clients using React and JavaScript.",
      "✓ Implemented responsive layouts and animations using CSS and Tailwind.",
      "✓ Integrated third-party APIs and optimized performance for production.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <div
      id="experience"
      className="text-gray-800 mystyle h-full p-4 md:p-8 my-8"
    >
      <div className="max-w-7xl  mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <SectionHeader title={"Experience"} />
        </div>

        <div className="space-y-10 md:space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className=" mystyle rounded-2xl shadow-md p-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg md:text-xl font-semibold text-gray-600">
                    {exp.company}
                  </p>
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {exp.duration}
                </div>
              </div>

              <div className="space-y-3 md:space-y-4 text-gray-700">
                {exp.points.map((point, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <span className="text-gray-500 mt-1 text-lg">✓</span>
                    <p className="text-sm md:text-base leading-relaxed">
                      {point.replace("✓ ", "")}
                    </p>
                  </div>
                ))}
              </div>

              {exp.recognition && (
                <div className="mt-6 p-4 bg-gradient-to-r from-white-50 to-gray-100 rounded-2xl border-l-4 border-gray-400 border-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <p className="font-bold text-gray-800 text-sm md:text-base">
                        {exp.recognition.title}
                      </p>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {exp.recognition.detail}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
