export type TechnologyCategory = {
  id: string;
  name: string;
  description: string;
  techs: {
    name: string;
    description: string;
    verified: boolean;
    icon?: string;
  }[];
};

export const technologyCategories: TechnologyCategory[] = [
  {
    id: "frontend",
    name: "Frontend & Mobile",
    description: "Modern, reactive web interfaces and cross-platform mobile frameworks built for performance and accessibility.",
    techs: [
      { name: "React", description: "Modern UI library for component-driven web interfaces.", verified: true },
      { name: "Next.js", description: "App Router framework for server rendering & performance.", verified: true },
      { name: "TypeScript", description: "Strict static typing for scalable enterprise codebases.", verified: true },
      { name: "Flutter", description: "Cross-platform high-performance iOS/Android apps.", verified: true },
      { name: "React Native", description: "Native mobile development powered by JavaScript/TypeScript.", verified: true },
      { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid responsive design.", verified: true }
    ]
  },
  {
    id: "backend",
    name: "Backend & APIs",
    description: "High-throughput server runtimes, microservices architectures, and secure API gateways.",
    techs: [
      { name: "Node.js", description: "Asynchronous event-driven backend runtime.", verified: true },
      { name: "Python", description: "Powering AI pipelines, data engineering & FastAPI services.", verified: true },
      { name: "Java", description: "Enterprise-grade backend framework for core banking rails.", verified: true },
      { name: "FastAPI", description: "High-performance Python web framework for microservices.", verified: true },
      { name: "REST / GraphQL", description: "Standardized API protocols for client-server communication.", verified: true }
    ]
  },
  {
    id: "data-ai",
    name: "Data & AI Systems",
    description: "Production database engines, intelligent models, and real-time analytical frameworks.",
    techs: [
      { name: "PostgreSQL", description: "Reliable, enterprise relational database with ACID compliance.", verified: true },
      { name: "MongoDB", description: "Scalable document-oriented NoSQL database.", verified: true },
      { name: "Firebase", description: "Real-time backend services & authentication infrastructure.", verified: true },
      { name: "Python AI / ML", description: "NLP models, PyTorch pipelines, and custom AI agents.", verified: true },
      { name: "WebRTC", description: "Real-time audio & video communication protocol.", verified: true }
    ]
  },
  {
    id: "cloud-infra",
    name: "Cloud & Security",
    description: "Cloud-native infrastructure, automated CI/CD deployment rails, and enterprise compliance.",
    techs: [
      { name: "AWS", description: "Elastic cloud compute, serverless & container platforms.", verified: true },
      { name: "Google Cloud", description: "BigQuery data infrastructure & AI platform hosting.", verified: true },
      { name: "Docker", description: "Containerized application packaging and deployment.", verified: true },
      { name: "CI/CD Pipelines", description: "Automated testing, building, and deployment workflows.", verified: true },
      { name: "NPCI Certification", description: "RuPay card processing certification and compliance.", verified: true }
    ]
  }
];
