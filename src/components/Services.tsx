"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { FaCode, FaServer, FaDatabase, FaLaptopCode, FaMagic, FaRocket } from "react-icons/fa";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
}

const Services: React.FC = () => {
  const servicesData: ServiceItem[] = [
    {
      title: "Frontend Development",
      description: "Crafting highly responsive, pixel-perfect, and modern user interfaces with advanced interactive components.",
      icon: <FaCode />,
      highlights: ["React & Next.js", "Tailwind CSS", "TypeScript", "State Management"],
    },
    {
      title: "Backend & API Development",
      description: "Building secure, scalable, and optimized server-side logic and robustness-oriented REST/GraphQL APIs.",
      icon: <FaServer />,
      highlights: ["Node.js", "Express", "RESTful APIs", "Authentication / JWT"],
    },
    {
      title: "Database Design & Management",
      description: "Designing efficient, high-performance database schemas with security and data integrity in mind.",
      icon: <FaDatabase />,
      highlights: ["MongoDB / Mongoose", "PostgreSQL", "Prisma ORM", "Query Optimization"],
    },
    {
      title: "Full-Stack Web Apps",
      description: "Developing end-to-end applications from database management systems to responsive frontend styling.",
      icon: <FaLaptopCode />,
      highlights: ["MERN Stack", "CRUD Workflows", "API Integration", "Secure Auth"],
    },
    {
      title: "Interactive UI & Animations",
      description: "Bringing web interfaces to life with smooth, high-performance transitions and premium micro-animations.",
      icon: <FaMagic />,
      highlights: ["GSAP Animations", "Framer Motion", "CSS Variables", "Interactive Hovers"],
    },
    {
      title: "Performance & SEO Optimization",
      description: "Auditing and enhancing application speed, Core Web Vitals, and organic search ranking structures.",
      icon: <FaRocket />,
      highlights: ["Server-Side Rendering", "Lazy Loading", "SEO Semantic Tags", "Lighthouse Audits"],
    },
  ];

  return (
    <div id="services" className="text-primary mystyle h-full p-4 md:p-8 my-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <SectionHeader title={"My Services"} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="mystyle p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
            >
              <div>
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mystyle text-2xl transition-all duration-300 group-hover:scale-110"
                  style={{ color: "var(--accent)" }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-[var(--accent)] transition-colors duration-300 !text-left">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-secondary leading-relaxed mb-6 !text-left">
                  {service.description}
                </p>
              </div>

              <div className="border-t border-secondary/10 pt-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="tech-badge text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
