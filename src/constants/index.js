import { meta, shopify, starbucks, tesla, three, knitpro, starwars } from "../assets/images";
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
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    apple
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: three,
        name: "ThreeJS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Freelance developer",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "2023 - 2024",
        points: [
            "Developing and maintaining web applications using shopify.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Working and improving the SEO of the shopify store.",
            "Participating in code reviews and providing constructive feedback.",
        ],
    },
    {
        title: "Junior Developer Intern",
        company_name: "Knitpro",
        icon: knitpro,
        iconBg: "#accbe1",
        date: "June 2024 - July 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, and the SEO team to create high-quality products.",
            "Implementing responsive design and ensuring responsiveness across devices.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    
    
];

//social media links
export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Samarora034',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/saksham-midha-6010b9252/',
    }
];

//project list

export const projects = [
    {
        iconUrl: apple,
        theme: 'btn-back-black',
        name: 'Apple Store Clone',
        description: 'Developed a clone of the Apple iPhone 15 page using React-three/fiber and Tailwind CSS framework.',
        link: 'https://iphone-swart.vercel.app',
    },

    {
        iconUrl: starwars,
        theme: 'btn-back-red',
        name: 'StarWars Battle Front Clone',
        description: 'Developed a clone of the StarWars Battle Front using ThreeJS and AmmoJS using blender for the 3D models.',
        link: 'https://samarora034.github.io/main_game/',
    }
];