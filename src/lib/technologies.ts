export type TechnologyCategory = {
  id: string;
  name: string;
  description: string;
  techs: {
    name: string;
    description: string;
    icon?: string;
  }[];
};

export const technologyCategories: TechnologyCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    description: "Modern, reactive web interfaces and frameworks built for performance, SEO, and accessibility.",
    techs: [
      { name: "React", description: "Modern UI library for component-driven web interfaces." },
      { name: "Next.js", description: "App Router framework for server rendering & optimal performance." },
      { name: "TypeScript", description: "Strict static typing for scalable enterprise codebases." },
      { name: "Tailwind CSS", description: "Utility-first CSS framework for clean responsive design." }
    ]
  },
  {
    id: "mobile",
    name: "Mobile",
    description: "Native and cross-platform mobile frameworks engineered for speed and offline-first reliability.",
    techs: [
      { name: "Flutter", description: "Cross-platform high-performance iOS and Android applications." },
      { name: "React Native", description: "Native mobile experiences powered by React and TypeScript." }
    ]
  },
  {
    id: "backend",
    name: "Backend",
    description: "High-throughput server runtimes, microservices architectures, and secure API gateways.",
    techs: [
      { name: "Node.js", description: "Asynchronous event-driven backend runtime." },
      { name: "Python", description: "Powering AI pipelines, data engineering, and microservices." },
      { name: "Java", description: "Enterprise-grade backend runtime for mission-critical services." },
      { name: "REST / GraphQL", description: "Standardized API protocols for client-server communication." }
    ]
  },
  {
    id: "database",
    name: "Database & Storage",
    description: "Reliable relational engines, document stores, and high-speed memory caches.",
    techs: [
      { name: "PostgreSQL", description: "Reliable, enterprise relational database with ACID compliance." },
      { name: "MongoDB", description: "Scalable document-oriented NoSQL database engine." }
    ]
  },
  {
    id: "cloud-ai",
    name: "AI & Cloud",
    description: "Cloud infrastructure, automated CI/CD pipelines, and intelligent machine learning models.",
    techs: [
      { name: "AWS", description: "Elastic cloud compute, serverless services, and storage." },
      { name: "Google Cloud", description: "Data infrastructure, cloud analytics, and hosting." },
      { name: "Docker", description: "Containerized application packaging and deployment." },
      { name: "Python AI / ML", description: "Natural language processing models and intelligent AI workflows." }
    ]
  }
];
