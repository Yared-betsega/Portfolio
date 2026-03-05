import AnimateIn from "./AnimateIn";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-white dark:bg-[#080b12] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <AnimateIn from="up">
          <p className="text-violet-600 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Work</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Selected Projects
            </h2>
            <a
              href="https://github.com/Yared-betsega"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-sm font-medium flex items-center gap-1.5 transition-colors shrink-0"
            >
              View all on GitHub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </AnimateIn>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
