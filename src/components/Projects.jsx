import AnimateIn from "./AnimateIn";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Voice-Based Agricultural System (VAIS)",
      description: "Amharic voice interface for Ethiopian farmers enabling real-time Q&A, crop recommendations, and pest detection. Fine-tuned a LLAMA model with LoRA on an agriculture Q&A dataset. Built in collaboration with Addis Ababa University. Featured on national television.",
      tech: ["Python", "LLAMA", "LoRA", "NLP", "Amharic"],
      link: "https://github.com/Yared-betsega",
      extraLink: "https://www.youtube.com/watch?v=S41YPCX97P4&ab_channel=EBC",
      extraLabel: "Watch on TV",
    },
    {
      title: "RAG Procurement Pipeline",
      description: "Retrieval-Augmented Generation pipeline to process procurement documents and generate accurate answers using the Gemini API. Deployed FastAPI backend on Azure Container Apps with Docker. Built pixel-perfect React UI from Figma designs.",
      tech: ["Python", "FastAPI", "RAG", "Gemini API", "Azure", "Docker", "React"],
      link: "https://github.com/Yared-betsega",
      extraLink: "https://www.bidwise.ai/",
      extraLabel: "BidWiseAI",
    },
    {
      title: "CCTV Security Tracking App",
      description: "React Native app for discovering and streaming RTSP cameras with UPnP port mapping. Integrated OpenCV for frame extraction and multiple LLMs (OpenAI, Claude, Google Vision) for real-time suspicious activity detection and notifications.",
      tech: ["React Native", "OpenCV", "LLMs", "Strapi", "Java"],
      link: "https://github.com/Yared-betsega",
      extraLink: "https://www.ip.video/",
      extraLabel: "IPVideo",
    },
    {
      title: "Ride Sharing App",
      description: "Cross-platform ride sharing app built with Flutter, Dart, and Google Maps API using Clean Test-Driven Development architecture. Achieved 98% code coverage via SonarCloud. Enhanced the A2SV portal serving 3,000+ users.",
      tech: ["Flutter", "Dart", "Google Maps API", "TDD", "SonarCloud"],
      link: "https://github.com/Yared-betsega",
      extraLink: "https://www.eskalate.io/",
      extraLabel: "Eskalate",
    },
    {
      title: "Human Resource Management System",
      description: "Full-stack web application for HR workflows including payroll processing, attendance tracking, and employee onboarding. Built with Python and React, designed in Figma with a focus on usability and performance.",
      tech: ["Python", "React", "Figma", "Full-Stack"],
      link: "https://github.com/Yared-betsega",
      extraLink: null,
      extraLabel: null,
    },
    {
      title: "Temari-bet Tutoring Platform",
      description: "Platform connecting parents with tutors for their children, built with Next.js, Node.js, and Express.js. Replaced Telegram-based communication with a custom end-to-end chat system. Migrated storage to Amazon S3 and Cloudinary.",
      tech: ["Next.js", "Node.js", "Express", "AWS S3", "Cloudinary"],
      link: "https://tutor.temari-bet.com/",
      extraLink: "https://github.com/Yared-betsega",
      extraLabel: "GitHub",
    },
  ];

  return (
    <section id="projects" className="py-28 px-6 bg-white dark:bg-[#080b12] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
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
