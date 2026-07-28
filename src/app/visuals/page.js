import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { allVisuals } from "../../data/content";

export const metadata = {
  title: "Visuals Archive | Oussama Ait Youss",
  description: "A complete gallery of graphic design and multimedia projects built by Oussama Ait Youss.",
};

export default function VisualsArchive() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:py-24">
        <Link
          href="/"
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
        >
          <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
          Oussama Ait Youss
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-12">
          All Visuals
        </h1>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allVisuals.map((visual, index) => (
            <a 
              key={index}
              href={visual.behanceUrl} 
              target="_blank" 
              rel="noreferrer"
              className="group relative flex flex-col rounded-xl bg-slate-800/50 border-2 border-slate-700/50 overflow-hidden transition-all hover:bg-slate-800 hover:border-slate-500/50 hover:shadow-lg"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-900 flex items-center justify-center border-b border-slate-700/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={visual.image}
                  alt={visual.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
              
              <div className="flex flex-col flex-1 p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg leading-tight text-slate-200 group-hover:text-teal-300 transition-colors pr-2">
                    {visual.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-teal-300 transition-colors mt-1" />
                </div>
                
                <div className="text-sm font-medium text-teal-300/80 mb-3">{visual.category}</div>
                
                <p className="text-sm text-slate-400 flex-1 mb-4 leading-relaxed">
                  {visual.description}
                </p>
                
                <ul className="flex flex-wrap mt-auto gap-2">
                  {visual.tools.map((tool) => (
                    <li key={tool}>
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        {tool}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
