"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "home", label: "Me" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ className = "" }: { className?: string }) {
  const [activeSection, setActiveSection] = useState("home");
  const [showMobileNav, setShowMobileNav] = useState(true);

  const lastY = useRef(0);
  const ticking = useRef(false);

  // Intersection observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Mobile hide/show on scroll direction
  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;

        // always show near top
        if (y < 10) {
          setShowMobileNav(true);
        } else {
          // threshold to prevent flicker
          const THRESHOLD = 6;
          if (Math.abs(delta) > THRESHOLD) {
            if (delta > 0)
              setShowMobileNav(false); // scrolling down
            else setShowMobileNav(true); // scrolling up
            lastY.current = y;
          }
        }

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    setShowMobileNav(true);
  };

  const activeIndex = sections.findIndex((section) => section.id === activeSection);

  return (
    <div
      className={[
        className,
        "transition-transform duration-300 ease-out lg:transition-none",
        showMobileNav ? "translate-y-0" : "-translate-y-full",
        "lg:translate-y-0",
      ].join(" ")}
    >
      <nav className="lg:backdrop-blur-0 flex w-full items-center justify-between border-b border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md lg:h-full lg:justify-end lg:gap-8 lg:border-0 lg:bg-transparent lg:p-8">
        <ul
          className="flex w-full flex-row items-center justify-around lg:w-auto lg:flex-col lg:items-end lg:justify-between lg:text-right"
          style={{ height: "100%" }}
        >
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`text-sm font-light transition-colors duration-300 sm:text-base lg:text-xl ${
                  activeSection === id ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="relative hidden h-full w-1 flex-col items-center lg:flex">
          <div className="absolute h-full w-px bg-gray-600" />
          <div
            className="absolute h-3 w-3 rounded-full bg-white transition-all duration-500 ease-in-out"
            style={{
              top: `${(activeIndex / (sections.length - 1)) * 100}%`,
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </nav>
    </div>
  );
}
