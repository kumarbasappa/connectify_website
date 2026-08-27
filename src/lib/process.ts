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
    title: "Discover",
    subtitle: "Understanding project goals, requirements, and technical scope",
    description:
      "We audit existing systems, understand business goals, define technical scope, and map user requirements to align on clear project deliverables.",
    activities: [
      "Technical & Business Requirements Audit",
      "User Journey & Scope Mapping",
      "Security & Compliance Checklist"
    ],
    deliverables: [
      "Technical Discovery Summary",
      "Scope & Requirements Architecture Blueprint"
    ]
  },
  {
    stepNumber: "02",
    title: "Plan",
    subtitle: "Structuring technology stack, sprint roadmaps, and milestones",
    description:
      "We select optimal technologies, design system architecture, create data schemas, and lay out an agile sprint roadmap with clear milestones.",
    activities: [
      "Technology Stack & Cloud Architecture Selection",
      "Database & API Schema Structuring",
      "Sprint Roadmap & Milestone Scheduling"
    ],
    deliverables: [
      "System Architecture Specification",
      "Agile Milestone Schedule"
    ]
  },
  {
    stepNumber: "03",
    title: "Design",
    subtitle: "Crafting intuitive visual interfaces and design systems",
    description:
      "Our team designs user-centric wireframes, UI design tokens, component libraries, and interactive prototypes tailored to your brand identity.",
    activities: [
      "Interactive Wireframing & UX Flow",
      "Design System & UI Component Curation",
      "Clickable Product Prototypes"
    ],
    deliverables: [
      "Figma UI Design System",
      "Interactive Prototype"
    ]
  },
  {
    stepNumber: "04",
    title: "Develop",
    subtitle: "Engineering clean, scalable, and modular software codebases",
    description:
      "We build full-stack web applications, mobile apps, and cloud backend microservices using modern, strongly typed frameworks.",
    activities: [
      "Bi-weekly Agile Development Sprints",
      "Full-stack & API Integration",
      "Clean Code Reviews & Refactoring"
    ],
    deliverables: [
      "Staging Codebase Repository",
      "Documented API Contracts"
    ]
  },
  {
    stepNumber: "05",
    title: "Test",
    subtitle: "Rigorous quality assurance, automated tests, and performance reviews",
    description:
      "We perform automated unit testing, integration checks, cross-device QA, security vulnerability scans, and performance optimizations.",
    activities: [
      "Automated End-to-End & Unit Testing",
      "Cross-Browser & Mobile Device Testing",
      "Security Audit & Performance Tuning"
    ],
    deliverables: [
      "QA & Automated Test Report",
      "Security & Performance Clearances"
    ]
  },
  {
    stepNumber: "06",
    title: "Deploy",
    subtitle: "Seamless production launch and cloud environment setup",
    description:
      "We manage zero-downtime production deployment, configure cloud infrastructure, set up SSL/DNS, and enable automated CI/CD pipelines.",
    activities: [
      "Production Cloud Environment Configuration",
      "Zero-downtime Release Deployment",
      "CI/CD Pipeline Activation"
    ],
    deliverables: [
      "Live Production Platform",
      "Deployment & Infrastructure Runbook"
    ]
  },
  {
    stepNumber: "07",
    title: "Support",
    subtitle: "Continuous monitoring, platform maintenance, and ongoing updates",
    description:
      "Post-launch, we provide 24/7 monitoring, security updates, feature enhancements, and proactive SRE support to keep your software running smoothly.",
    activities: [
      "24/7 System Monitoring & Alerting",
      "Security Patching & Framework Updates",
      "Iterative Feature Enhancements"
    ],
    deliverables: [
      "System Health Dashboards",
      "Ongoing Technical Support SLA"
    ]
  }
];
