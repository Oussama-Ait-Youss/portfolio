'use client';

import React from 'react';
import { featuredVisuals } from '../../data/content';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Visuals() {
  return (
    <section id="visuals" className="mb-16 scroll-py-16 lg:mb-24 lg:scroll-py-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Visuals
        </h2>
      </div>

      <div>
        <ul className="group/list grid grid-cols-1 gap-6 sm:grid-cols-2">
          {featuredVisuals.map((visual, index) => (
            <VisualCard key={index} visual={visual}/>
          ))}
        </ul>

        {/* View Full Visuals Archive Link */}
        <div className="mt-12">
          <Link className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold group" href="/visuals-archive">
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 group-hover:text-teal-300">
              View Full Visuals Archive
            </span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-teal-300"/>
          </Link>
        </div>
      </div>
    </section>
  );
}

function VisualCard({ visual }) {
  return (
    <li className="group relative flex flex-col overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50 p-4 transition-all hover:border-teal-500/50 hover:bg-slate-800/80">
      <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-slate-800/40 border border-slate-700/30 flex items-center justify-center">
        <img
          src={visual.image}
          alt={visual.title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-2 right-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-teal-300 backdrop-blur">
          {visual.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-medium text-slate-200 group-hover:text-teal-300 transition-colors">
            <a
              href={visual.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              <span>{visual.title}</span>
              <ExternalLink className="h-4 w-4 opacity-75 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
            </a>
          </h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            {visual.description}
          </p>
        </div>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tools used">
          {visual.tools.map((tool, i) => (
            <li key={i} className="rounded-full bg-teal-500/10 px-2.5 py-1 text-xs font-medium text-teal-300">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
