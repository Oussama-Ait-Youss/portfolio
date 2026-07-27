import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

export default function RightContent() {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <About />
      <Experience />
      <Projects />
      
      <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
        <p>
          Designed and built with passion. Crafted with{" "}
          <a href="https://nextjs.org" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Next.js</a>
          {" "}and{" "}
          <a href="https://tailwindcss.com" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Tailwind CSS</a>,
          deployed on the web. All text is set in the{" "}
          <a href="https://fonts.google.com/specimen/Inter" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Inter</a> typeface.
        </p>
      </footer>
    </main>
  );
}
