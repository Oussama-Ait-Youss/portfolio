import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Visuals from "./sections/Visuals";
import { getAssetPath } from "../utils/path";

export default function RightContent() {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <About />
      <Experience />
      <Projects />
      <Visuals />
      
      <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0 pt-12 border-t border-slate-800/60">
        <div className="mb-3">
          <a
            href="#about"
            className="group inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 rounded"
            aria-label="Back to top"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getAssetPath("/logo.png")}
              alt="O.A.Y HUSTLE Logo"
              width={200}
              height={45}
              className="w-48 sm:w-34 h-auto object-contain block opacity-100 transition-all duration-300 hover:opacity-100 hover:scale-105 brightness-110"
            />
          </a>
        </div>

        <p className="leading-relaxed">
          Designed and built with passion. Crafted with{" "}
          <a
            href="https://nextjs.org"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            Next.js
          </a>
          {" "}and{" "}
          <a
            href="https://tailwindcss.com"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind CSS
          </a>
          , deployed on the web. All text is set in the{" "}
          <a
            href="https://fonts.google.com/specimen/Inter"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            Inter
          </a> typeface.
        </p>
      </footer>
    </main>
  );
}

