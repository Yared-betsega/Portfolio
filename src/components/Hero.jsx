import profileImg from "../assets/images/profile.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-50 dark:bg-[#080b12] transition-colors duration-300">
      {/* ambient orbs */}
      <div className="animate-orb-1 absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-violet-500/10 dark:bg-violet-700/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="animate-orb-2 absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/8 dark:bg-cyan-700/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="animate-orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />
      {/* subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Text column ─────────────────────────────────────── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <div className="animate-hero-1 inline-flex items-center gap-2 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-full px-4 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 mb-8 backdrop-blur-sm shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to opportunities
            </div>

            <h1 className="animate-hero-2 text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-[1.08] tracking-tight">
              <span className="text-slate-900 dark:text-white">Hi, I&apos;m </span>
              <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500 dark:from-violet-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Yared Tsegaye
              </span>
            </h1>

            <p className="animate-hero-3 text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Software Engineer &amp; Data Scientist. MS in Data Science at Fordham University.
              I build scalable full-stack applications, intelligent AI/ML systems, and
              data-driven solutions that create real-world impact.
            </p>

            <div className="animate-hero-4 flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
              <a href="#projects" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-violet-500/25 hover:-translate-y-0.5">
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-white dark:bg-slate-800/60 border border-slate-300/60 dark:border-slate-700/60 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-sm">
                Get in Touch
              </a>
            </div>

            <div className="animate-hero-5 flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start">
              <a href="https://github.com/Yared-betsega" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                GitHub
              </a>
              <span className="text-slate-300 dark:text-slate-700 self-center">|</span>
              <a href="https://www.linkedin.com/in/yared-tsegaye-gizaw-63b961201/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                LinkedIn
              </a>
              <span className="text-slate-300 dark:text-slate-700 self-center">|</span>
              <a href="https://leetcode.com/Yared_betsega/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.8a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg>
                LeetCode
              </a>
              <span className="text-slate-300 dark:text-slate-700 self-center">|</span>
              <a href="mailto:ytg1@fordham.edu" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                ytg1@fordham.edu
              </a>
              <span className="text-slate-300 dark:text-slate-700 self-center">|</span>
              <a href="mailto:yaredtsegaye120@gmail.com" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                yaredtsegaye120@gmail.com
              </a>
            </div>
          </div>

          {/* ── Photo column ────────────────────────────────────── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="animate-hero-1 relative">
              {/* soft glow behind photo */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-violet-500/25 via-purple-500/15 to-cyan-500/20 blur-2xl" />
              {/* gradient ring */}
              <div className="relative p-[3px] rounded-full bg-gradient-to-br from-violet-500 via-purple-400 to-cyan-400 shadow-2xl shadow-violet-500/20">
                {/* ring gap matching bg */}
                <div className="p-1 rounded-full bg-slate-50 dark:bg-[#080b12] transition-colors duration-300">
                  <img
                    src={profileImg}
                    alt="Yared Tsegaye"
                    className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              </div>
              {/* floating location badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 rounded-2xl px-4 py-2 shadow-lg shadow-slate-200/60 dark:shadow-black/30 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-violet-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">New York, NY</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* scroll cue */}}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
