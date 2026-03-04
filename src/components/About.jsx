import AnimateIn from "./AnimateIn";

export default function About() {
  const highlights = [
    { label: "Years Coding", value: "5+" },
    { label: "Companies Worked", value: "7+" },
    { label: "Technologies Used", value: "20+" },
  ];

  return (
    <section id="about" className="py-28 px-6 bg-white dark:bg-[#080b12] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <AnimateIn from="up">
          <p className="text-violet-600 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 leading-tight">
            Passionate about building things<br className="hidden sm:block" /> that matter
          </h2>
        </AnimateIn>
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <AnimateIn from="left" delay={200} className="md:col-span-3 space-y-5 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            <p>
              I&apos;m a Software Engineer and Data Scientist currently pursuing my M.S. in Data Science at
              Fordham University (2025&ndash;2027). I hold a B.S. in Software Engineering from Addis Ababa
              University with a 3.75 GPA, and I&apos;m a graduate of the A2SV Africa to Silicon Valley DSA program.
            </p>
            <p>
              I&apos;ve worked across the full stack &mdash; building RAG pipelines, mobile apps, security systems,
              and AI-powered tools for companies in the US, UK, and Italy. My work spans voice-based agricultural
              AI for Ethiopian farmers, CCTV object detection with LLMs, procurement document automation, and more.
            </p>
            <p className="text-slate-800 dark:text-slate-300 font-medium">
              I&apos;m currently a Graduate Research Assistant at Fordham, working on combinatorial optimization
              with Integer Linear Programming and Reinforcement Learning. Open to SWE and Data Science roles.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 font-medium text-sm transition-colors group"
              >
                Let&apos;s work together
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </AnimateIn>
          <AnimateIn from="right" delay={300} className="md:col-span-2 grid grid-cols-1 gap-4">
            {highlights.map(({ label, value }) => (
              <div key={label} className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6">
                <p className="text-4xl font-extrabold text-slate-900 dark:text-white mb-1">{value}</p>
                <p className="text-slate-500 text-sm font-medium">{label}</p>
              </div>
            ))}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
