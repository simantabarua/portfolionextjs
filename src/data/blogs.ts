export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: Author;
  date: string;
  readTime: string;
  image: string;
  content: string;
  tags: string[];
  featured?: boolean;
}

export const blogsData: Blog[] = [
  {
    id: 1,
    title: "The Future of Web Development: 2024 and Beyond",
    slug: "future-of-web-dev-2024",
    excerpt: "Exploring the shift towards AI-driven development and the rise of edge computing in modern web architecture.",
    category: "Development",
    author: {
      name: "Simanta Barua",
      role: "Full Stack Developer",
      avatar: "https://i.ibb.co/FHkVf9N/simanta-1.jpg"
    },
    date: "2024-03-10",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000",
    content: "Web development is at a crossroads. As AI becomes integrated into every step of the development lifecycle, we're seeing a fundamental shift in how we build, test, and deploy applications.\n\nEdge computing is no longer a niche concept. With platforms like Vercel and Cloudflare leading the charge, the gap between backend logic and the user is shrinking to milliseconds. In this article, we'll explore why serverless is evolving into 'edgeless' and what developers need to know to stay relevant.",
    tags: ["Development", "AI", "Edge Computing"],
    featured: true
  },
  {
    id: 2,
    title: "Mastering Neumorphism in Modern UI Design",
    slug: "mastering-neumorphism",
    excerpt: "How to balance soft shadows and lighting to create professional neumorphic interfaces WITHOUT compromising usability.",
    category: "Design",
    author: {
      name: "Simanta Barua",
      role: "UI/UX Designer",
      avatar: "https://i.ibb.co/FHkVf9N/simanta-1.jpg"
    },
    date: "2024-03-12",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1000",
    content: "Neumorphism (Soft UI) is a trend that polarizes designers. Done poorly, it creates accessibility nightmares. Done well, it offers a tactile, premium feel that sets an application apart.\n\nThe key lies in monochromatic color palettes and the 'two-shadow' rule. One light shadow for the highlight, and one dark shadow for the depth. We'll break down the CSS behind my own portfolio's design system.",
    tags: ["Design", "UI", "Neumorphism"]
  },
  {
    id: 3,
    title: "Scaleable Next.js Architectures",
    slug: "scaleable-nextjs-architectures",
    excerpt: "A deep dive into folder structures, state management, and API integration for large-scale enterprise projects.",
    category: "Development",
    author: {
      name: "Simanta Barua",
      role: "Lead Developer",
      avatar: "https://i.ibb.co/FHkVf9N/simanta-1.jpg"
    },
    date: "2024-03-15",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=1000",
    content: "When a Next.js project grows beyond a few pages, the default structure often falls apart. Enterprise-grade applications require a modular approach.\n\nIn this technical guide, we'll look at the 'Feature-Based' folder structure, atomic design principles for components, and how to handle server-side state without over-complicating your codebase.",
    tags: ["Next.js", "Architecture", "JavaScript"]
  },
  {
    id: 4,
    title: "Productivity Hacks for Remote Developers",
    slug: "remote-dev-productivity",
    excerpt: "How I managed to stay focused and productive while building a startup from a small home office.",
    category: "Career",
    author: {
      name: "Simanta Barua",
      role: "Founder & CTO",
      avatar: "https://i.ibb.co/FHkVf9N/simanta-1.jpg"
    },
    date: "2024-03-18",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000",
    content: "Remote work is a double-edged sword. While it offers freedom, it also demands rigorous self-discipline. After three years of full-time remote development, I've narrowed down the tools and habits that actually move the needle.\n\nFrom time-blocking to asynchronous communication protocols, here is my blueprint for thriving outside the traditional office.",
    tags: ["Productivity", "Remote Work", "Mental Health"]
  },
  {
    id: 5,
    title: "The Rise of TypeScript: Why You Can't Ignore It",
    slug: "rise-of-typescript",
    excerpt: "Why TypeScript has become the industry standard and how it saves thousands of dollars in debugging costs.",
    category: "Development",
    author: {
      name: "Simanta Barua",
      role: "Full Stack Developer",
      avatar: "https://i.ibb.co/FHkVf9N/simanta-1.jpg"
    },
    date: "2024-03-20",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1000",
    content: "If you're still writing pure JavaScript for production, you're living on borrowed time. TypeScript is no longer optional for serious teams.\n\nWe'll discuss how type safety drastically reduces runtime errors and why the initial setup cost is far outweighed by the long-term maintainability benefits.",
    tags: ["TypeScript", "JavaScript", "Best Practices"]
  },
  {
    id: 6,
    title: "Designing for Accessibility (a11y)",
    slug: "designing-for-accessibility",
    excerpt: "Ensuring your digital products are usable by everyone, including those with visual and auditory impairments.",
    category: "Design",
    author: {
      name: "Simanta Barua",
      role: "Accessibility Expert",
      avatar: "https://i.ibb.co/FHkVf9N/simanta-1.jpg"
    },
    date: "2024-03-22",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    content: "Accessibility shouldn't be an afterthought; it should be baked into the design process from day one.\n\nLearn how to use semantic HTML, ARIA labels, and high-contrast color palettes to create a truly inclusive user experience. Accessibility is not just about compliance; it's about good design.",
    tags: ["a11y", "Inclusive Design", "UX"]
  },
  {
    id: 7,
    title: "Building Micro-SaaS: From Zero to First Dollar",
    slug: "building-micro-saas",
    excerpt: "My journey building and launching a small niche product in 30 days.",
    category: "Product",
    author: {
      name: "Simanta Barua",
      role: "Indie Hacker",
      avatar: "https://i.ibb.co/FHkVf9N/simanta-1.jpg"
    },
    date: "2024-03-25",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=1000",
    content: "Micro-SaaS products are a great way to generate passive income. The secret is to find a small, painful problem and solve it perfectly.\n\nI'll take you through my 30-day build process, from validation and development to marketing and getting my first paying customer.",
    tags: ["SaaS", "Indie Hacking", "Entrepreneurship"]
  },
  {
    id: 8,
    title: "Clean Code: Principles for Sustainable Software",
    slug: "clean-code-principles",
    excerpt: "Simple rules to keep your codebase clean and easy to maintain over years of development.",
    category: "Development",
    author: {
      name: "Simanta Barua",
      role: "Software Architect",
      avatar: "https://i.ibb.co/FHkVf9N/simanta-1.jpg"
    },
    date: "2024-03-28",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&q=80&w=1000",
    content: "Writing code that works is easy. Writing code that can be understood by others and maintained over time is hard.\n\nWe'll cover core principles like SOLID, DRY, and KISS, and how to apply them in a modern React/Next.js environment.",
    tags: ["Clean Code", "Engineering", "Software Design"]
  },
  {
    id: 9,
    title: "How to Build a High-Value Design System",
    slug: "value-design-system",
    excerpt: "Moving beyond colors and components to build a system that saves your team weeks of work.",
    category: "Design",
    author: {
      name: "Simanta Barua",
      role: "Design Lead",
      avatar: "https://i.ibb.co/FHkVf9N/simanta-1.jpg"
    },
    date: "2024-04-01",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
    content: "A design system is more than just a library of UI components. It's a shared language between design and engineering.\n\nLearn how to structure your design tokens, document your components, and ensure your system is actually adopted by the rest of the organization.",
    tags: ["Design Systems", "Figma", "DevOps"]
  },
  {
    id: 10,
    title: "Navigating Your Career as a Junior Developer",
    slug: "junior-dev-career-guide",
    excerpt: "Everything I wish I knew when I landed my first professional engineering role.",
    category: "Career",
    author: {
      name: "Simanta Barua",
      role: "Mentor",
      avatar: "https://i.ibb.co/FHkVf9N/simanta-1.jpg"
    },
    date: "2024-04-03",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000",
    content: "The first year of your professional career is the most critical. It sets the foundation for everything that comes after.\n\nWe'll discuss how to ask for help without being annoying, how to manage your learning path, and how to effectively contribute to team meetings and code reviews.",
    tags: ["Career Advice", "Junior Developer", "Mentorship"]
  },
  {
    id: 11,
    title: "Optimized Database Design for Web Apps",
    slug: "database-design-web-apps",
    excerpt: "SQL or NoSQL? How to choose the right database and design a schema that won't bottleneck your growth.",
    category: "Development",
    author: {
      name: "Simanta Barua",
      role: "Backend Engineer",
      avatar: "https://i.ibb.co/FHkVf9N/simanta-1.jpg"
    },
    date: "2024-04-05",
    readTime: "13 min",
    image: "https://images.unsplash.com/photo-1544383023-5154b8293d44?auto=format&fit=crop&q=80&w=1000",
    content: "Your database is the heart of your application. Scaling it is often the hardest part of systems design.\n\nWe'll dive into Postgres optimization, the pros and cons of MongoDB, and how to use caching (Redis) to take the load off your primary data store.",
    tags: ["Database", "SQL", "Scaleability"]
  },
  {
    id: 12,
    title: "Mastering the Art of User Research",
    slug: "mastering-user-research",
    excerpt: "Stop guessing and start building what your users actually need by asking the right questions.",
    category: "Product",
    author: {
      name: "Simanta Barua",
      role: "Product Manager",
      avatar: "https://i.ibb.co/FHkVf9N/simanta-1.jpg"
    },
    date: "2024-04-08",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    content: "Great products are built on deep user insights. User research is not just about interviews; it's about observation and empathy.\n\nLearn my framework for conducting user interviews that reveal hidden pain points and how to translate those insights into actionable product features.",
    tags: ["User Research", "Product Management", "UX Strategy"]
  }
];
