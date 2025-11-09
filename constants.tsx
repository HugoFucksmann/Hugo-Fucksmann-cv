import React from 'react';
import { Education, Experience } from './types';
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon } from './components/icons';

export const PROFILE = {
    name: 'Hugo Fucksmann',
    title: 'Fullstack JS Dev',
    tags: ['#React', '#ReactNative', '#Node', '#MongoDB'],
    about: "I'm a dedicated and responsible developer, passionate about building dynamic mobile and web applications. I thrive on teamwork, innovation, and delivering high-quality results to solve modern challenges.",
};

export const CV_DOWNLOAD_LINK = '/hugo-fucksmann-cv.pdf';

export const FEATURED_PROJECT = {
    title: 'OceanicLab Creator',
    description: 'A web-based platform for creating and deploying interactive data visualizations using a drag-and-drop interface, empowering users to build powerful dashboards without writing code.',
    technologies: ['React', 'D3.js', 'Node.js', 'GraphQL', 'MongoDB'],
    link: 'https://github.com/HugoFucksmann/oceanicLab-creator' // Example link
};

export const KNOWLEDGE = [
    'JavaScript & Typescript',
    'Python',
    'CSS & SASS',
    'SQL'
];

export const SOFTWARE_TOOLS = [
    'React & NextJS',
    'React Native & Expo',
    'Node.js & Express',
    'Redux & RTK Query',
    'GraphQL & Apollo',
    'MongoDB & Firebase',
    'Tailwind CSS',
    'Jest',
    'GitHub',
    'LangChain'
];

export const LANGUAGES = [
    { lang: 'Spanish', level: 'Native' },
    { lang: 'English', level: 'Upper-Intermediate' }
];

export const CONTACT = [
    { icon: <MailIcon className="w-5 h-5"/>, text: 'Email', href: 'mailto:hugoffuksmann@gmail.com' },
    { icon: <GithubIcon className="w-5 h-5"/>, text: 'GitHub', href: 'https://github.com/HugoFucksmann' },
    { icon: <LinkedinIcon className="w-5 h-5"/>, text: 'LinkedIn', href: 'https://linkedin.com/in/hugofucksmann' },
    { icon: <DownloadIcon className="w-5 h-5"/>, text: 'Download CV', href: CV_DOWNLOAD_LINK },
];

export const WORK_EXPERIENCE: Experience[] = [
    {
        role: 'Developer Fullstack - React Native / Node JS',
        company: 'Freemoni - Remote',
        period: 'Oct 2023 - Present',
        description: [
            'Full-cycle development of mobile and web applications using React, React Native, and Node.js.',
            'Integration of Firebase for authentication, real-time databases, and cloud storage.',
        ]
    },
    {
        role: 'Developer Mobile Front End - React Native / React',
        company: 'Errepar - Buenos Aires',
        period: 'Feb 2022 - Oct 2023',
        description: [
            'Developed user interfaces for mobile applications using React Native.',
            'Performed testing with Jest to ensure quality.'
        ]
    },
    {
        role: 'Responsible for Layout, Design and Front-End',
        company: 'IT Secretariat of the Ministry of igyd',
        period: 'Jan 2022 - Present',
        description: [
            'Designed, developed, and maintained websites using Symfony and React.',
        ]
    },
    {
        role: 'Technical Service and Software Developer',
        company: 'CEMAFE: Callcenter COVID',
        period: 'Jul 2020 - Dic 2021',
        description: [
            'Network configuration & FullStack React & Node development',
        ]
    }
];

export const EDUCATION: Education[] = [
    {
        degree: 'Fullstack Javascript Developer',
        institution: 'UTN & Self-training',
        period: '2017 - 2018',
        description: [
            'Completed specialized courses in modern web and mobile development technologies.',
        ]
    },
    {
        degree: 'Diploma in English Speaking',
        institution: 'Language Teaching Center (CEI), Santa Fe',
        period: '2002 - 2008',
        description: []
    },
];