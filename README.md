# Modern Neumorphic Portfolio - Hugo Fucksmann

A modern, minimalist, single-page portfolio built with React and Tailwind CSS, featuring a clean neumorphic design, light/dark themes, and smooth animations.

![Portfolio Screenshot](https://i.imgur.com/your-screenshot-url.png) 
*(Replace this with a screenshot of your portfolio)*

## Live Demo

[**View Live Demo**](https://your-live-demo-url.com) *(Add your deployment link here)*

---

## About The Project

This project is a personal portfolio designed to showcase skills, work experience, education, and projects in a visually appealing and interactive way. The design is based on the neumorphism trend, giving it a soft, clean UI. It's built to be fully responsive and easily customizable.

### Key Features

- **🎨 Modern Neumorphic Design**: Soft UI with beautiful shadows for a tactile feel.
- **🌓 Light & Dark Mode**: Seamless theme switching that also respects system preference.
- **📱 Fully Responsive**: Looks great on all devices, from mobile phones to desktops.
- **✨ Smooth Animations**: Subtle fade-in animations for a more engaging user experience.
- **📁 Interactive Timeline**: Accordion-style sections for Work Experience and Education.
- **🔧 Easy to Customize**: All portfolio data is centralized in a single file for quick updates.
- **🚀 Built with Modern Tech**: Crafted with React, TypeScript, and Tailwind CSS for a performant and maintainable codebase.

---

## Tech Stack

- **[React](https://react.dev/)**: A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and a package manager like npm installed.
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd your-repo-name
    ```
3.  **Install dependencies:**
    *(If you add a package manager like Vite or Create React App, you'll need this step)*
    ```sh
    npm install
    ```
4.  **Run the project:**
    You can simply open the `index.html` file in your browser, or for a better development experience, use a live server extension in your code editor (like Live Server for VS Code).

---

## Customization Guide

This portfolio is designed to be easily personalized. All the content is located in the **`constants.tsx`** file. Simply open this file and edit the data to reflect your own information.

### 1. Profile Information

Update the `PROFILE` object with your name, title, and a short bio.

```javascript
// in constants.tsx
export const PROFILE = {
    name: 'Your Name',
    title: 'Your Job Title (e.g., Frontend Developer)',
    about: "A brief and engaging paragraph about yourself.",
};
```

### 2. Contact Links & CV

Modify the `CONTACT` array to include your social media links, email, and a link to your CV. Place your CV file (e.g., `your-name-cv.pdf`) in the `public` folder and update the `CV_DOWNLOAD_LINK`.

```javascript
// in constants.tsx
export const CV_DOWNLOAD_LINK = '/your-name-cv.pdf';

export const CONTACT = [
    { icon: <MailIcon />, text: 'Email', href: 'mailto:your.email@example.com' },
    { icon: <GithubIcon />, text: 'GitHub', href: 'https://github.com/yourusername' },
    { icon: <LinkedinIcon />, text: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
    { icon: <DownloadIcon />, text: 'Download CV', href: CV_DOWNLOAD_LINK },
];
```

### 3. Featured Project

Showcase your best project by updating the `FEATURED_PROJECT` object.

```javascript
// in constants.tsx
export const FEATURED_PROJECT = {
    title: 'My Awesome Project',
    description: 'A short description of what this project does and its purpose.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/awesome-project'
};
```

### 4. Work Experience & Education

Fill in the `WORK_EXPERIENCE` and `EDUCATION` arrays with your professional and academic history.

```javascript
// in constants.tsx
export const WORK_EXPERIENCE: Experience[] = [
    {
        role: 'Software Engineer',
        company: 'Tech Company Inc.',
        period: 'Jan 2022 - Present',
        description: [
            'Developed and maintained web applications using React.',
            'Collaborated with cross-functional teams.',
        ]
    },
    // ... add more experiences
];

export const EDUCATION: Education[] = [
    {
        degree: 'B.Sc. in Computer Science',
        institution: 'University of Technology',
        period: '2018 - 2022',
        description: [
            'Focused on software development and algorithms.',
        ]
    },
    // ... add more education
];
```

### 5. Skills & Tools

List your technical skills and the tools you use in the `SOFTWARE_TOOLS` array.

```javascript
// in constants.tsx
export const SOFTWARE_TOOLS = [
    'JavaScript & Typescript',
    'React & NextJS',
    'Node.js & Express',
    // ... add more skills
];
```

### 6. Meta Information

Finally, don't forget to update the `<title>` and `<meta>` tags in the `index.html` file to improve SEO for your portfolio.

```html
<!-- in index.html -->
<head>
    ...
    <title>Your Name - Portfolio</title>
    <meta name="description" content="A modern portfolio for Your Name, a Your Job Title." />
    ...
</head>
```

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Contact

Hugo Fucksmann - [hugoffuksmann@gmail.com](mailto:hugoffuksmann@gmail.com)

Project Link: [https://github.com/HugoFucksmann/modern-neumorphic-portfolio](https://github.com/HugoFucksmann/modern-neumorphic-portfolio) *(Replace with your repo link)*
