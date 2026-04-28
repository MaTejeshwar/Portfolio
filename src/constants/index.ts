// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/MaTejeshwar",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "AI/ML Enthusiast",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Student Researcher",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "B.Tech CSE Student",
    company_name: "Open to Internships",
    icon: web,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Focusing on AI, Machine Learning, and Full-Stack Development.",
      "Building hands-on projects involving scalable systems and cybersecurity.",
      "Actively participating in coding challenges and learning by doing.",
      "Seeking internship opportunities to apply my skills to real-world impactful problems.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Arbiter",
    description:
      "A JavaScript project focusing on intelligent arbitration or decision-making.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/MaTejeshwar/Arbiter",
    live_site_link: "https://github.com/MaTejeshwar/Arbiter",
  },
  {
    name: "DevMate-AI",
    description:
      "An AI assistant built in TypeScript to help developers streamline their workflow.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/MaTejeshwar/DevMate-AI",
    live_site_link: "https://github.com/MaTejeshwar/DevMate-AI",
  },
  {
    name: "StreetFlow-AI",
    description:
      "A Python-based AI project for analyzing and managing street traffic flows.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/MaTejeshwar/StreetFlow-AI",
    live_site_link: "https://github.com/MaTejeshwar/StreetFlow-AI",
  },
  {
    name: "BloomCycle-AI",
    description:
      "An AI-powered solution for cycle management or plant blooming cycles.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/MaTejeshwar/BloomCycle-AI",
    live_site_link: "https://github.com/MaTejeshwar/BloomCycle-AI",
  },
  {
    name: "smart-nearby-recommender",
    description:
      "A smart application that recommends nearby places or services based on user preferences.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/MaTejeshwar/smart-nearby-recommender",
    live_site_link: "https://github.com/MaTejeshwar/smart-nearby-recommender",
  },
  {
    name: "Vibe-Architect",
    description:
      "A web design and UI architect application for modern interfaces.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/MaTejeshwar/Vibe-Architect",
    live_site_link: "https://github.com/MaTejeshwar/Vibe-Architect",
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/MaTejeshwar",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/m-a-tejeshwar-63a94a32a",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com/MaTejeshwar",
  },
  {
    name: "Instagram",
    icon: youtube,
    link: "https://www.instagram.com/tejesh_war._/",
  },
] as const;
