export type ProcessStep = {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  deliverables: string[];
};

export const processSteps: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Consultation & Discovery",
    subtitle: "Understanding your vision, business drivers, and technical requirements",
    description:
      "We begin every engagement with deep-dive technical and strategic discovery. We audit existing systems, map user journeys, define core business objectives, and align stakeholders on measurable outcomes.",
    activities: [
      "Architecture & Technical Debt Audit",
      "Business Model & Unit Economics Alignment",
      "User Persona & Workflow Mapping",
      "Security & Compliance Requirements Assessment"
    ],
    deliverables: [
      "Technical Discovery Report",
      "System Requirements Specification (SRS)",
      "High-level Architecture Blueprint"
    ]
  },
  {
    stepNumber: "02",
    title: "Strategy & UX/UI Design",
    subtitle: "Engineering intuitive interfaces backed by scalable architecture",
    description:
      "Our team designs the complete solution from low-fidelity user flows to pixel-perfect interactive prototypes and production-ready component design systems. Simultaneously, backend architects design data models and API contracts.",
    activities: [
      "Interactive Wireframing & Prototyping",
      "Design System & Token Curation",
      "Database Schema & API Interface Contract Design",
      "Sprint Roadmap & Milestones Planning"
    ],
    deliverables: [
      "Production-ready Figma Design System",
      "Interactive Product Prototype",
      "API Specification & Database Schemas",
      "Agile Project Plan & Milestone Matrix"
    ]
  },
  {
    stepNumber: "03",
    title: "Agile Implementation",
    subtitle: "Building resilient codebases with continuous delivery and automated testing",
    description:
      "We build using bi-weekly agile sprints with continuous integration, automated unit testing, and regular demonstration milestones. Our engineering adheres strictly to clean code practices, security hardening, and performance optimizations.",
    activities: [
      "Bi-weekly Agile Development Sprints",
      "Automated CI/CD Pipeline Integration",
      "Real-time Client Demo Sessions",
      "End-to-End Automated Testing & Security Code Reviews"
    ],
    deliverables: [
      "Staging Environment Access",
      "Clean, Documented Code Repository",
      "Automated Test Coverage Suite",
      "Sprint Progress Reports"
    ]
  },
  {
    stepNumber: "04",
    title: "Deployment & Scaling",
    subtitle: "Seamless production launch with proactive monitoring and long-term support",
    description:
      "We manage zero-downtime production launches, setup real-time monitoring and alerting, conduct load testing under stress conditions, and provide continuous SRE support to ensure ongoing platform performance and growth.",
    activities: [
      "Zero-downtime Production Deployment",
      "Load & Penetration Stress Testing",
      "24/7 Monitoring & Alerting Setup (Grafana/Datadog)",
      "Team Handover & Operations Documentation"
    ],
    deliverables: [
      "Live Production System Deployment",
      "SLA & Maintenance Operations Manual",
      "System Performance & Security Audit Clearances",
      "Ongoing Post-launch Support Plan"
    ]
  }
];
