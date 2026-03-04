import AnimateIn from "./AnimateIn";

export default function Skills() {
  const categories = [
    {
      label: "Languages",
      skills: ["Python", "JavaScript / TypeScript", "Java", "C / C++", "Rust", "SQL / NoSQL"],
    },
    {
      label: "Web & Mobile",
      skills: ["React", "React Native", "Flutter", "Next.js", "Node.js", "FastAPI", "Django", "Express", "Angular", "Vue.js"],
    },
    {
      label: "Data Science & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NLP", "Data Mining", "RLHF", "LLMs"],
    },
    {
      label: "DevOps & Tools",
      skills: ["Docker", "Git", "CI/CD", "Linux", "Azure DevOps", "Selenium", "Hadoop"],
    },
    {
      label: "Cloud & Platforms",
      skills: ["AWS", "GCP", "Azure Container Apps", "Cloudinary", "Figma", "Strapi"],
    },
  ];

  return (
    <section id="skills" className="py-28 px-6 bg-slate-100 dark:bg-[#0c0f1a] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <AnimateIn from="up">
          <p className="text-violet-600 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-14 leading-tight">
            Technologies I work with
          </h2>
        </AnimateIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ label, skills }, i) => (
            <AnimateIn key={label} from="up" delay={i * 100}>
              <div className="bg-white dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 h-full hover:border-violet-400/40 dark:hover:border-violet-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-violet-100/40 dark:hover:shadow-violet-900/10">
                <h3 className="text-slate-900 dark:text-white font-semibold text-base mb-5">{label}</h3>
                <ul className="space-y-2.5">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
