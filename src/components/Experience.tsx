"use client";
import React from "react";
import SectionHeader from "./SectionHeader";

const Experience: React.FC = () => {
  const [currentDate, setCurrentDate] = React.useState("");

  React.useEffect(() => {
    setCurrentDate(new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date()));
  }, []);

  const experienceData = [
  {
  title: "Frontend Developer",
  company: "Goama",
  duration: `September 2023 – ${currentDate || "September 2025"} (Ongoing)`,
  points: [
    "✓ Gained hands-on experience developing responsive user interfaces with React, TypeScript, and Redux Toolkit while collaborating in agile teams to implement modern design systems, improving development efficiency by ~20%.",
    "✓ Delivered a complete redesign of the arcade page, increasing user engagement and improving UI responsiveness across devices by ~30% based on interaction and performance improvements.",
    "✓ Successfully migrated the entire tournament platform from React Bootstrap to Tailwind CSS, reducing CSS bundle size and improving frontend performance by ~25% while enhancing maintainability.",
    "✓ Developed and integrated a complex ‘Spin the Wheel’ feature with dynamic animations and optimized state management, contributing to a measurable ~10% increase in revenue.",
    "✓ Proactively identified and fixed critical frontend bugs, reducing UI-related issues and improving overall application stability by ~35%.",
  ],
  recognition: {
    title: "🏆 Recognition:",
    detail:
      "Honored as MVP of the Month for outstanding contributions, initiative, and team collaboration.",
  },
},
    {
      title: "Frontend Development Intern",
      company: "Goama",
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

  return (
    <div
      id="experience"
      className="text-primary mystyle h-full p-4 md:p-8 my-8"
    >
      <div className="max-w-7xl  mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <SectionHeader title={"Experience"} />
        </div>

        <div className="space-y-10 md:space-y-12">
          {experienceData.map((exp, index) => (
            <div className=" mystyle rounded-2xl shadow-md p-4" key={index}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg md:text-xl font-semibold text-secondary !text-left">
                    {exp.company}
                  </p>
                </div>
                <div className="text-sm md:text-base text-secondary font-medium">
                  {exp.duration}
                </div>
              </div>

              <div className="space-y-4 text-secondary">
                {exp.points.map((point, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <span className="h-2 w-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                    <p className="text-sm md:text-base leading-relaxed !text-left">
                      {point.replace("✓ ", "")}
                    </p>
                  </div>
                ))}
              </div>

              {exp.recognition && (
                <div className="mt-6 p-4 rounded-2xl btn-primary border-l-4" style={{ borderColor: 'var(--accent)' }}>
                  <div className="flex items-center space-x-2">
                   
                    <div>
                      <p className="font-bold text-primary text-sm md:text-base !text-left">
                        {exp.recognition.title}
                      </p>
                      <p className="text-secondary text-sm md:text-base leading-relaxed">
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
