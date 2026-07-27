"use client";

import { useState, useEffect } from "react";
import { Mail, ExternalLink } from "lucide-react";

const GithubIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.4.1-.3.6-1.6-.1-3.3 0 0-1.2-.4-3.9 1.4a12.3 12.3 0 0 0-7.1 0C4.6 2.7 3.4 3.1 3.4 3.1c-.7 1.7-.2 3-.1 3.3-1 .9-1.5 2-1.5 3.4 0 5 3 6.2 6 6.5-.4.4-.7 1-.8 2-.1.5-.1 1.2-.1 1.7 0 .5.3 1 .8 1" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { personalInfo, navigationItems } from "../data/content";
import Link from "next/link";

export default function LeftSidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px", // Trigger when section is in top 20% of viewport
      }
    );

    const sections = navigationItems.map((item) =>
      document.getElementById(item.href.substring(1))
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">{personalInfo.name}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {personalInfo.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          {personalInfo.tagline}
        </p>

        <nav className="nav hidden lg:block mt-16">
          <ul className="mt-8 w-max">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`group flex items-center py-3 ${
                      isActive ? "active" : ""
                    }`}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all duration-300 motion-reduce:transition-none ${
                        isActive
                          ? "w-16 bg-slate-200"
                          : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                      }`}
                    ></span>
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 motion-reduce:transition-none ${
                        isActive
                          ? "text-slate-200"
                          : "text-slate-500 group-hover:text-slate-200"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        <li className="text-xs shrink-0">
          <a
            className="block hover:text-slate-200 text-slate-400 transition-colors"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
        </li>
        <li className="text-xs shrink-0">
          <a
            className="block hover:text-slate-200 text-slate-400 transition-colors"
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
        </li>
        <li className="text-xs shrink-0">
          <a
            className="block hover:text-slate-200 text-slate-400 transition-colors"
            href="mailto:contact@example.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </header>
  );
}
