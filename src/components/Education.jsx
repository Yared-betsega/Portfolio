import AnimateIn from "./AnimateIn";
import schools from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 bg-slate-100 dark:bg-[#0c0f1a] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <AnimateIn from="up">
          <p className="text-violet-600 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-14 leading-tight">
            Education
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6">
          {schools.map((s, i) => (
            <AnimateIn key={i} from="up" delay={i * 120}>
              <div className="relative bg-white dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 h-full hover:border-violet-400/40 dark:hover:border-violet-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-violet-100/40 dark:hover:shadow-violet-900/10 flex flex-col gap-4">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent rounded-full" />
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    {s.url ? (
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-white font-semibold text-base leading-snug hover:text-violet-600 dark:hover:text-violet-400 transition-colors group/inst flex items-center gap-1">
                        {s.institution}
                        <svg className="w-3 h-3 opacity-0 group-hover/inst:opacity-100 transition-opacity shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    ) : (
                      <h3 className="text-slate-900 dark:text-white font-semibold text-base leading-snug">{s.institution}</h3>
                    )}
                    {s.note && (
                      <span className="shrink-0 text-[10px] font-semibold bg-violet-100 dark:bg-violet-500/15 text-violet-600 dark:text-violet-400 px-2 py-0.5 rounded-full border border-violet-200/60 dark:border-violet-500/30">
                        {s.note}
                      </span>
                    )}
                  </div>
                  <p className="text-violet-600 dark:text-violet-400 text-sm font-medium">{s.degree}</p>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-500 dark:text-slate-500 text-xs font-medium">{s.period}</span>
                  <span className="text-slate-400 dark:text-slate-600 text-xs">{s.location}</span>
                  {s.highlight && (
                    <span className="mt-1 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {s.highlight}
                    </span>
                  )}
                </div>
                <div className="mt-auto">
                  <p className="text-slate-400 dark:text-slate-600 text-xs font-medium uppercase tracking-wider mb-2">Coursework</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.courses.map((c) => (
                      <span key={c} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs px-2.5 py-1 rounded-full border border-slate-200/50 dark:border-slate-700/50">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
