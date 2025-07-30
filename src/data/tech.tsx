import { BiLogoJavascript, BiLogoMongodb } from "react-icons/bi";
import {
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaSass,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiFirebase,
  SiNextdotjs,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiPrisma,
  SiGithub,
  SiStyledcomponents,
  SiEslint,
  SiJirasoftware,
} from "react-icons/si";
const techStack = [
  {
    icon: <BiLogoJavascript className="icon-style" />,
    title: "JavaScript",
    link: "https://javascript.com",
  },
  {
    icon: <SiTypescript className="icon-style" />,
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: <FaReact className="icon-style" />,
    title: "React",
    link: "https://reactjs.org",
  },

  {
    icon: <SiNextdotjs className="icon-style" />,
    title: "Next.js",
    link: "https://nextjs.org",
  },
  {
    icon: <SiRedux className="icon-style" />,
    title: "Redux",
    link: "https://redux.js.org/",
  },
  {
    icon: <FaNodeJs className="icon-style" />,
    title: "Node.js",
    link: "https://nodejs.org",
  },

  {
    icon: <SiExpress className="icon-style" />,
    title: "Express.js",
    link: "https://expressjs.com",
  },
  {
    icon: <BiLogoMongodb className="icon-style" />,
    title: "MongoDB",
    link: "https://mongodb.com",
  },
  {
    icon: <SiPrisma className="icon-style" />,
    title: "Prisma",
    link: "https://www.prisma.io",
  },

  {
    icon: <SiTailwindcss className="icon-style" />,
    title: "Tailwind CSS",
    link: "https://tailwindcss.com",
  },
  {
    icon: <SiBootstrap className="icon-style" />,
    title: "Bootstrap",
    link: "https://getbootstrap.com",
  },
  {
    icon: <SiCss3 className="icon-style" />,
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: <SiHtml5 className="icon-style" />,
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <FaSass className="icon-style" />,
    title: "Sass",
    link: "https://sass-lang.com/",
  },
  {
    icon: <SiStyledcomponents className="icon-style" />,
    title: "Styled Components",
    link: "https://styled-components.com/",
  },
  {
    icon: <FaGitAlt className="icon-style" />,
    title: "Git",
    link: "https://git-scm.com/",
  },
  {
    icon: <SiGithub className="icon-style" />,
    title: "GitHub",
    link: "https://github.com",
  },
  {
    icon: <SiFirebase className="icon-style" />,
    title: "Firebase",
    link: "https://firebase.google.com/",
  },

  {
    icon: <FaDocker className="icon-style" />,
    title: "Docker",
    link: "https://www.docker.com/",
  },

  {
    icon: <SiPostman className="icon-style" />,
    title: "Postman",
    link: "https://www.postman.com/",
  },
  {
    icon: <SiVercel className="icon-style" />,
    title: "Vercel",
    link: "https://vercel.com/",
  },
  {
    icon: <SiNetlify className="icon-style" />,
    title: "Netlify",
    link: "https://netlify.com/",
  },

  {
    icon: <FaFigma className="icon-style" />,
    title: "Figma",
    link: "https://figma.com",
  },
  {
    icon: <SiEslint className="icon-style" />,
    title: "ESLint",
    link: "https://eslint.org/",
  },
  {
    icon: <SiJirasoftware className="icon-style" />,
    title: "Jira",
    link: "https://www.atlassian.com/software/jira",
  },
];

export default function TechStack() {
  return (
    <div className="flex justify-between flex-wrap gap-4 my-2 md:my-6">
      {techStack.map(({ icon, title, link }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          title={title}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
