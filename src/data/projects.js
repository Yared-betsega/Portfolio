const projects = [
  {
    title: "Voice-Based Agricultural System (VAIS)",
    description:
      "Amharic voice interface for Ethiopian farmers enabling real-time Q&A, crop recommendations, and pest detection. Fine-tuned a LLAMA model with LoRA on an agriculture Q&A dataset. Built in collaboration with Addis Ababa University. Featured on national television.",
    tech: ["Python", "LLAMA", "LoRA", "NLP", "Amharic"],
    link: "https://github.com/Yared-betsega/VAIS/",
    extraLink: "https://www.youtube.com/watch?v=S41YPCX97P4&ab_channel=EBC",
    extraLabel: "Watch on TV",
  },
  {
    title: "RAG Procurement Pipeline",
    description:
      "Retrieval-Augmented Generation pipeline to process procurement documents and generate accurate answers using the Gemini API. Deployed FastAPI backend on Azure Container Apps with Docker. Built pixel-perfect React UI from Figma designs.",
    tech: ["Python", "FastAPI", "RAG", "Gemini API", "Azure", "Docker", "React"],
    link: "https://www.bidwise.ai/",
    extraLink: null,
    extraLabel: null,
  },
  {
    title: "CCTV Security Tracking App",
    description:
      "React Native app for discovering and streaming RTSP cameras with UPnP port mapping. Integrated OpenCV for frame extraction and multiple LLMs (OpenAI, Claude, Google Vision) for real-time suspicious activity detection and notifications.",
    tech: ["React Native", "OpenCV", "LLMs", "Strapi", "Java"],
    link: "https://www.ip.video/",
    linkLabel: "IPVideo",
    extraLink: null,
    extraLabel: null,
  },
  {
    title: "Ride Sharing App",
    description:
      "Cross-platform ride sharing app built with Flutter, Dart, and Google Maps API using Clean Test-Driven Development architecture. Achieved 98% code coverage via SonarCloud. Enhanced the A2SV portal serving 3,000+ users.",
    tech: ["Flutter", "Dart", "Google Maps API", "TDD", "SonarCloud"],
    link: "https://github.com/sefinehtesfa34/RideShare-app",
    extraLink: "https://www.eskalate.io/",
    extraLabel: "Eskalate",
  },
];

export default projects;
