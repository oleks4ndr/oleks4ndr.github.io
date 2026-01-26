'use client'

import { useEffect, useState } from 'react';

const sections = [
  { id: 'home', label: 'Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ className = "" }: { className?: string }) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle 50% of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeIndex = sections.findIndex((section) => section.id === activeSection);

  return (
    <div className={className}>
      <nav className="flex h-full items-center justify-end gap-8 p-8">
        {/* Navigation Links */}
        <ul className="flex flex-col justify-between text-right" style={{ height: '100%' }}>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`text-xl font-light transition-colors duration-300 ${
                  activeSection === id 
                    ? 'text-white' 
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Progress Tracker */}
        <div className="relative flex h-full w-1 flex-col items-center">
          {/* Background gray line */}
          <div className="absolute h-full w-px bg-gray-600" />
          
          {/* Active indicator dot */}
          <div
            className="absolute h-3 w-3 rounded-full bg-white transition-all duration-500 ease-in-out"
            style={{
              top: `${(activeIndex / (sections.length - 1)) * 100}%`,
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      </nav>
    </div>
  );
}