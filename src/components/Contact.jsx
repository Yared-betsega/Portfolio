import { useState } from "react";
import AnimateIn from "./AnimateIn";

// ╔══════════════════════════════════════════════════════════════════════╗
// ║  SETUP: Sign up at https://formspree.io, create a form, and         ║
// ║  replace "YOUR_FORM_ID" below with your actual form ID.             ║
// ╚══════════════════════════════════════════════════════════════════════╝
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgolbowr";

export default function Contact() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus("success");
        setFields({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 px-6 bg-white dark:bg-[#080b12] transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        <AnimateIn from="up">
          <p className="text-violet-600 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Let&apos;s build something great
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            I&apos;m open to SWE and Data Science opportunities, collaborations, or just a chat about tech and AI.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            <a href="mailto:ytg1@fordham.edu" className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400/50 dark:hover:border-violet-500/50 text-sm font-medium px-4 py-2.5 rounded-xl transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              ytg1@fordham.edu
            </a>
            <a href="https://www.linkedin.com/in/yared-tsegaye-gizaw-63b961201/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400/50 dark:hover:border-violet-500/50 text-sm font-medium px-4 py-2.5 rounded-xl transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              LinkedIn
            </a>
            <a href="https://github.com/Yared-betsega" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400/50 dark:hover:border-violet-500/50 text-sm font-medium px-4 py-2.5 rounded-xl transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
              GitHub
            </a>
            <a href="https://leetcode.com/Yared_betsega/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400/50 dark:hover:border-violet-500/50 text-sm font-medium px-4 py-2.5 rounded-xl transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.8a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
              LeetCode
            </a>
          </div>
        </AnimateIn>
        <AnimateIn from="up" delay={200}>
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-500/15 flex items-center justify-center">
                <svg className="w-7 h-7 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Message sent!</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Thanks for reaching out. I&apos;ll get back to you soon.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-violet-600 dark:text-violet-400 hover:underline text-sm font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {status === "error" && (
                <div className="flex items-center gap-2 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 text-sm px-4 py-3 rounded-xl">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-600 dark:text-slate-400 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={fields.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-slate-50 dark:bg-slate-900/70 border border-slate-300/60 dark:border-slate-700/60 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-600 dark:text-slate-400 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={fields.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-slate-50 dark:bg-slate-900/70 border border-slate-300/60 dark:border-slate-700/60 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all shadow-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-600 dark:text-slate-400 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={fields.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="bg-slate-50 dark:bg-slate-900/70 border border-slate-300/60 dark:border-slate-700/60 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all resize-none shadow-sm"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-violet-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}
