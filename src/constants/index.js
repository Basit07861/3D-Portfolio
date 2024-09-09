import { meta, shopify, starbucks, tesla, job } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snakeblock,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Final Year Project - Full Stack Job Portal",
        university_name: "Dr. APJ Abdul Kalam Technical University",
        icon: job, // Replace with an appropriate icon or logo
        iconBg: '#accbe1', // Choose a background color
        date: "September 2024 - June 2025",
        points: [
            "Developed a full-stack job portal using ReactJS, Express, NodeJS, and MongoDB.",
            "Collaborated with a team of 3 members, contributing to both frontend and backend development.",
            "Implemented features like user authentication, job posting, and job search functionalities.",
            "Designed a responsive and user-friendly interface for both job seekers and employers.",
            "Ensured smooth interaction between the frontend and backend by building RESTful APIs."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Basit07861',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/basit-mahmood',
    }
];

export const projects = [
    {
        iconUrl: snakeblock,
        theme: 'btn-back-black',
        name: 'SnakeBlocks',
        description: 'Developed a classic Snake Game built using HTML, CSS, and JavaScript. Control the snake to eat food, grow longer, and avoid colliding with the walls or itself. Perfect for a fun coding project and learning basic game development concepts. Play now to relive the nostalgic arcade experience!',
        link: 'https://github.com/Basit07861/SnakeBlocks',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];