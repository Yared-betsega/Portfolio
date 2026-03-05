import AnimateIn from "./AnimateIn";
import roles from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-slate-100 dark:bg-[#0c0f1a] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <AnimateIn from="up">
          <p className="text-violet-600 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-14 leading-tight">
            Work Experience
          </h2>
        </AnimateIn>
        <div className="relative">
          <div className="absolute left-0 md:left-[11px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />
          <div className="space-y-10">
            {roles.map((role, i) => (
              <AnimateIn key={i} from="left" delay={i * 80}>
                <div className="md:pl-10 relative">
                  <div className="hidden md:block absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full bg-white dark:bg-[#0c0f1a] border-2 border-violet-500 dark:border-violet-400 -translate-x-[1px]" />
                  <div className="bg-white dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 hover:border-violet-400/40 dark:hover:border-violet-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-violet-100/40 dark:hover:shadow-violet-900/10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-slate-900 dark:text-white font-semibold text-base leading-snug">{role.role}</h3>
                        {role.url ? (
                          <a href={role.url} target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 font-semibold text-sm hover:text-violet-500 dark:hover:text-violet-300 transition-colors inline-flex items-center gap-1 group/co">
                            {role.company}
                            <svg className="w-3 h-3 opacity-0 group-hover/co:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                          </a>
                        ) : (
                          <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">{role.company}</span>
                        )}
                      </div>
                      <div className="flex flex-col sm:items-end gap-0.5 shrink-0">
                        <span className="text-slate-500 dark:text-slate-500 text-xs font-medium">{role.period}</span>
                        <span className="text-slate-400 dark:text-slate-600 text-xs">{role.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-1.5 mb-4">
                      {role.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-violet-500/60 dark:bg-violet-400/60 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <span key={tag} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200/50 dark:border-slate-700/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
