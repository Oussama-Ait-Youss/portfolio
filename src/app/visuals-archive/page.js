'use client';

import React from 'react';
import { allVisuals } from '../../data/content';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { getAssetPath } from '../../utils/path';

export default function VisualsArchivePage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 bg-transparent text-slate-100">
      <Link className="group mb-4 inline-flex items-center font-semibold leading-tight text-teal-300" href="/">
        <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1"/>
        Oussama Ait Youss
      </Link>

      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-4">
        Visuals Archive
      </h1>
      <p className="text-slate-400 mb-12 max-w-xl">
        A complete collection of graphic design work, brand identities, social media banners, and print catalogs.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allVisuals.map((visual, index) => (
          <ArchiveVisualCard key={index} visual={visual}/>
        ))}
      </div>
    </div>
  );
}

function ArchiveVisualCard({ visual }) {
  return (
    <div className="group relative flex flex-col overflow-hidden bg-red-800 rounded-xl bg-slate-800/50 border border-slate-700/50 p-4 transition-all hover:border-teal-500/50 hover:bg-slate-800/80">
      <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-slate-800/40 border border-slate-700/30 flex items-center justify-center">
        <img
          src={getAssetPath(visual.image)}
          alt={visual.title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-2 right-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-teal-300 backdrop-blur">
          {visual.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h2 className="font-medium text-slate-200 group-hover:text-teal-300 transition-colors">
            <a
              href={visual.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              <span>{visual.title}</span>
              <ExternalLink className="h-4 w-4 opacity-75 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
            </a>
          </h2>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            {visual.description}
          </p>
        </div>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {visual.tools.map((tool, i) => (
            <li key={i} className="rounded-full bg-teal-500/10 px-2.5 py-1 text-xs font-medium text-teal-300">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
