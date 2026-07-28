import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projectsData } from "../../data/content";

export const metadata = {
  title: "Project Archive | Oussama Ait Youss",
  description: "A complete list of web development projects, applications, and APIs built by Oussama Ait Youss.",
};

export default function Archive() {
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
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          All Projects
        </h1>
        <table className="mt-12 w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Made at</th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((project) => (
              <tr
                key={project.id}
                className="border-b border-slate-300/10 last:border-none group hover:bg-slate-800/25 transition-colors duration-200"
              >
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">{project.year}</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200 group-hover:text-teal-300">
                  <div className="sm:hidden">
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={project.title}
                    >
                      <span>
                        {project.title}
                        <ExternalLink className="inline-block h-4 w-4 shrink-0 ml-1.5 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                      </span>
                    </a>
                  </div>
                  <div className="hidden sm:block">{project.title}</div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                  <div className="translate-y-px">{project.madeAt}</div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    {project.tech.map((techItem, index) => (
                      <li key={index} className="my-1 mr-1.5">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {techItem}
                        </div>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={project.title}
                      >
                        <span className="truncate max-w-[200px]">
                          {project.link.replace("https://", "").replace("github.com/", "")}
                        </span>
                        <ExternalLink className="inline-block h-4 w-4 shrink-0 ml-1.5 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
