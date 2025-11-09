import React, { useState, useEffect, useCallback } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { 
    PROFILE, 
    SOFTWARE_TOOLS, 
    CONTACT, 
    WORK_EXPERIENCE, 
    EDUCATION,
    FEATURED_PROJECT
} from './constants';
import { BriefcaseIcon, GraduationCapIcon, ChevronDownIcon, LinkIcon } from './components/icons';
import { Education as EducationType, Experience as ExperienceType } from './types';

interface JourneySectionProps {
    title: string;
    icon: React.ReactNode;
    items: (ExperienceType | EducationType)[];
    type: 'work' | 'edu';
    openItem: string | null;
    setOpenItem: (id: string | null) => void;
}

const JourneySection: React.FC<JourneySectionProps> = ({ title, icon, items, type, openItem, setOpenItem }) => {
    return (
        <div>
            <h3 className="text-xl font-bold text-[--text-heading-light] mb-4 flex items-center gap-2">
                {icon} {title}
            </h3>
            <div className="relative pl-5 before:absolute before:left-2 before:top-2 before:h-[calc(100%-1rem)] before:w-0.5 before:bg-[--border-color-light]">
                {items.map((item, index) => {
                    const id = `${type}-${index}`;
                    const isOpen = openItem === id;

                    return (
                        <div key={id} className="relative mb-6">
                            <div className="absolute left-[-2px] top-1.5 w-2 h-2 rounded-full bg-[--accent-light] border-2 border-[--card-inset-dark] dark:border-[--card-inset-dark]"></div>
                            <button className="w-full text-left group" onClick={() => setOpenItem(isOpen ? null : id)}>
                                <div className="flex justify-between items-center">
                                    <div>
                                        {/* FIX: Use type guard to correctly access properties on the 'Experience | Education' union type. */}
                                        <h4 className="font-bold text-[--text-heading-light] group-hover:text-[--accent-light] transition-colors">{'role' in item ? item.role : item.degree}</h4>
                                        <p className="text-sm font-semibold text-[--accent-light]">{'company' in item ? item.company : item.institution}</p>
                                    </div>
                                    <ChevronDownIcon className={`w-5 h-5 text-[--text-light] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} group-hover:text-[--accent-light] transition-colors`} />
                                </div>
                                <p className="text-xs text-[--text-light] mt-1">{item.period}</p>
                            </button>
                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                                <ul className="list-disc list-inside text-sm text-[--text-light] space-y-1 pt-2 pl-1">
                                    {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


const App: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedTheme = window.localStorage.getItem('theme');
            if (storedTheme === 'light' || storedTheme === 'dark') {
                return storedTheme;
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'dark';
    });

    const [openItem, setOpenItem] = useState<string | null>('work-0');

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center p-4 font-sans text-[--text-light]">
            <div className="w-full max-w-6xl neumorphic-card rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 fade-in-start">
                
                {/* Left Column */}
                <div className="md:col-span-2 flex flex-col">
                    <div className="flex justify-between items-center delay-1 fade-in-start">
                        <h3 className="font-bold text-lg text-[--text-heading-light]">{PROFILE.name}</h3>
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </div>
                    
                    <div className="flex-grow flex flex-col justify-center mt-4 md:mt-0">
                        <div className="delay-2 fade-in-start">
                            <h1 className="text-4xl lg:text-5xl font-bold text-[--text-heading-light] tracking-tight">
                                {PROFILE.title}
                            </h1>
                            <p className="mt-4 leading-relaxed">
                                {PROFILE.about}
                            </p>
                        </div>
                        
                        <div className="mt-8 grid grid-cols-2 gap-4 delay-3 fade-in-start">
                            {CONTACT.map(item => (
                                <a key={item.text} href={item.href} target="_blank" rel="noopener noreferrer" 
                                   className="flex items-center gap-2 hover:text-[--accent-light] font-medium transition-all duration-200 hover:-translate-y-0.5">
                                    {item.icon}
                                    {item.text}
                                </a>
                            ))}
                        </div>

                         {/* Featured Project Section */}
                        <div className="mt-8 neumorphic-inset rounded-2xl p-6 delay-4 fade-in-start">
                            <h3 className="text-xl font-bold text-[--text-heading-light] mb-4">Featured Project</h3>
                            <div>
                                <h4 className="font-bold text-[--text-heading-light]">{FEATURED_PROJECT.title}</h4>
                                <p className="text-sm mt-2 mb-3">{FEATURED_PROJECT.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {FEATURED_PROJECT.technologies.map((tech) => (
                                        <span key={tech} className="skill-tag text-xs font-medium py-1 px-2.5 rounded-md">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a href={FEATURED_PROJECT.link} target="_blank" rel="noopener noreferrer"
                                   className="inline-flex items-center gap-2 hover:text-[--accent-light] font-medium text-sm transition-all duration-200 hover:-translate-y-0.5">
                                    <LinkIcon className="w-4 h-4" />
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="md:col-span-3 flex flex-col gap-6">
                    {/* Journey Section */}
                    <div className="neumorphic-inset rounded-2xl p-6 delay-5 fade-in-start">
                        <div className="space-y-6">
                             <JourneySection 
                                title="Work Experience"
                                icon={<BriefcaseIcon className="w-6 h-6 text-[--accent-light]" />}
                                items={WORK_EXPERIENCE}
                                type="work"
                                openItem={openItem}
                                setOpenItem={setOpenItem}
                             />
                             <div className="border-t border-[--border-color-light] my-2"></div>
                             <JourneySection 
                                title="Education"
                                icon={<GraduationCapIcon className="w-6 h-6 text-[--accent-light]" />}
                                items={EDUCATION}
                                type="edu"
                                openItem={openItem}
                                setOpenItem={setOpenItem}
                             />
                        </div>
                    </div>

                    {/* Skills & Tools Section */}
                    <div className="neumorphic-inset rounded-2xl p-6 delay-6 fade-in-start">
                        <h3 className="text-xl font-bold text-[--text-heading-light] mb-4">Skills & Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {SOFTWARE_TOOLS.map((skill) => (
                                <span key={skill} className="skill-tag text-sm font-medium py-1.5 px-3 rounded-lg">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default App;