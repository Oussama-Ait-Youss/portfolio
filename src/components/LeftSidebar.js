"use client";

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faBehance, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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

      <ul className="ml-1 mt-8 flex items-center gap-6" aria-label="Social media">
        <li className="text-xs shrink-0">
          <a
            className="block text-slate-400 hover:text-teal-400 transition-colors duration-200"
            href="https://github.com/Oussama-Ait-Youss"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </li>
        <li className="text-xs shrink-0">
          <a
            className="block text-slate-400 hover:text-teal-400 transition-colors duration-200"
            href="https://www.linkedin.com/in/oussama-ait-youss-739925330/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
          </a>
        </li>
        <li className="text-xs shrink-0">
          <a
            className="block text-slate-400 hover:text-teal-400 transition-colors duration-200"
            href="mailto:alikhay815@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
          </a>
        </li>
        <li className="text-xs shrink-0">
          <a
            className="block text-slate-400 hover:text-teal-400 transition-colors duration-200"
            href="https://www.behance.net/alikhay"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
          >
            <FontAwesomeIcon icon={faBehance} size="xl" />
          </a>
        </li>
        <li className="text-xs shrink-0">
          <a
            className="block text-slate-400 hover:text-teal-400 transition-colors duration-200"
            href="https://x.com/AliKhay864719"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <FontAwesomeIcon icon={faXTwitter} size="xl" />
          </a>
        </li>
      </ul>
    </header>
  );
}
