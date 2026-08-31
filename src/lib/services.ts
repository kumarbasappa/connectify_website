export type ServiceItem = {
  name: string;
  description: string;
  deliverables: string[];
};

export type ServiceCategory = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  problemsSolved: string[];
  capabilities: string[];
  deliverables: string[];
  services: ServiceItem[];
  accentColor: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "digital-solutions",
    number: "01",
    title: "Digital Solutions",
    subtitle: "Enterprise-grade digital product engineering and architecture",
    description:
      "Full-stack digital engineering from web applications and mobile products to scalable SaaS platforms and omnichannel e-commerce systems.",
    problemsSolved: [
      "Legacy software debt & performance bottlenecks",
      "Fragmented user experiences across devices",
      "Monolithic systems unable to handle rapid feature delivery",
      "Lack of scalability during peak transaction periods"
    ],
    capabilities: [
      "Progressive Web Apps (PWA) & Web Platforms",
      "Native iOS & Android Applications",
      "Multi-tenant Cloud SaaS Architectures",
      "Omnichannel Digital Storefronts & Checkout Engines"
    ],
    deliverables: [
      "Production-ready Web & Mobile Codebases",
      "Microservice & API Architecture Specifications",
      "UX/UI Design Systems & Component Libraries",
      "Automated CI/CD Delivery Pipelines"
    ],
    services: [
      {
        name: "Web Development",
        description:
          "Modern, high-performance web applications built for scale, security, and conversion utilizing Next.js, React, and TypeScript.",
        deliverables: ["Single-page & Server-rendered Apps", "Headless CMS Integrations", "Performance Optimization Pass"]
      },
      {
        name: "Mobile Apps",
        description:
          "Native (Swift/Kotlin) and cross-platform (Flutter/React Native) mobile experiences engineered for maximum speed and offline-first reliability.",
        deliverables: ["iOS & Android Store Deployment", "Biometric Authentication", "Offline Data Synchronization"]
      },
      {
        name: "SaaS Solutions",
        description:
          "Multi-tenant SaaS platforms with enterprise billing, fine-grained RBAC roles, real-time analytics, and SOC2-ready compliance features.",
        deliverables: ["Multi-tenant Database Schemas", "Stripe/Razorpay Billing Subscriptions", "Admin & Audit Dashboards"]
      },
      {
        name: "E-commerce",
        description:
          "High-volume digital storefronts, complex product catalogues, instant checkout engines, and inventory management systems.",
        deliverables: ["Custom Cart & Payment Rail Integration", "Real-time Stock Synchronization", "Order Fulfillment API"]
      }
    ],
    accentColor: "#0ea5e9"
  },
  {
    id: "technology-services",
    number: "02",
    title: "Technology Services",
    subtitle: "Cloud infrastructure, AI solutions, and managed operations",
    description:
      "Cloud-native architecture, custom machine learning integrations, and managed operations that ensure live platforms remain resilient, secure, and future-ready.",
    problemsSolved: [
      "High cloud infrastructure costs & inefficient resource utilization",
      "Unplanned platform downtime & lack of 24/7 observability",
      "Data silos preventing intelligent decision making",
      "Security vulnerabilities and compliance risks"
    ],
    capabilities: [
      "AWS / GCP / Azure Cloud Migration & DevOps",
      "Custom Machine Learning & Predictive Modeling",
      "SRE Ops, 24/7 Monitoring & SLA Management",
      "Data Pipelines & Real-time Analytics Engine"
    ],
    deliverables: [
      "Infrastructure as Code (Terraform / CloudFormation)",
      "Trained AI/ML Models & Inference APIs",
      "Monitoring Dashboards (Grafana / Datadog)",
      "System Security Audit & Hardening Reports"
    ],
    services: [
      {
        name: "Cloud Computing",
        description:
          "Cloud-native architecture design, containerization with Kubernetes/Docker, and automated infrastructure deployment across AWS, Azure, and GCP.",
        deliverables: ["Container Orchestration", "Auto-scaling Infrastructure", "Disaster Recovery Playbooks"]
      },
      {
        name: "AI/ML and Data Intelligence",
        description:
          "Intelligent systems incorporating LLMs, natural language processing, predictive analytics, and automated decision-making engines.",
        deliverables: ["Custom RAG Pipeline Architecture", "Predictive Customer Models", "Automated Document Processing"]
      },
      {
        name: "Managed Services & SRE",
        description:
          "Ongoing platform maintenance, 99.99% uptime SLAs, proactive security patching, and automated performance optimization.",
        deliverables: ["24/7 Incident Response", "Patch & Security Updates", "Monthly Health Audits"]
      }
    ],
    accentColor: "#8b5cf6"
  },
  {
    id: "business-advisory",
    number: "03",
    title: "Business Advisory",
    subtitle: "Strategic playbooks connecting technology to enterprise revenue",
    description:
      "Strategic advisory services that align technology roadmaps with core business outcomes, market expansion, and long-term shareholder value.",
    problemsSolved: [
      "Misalignment between technology investments and commercial goals",
      "Slow time-to-market for new digital initiatives",
      "Unclear product-market fit in competitive sectors",
      "Inefficient go-to-market and channel distribution strategies"
    ],
    capabilities: [
      "Digital Transformation Blueprints",
      "Product Strategy & Value Proposition Design",
      "Go-to-Market & Channel Distribution Architecture",
      "CXO & Board Advisory on Tech Governance"
    ],
    deliverables: [
      "3-Year Digital Transformation Roadmap",
      "Comprehensive GTM Playbook",
      "Competitive Intelligence Benchmark Reports",
      "Product Operating Model Guidelines"
    ],
    services: [
      {
        name: "Growth Strategy",
        description:
          "Data-backed playbooks that translate market opportunities into executable growth engines and sustainable competitive advantages.",
        deliverables: ["Market Entry Analysis", "Customer Acquisition Models", "Unit Economics Optimization"]
      },
      {
        name: "Product Consulting",
        description:
          "Discovery workshops, user research, product operating models, and clear feature prioritizations from concept validation to launch.",
        deliverables: ["Feature Prioritization Matrices", "Interactive Wireframes", "User Journey Maps"]
      },
      {
        name: "Digital Transformation",
        description:
          "Comprehensive modernization blueprints for enterprises in banking, healthcare, retail, and public sector organizations.",
        deliverables: ["Legacy System Audits", "Target Operating Models", "Change Management Guides"]
      },
      {
        name: "Go-to-Market Strategy",
        description:
          "Channel architecture, strategic partnership design, pricing strategies, and regional expansion execution.",
        deliverables: ["Pricing Model Matrices", "Partner Ecosystem Plans", "Sales Enablement Kits"]
      }
    ],
    accentColor: "#f59e0b"
  },
  {
    id: "investment-consulting",
    number: "04",
    title: "Investment Consulting",
    subtitle: "Capital strategy, debt financing, and post-raise operational guidance",
    description:
      "Capital advisory connecting high-growth technology ventures and enterprise initiatives with growth capital, structured debt, and investor readiness.",
    problemsSolved: [
      "Unstructured financial models failing to convince institutional investors",
      "Complex capital allocation decisions during scale-up phases",
      "Inefficient debt financing terms straining operational cash flows",
      "Post-funding execution gaps and lack of governance"
    ],
    capabilities: [
      "Institutional Investor Narrative & Data Room Preparation",
      "Structured Debt & Venture Debt Advisory",
      "Capital Structure & Financial Model Engineering",
      "Post-Investment Governance & Reporting Systems"
    ],
    deliverables: [
      "Institutional Pitch Decks & Valuation Benchmarking",
      "Debt Capitalization & Lender Term Structuring",
      "M&A Due Diligence & Data Room Setup",
      "Quarterly Investor Reporting Templates"
    ],
    services: [
      {
        name: "Investment Strategy",
        description:
          "Capital allocation frameworks, valuation benchmarking, and compelling equity investment narratives for venture and growth rounds.",
        deliverables: ["Financial Forecasting Models", "Valuation Analysis", "Investor Pitch Assets"]
      },
      {
        name: "Debt Finance Advisory",
        description:
          "Structured debt solutions, working capital facilities, and venture debt positioning tailored to cash flow profiles.",
        deliverables: ["Lender Information Memorandums", "Debt Capitalization Structuring", "Interest Rate Optimization"]
      },
      {
        name: "Equity Fundraising Support",
        description:
          "Strategic assistance in investor targeting, deal room curation, M&A due diligence management, and term sheet negotiations.",
        deliverables: ["Data Room Indexing", "M&A Due Diligence Management", "Term Sheet Negotiation Support"]
      },
      {
        name: "Post-Raise Execution Support",
        description:
          "Operational deployment of fresh capital, board-level reporting, KPI tracking, and governance framework implementation.",
        deliverables: ["Board KPI Dashboards", "Burn-rate Controls", "Strategic Milestones Tracker"]
      }
    ],
    accentColor: "#10b981"
  },
  {
    id: "brand-experience",
    number: "05",
    title: "Brand Experience",
    subtitle: "Crafting digital identities and immersive interface designs",
    description:
      "Enterprise brand positioning, modern UI/UX design systems, and cohesive digital touchpoints that inspire confidence and elevate brand equity.",
    problemsSolved: [
      "Outdated visual identity that fails to reflect enterprise capabilities",
      "Inconsistent design language across web, mobile, and marketing collateral",
      "Complex user interfaces leading to high drop-offs and support costs"
    ],
    capabilities: [
      "Enterprise Visual Identity Systems",
      "Design Systems & Component Libraries",
      "High-Fidelity Motion & Interactive Prototypes",
      "Conversion-Focused UX Research & Testing"
    ],
    deliverables: [
      "Brand Guidelines & Asset Kits",
      "Figma UI Component Systems",
      "Usability Testing Audit Reports",
      "Interactive Product Prototypes"
    ],
    services: [
      {
        name: "Visual Identity Design",
        description:
          "Logo design, typography systems, color theory guidelines, and visual language tailored for modern enterprise positioning.",
        deliverables: ["Brand Identity Manual", "Typography & Color Specs", "Vector Logo Systems"]
      },
      {
        name: "UI/UX Product Design",
        description:
          "User-centric interface design, wireframing, interactive prototyping, and design system creation for web and mobile platforms.",
        deliverables: ["Complete Screen Layouts", "Interactive Figma Prototypes", "Design Tokens Spec"]
      }
    ],
    accentColor: "#f43f5e"
  },
  {
    id: "data-ai",
    number: "06",
    title: "Data & AI",
    subtitle: "Turn raw organizational data into automated action and intelligence",
    description:
      "From data lakehouse foundations to production AI agents and machine learning pipelines, we help enterprises convert proprietary data into competitive leverage.",
    problemsSolved: [
      "Siloed enterprise data sources unable to generate real-time insights",
      "Manual data processing causing operational delays and error rates",
      "Lack of governance and security in AI/ML deployments"
    ],
    capabilities: [
      "Real-time Data Lakehouse Architecture",
      "Enterprise LLM & RAG Agent Development",
      "Automated Business Intelligence & Dashboards",
      "Data Governance, Privacy & Compliance (GDPR / DPDP)"
    ],
    deliverables: [
      "ETL / ELT Data Pipelines (Apache Airflow / dbt)",
      "Production-ready RAG Knowledge Assistants",
      "Executive Analytics Dashboards",
      "Data Governance Policy Documentation"
    ],
    services: [
      {
        name: "Data Foundations",
        description:
          "Data architecture design, ETL pipeline engineering, data cleaning, and warehousing solutions on Snowflake, BigQuery, or PostgreSQL.",
        deliverables: ["Centralized Data Warehouse", "Automated ETL Pipelines", "Data Quality Monitors"]
      },
      {
        name: "Enterprise AI Agents",
        description:
          "Custom LLM fine-tuning, Retrieval-Augmented Generation (RAG) agents, and intelligent automated workflows integrated into enterprise tools.",
        deliverables: ["Custom AI Search Engines", "Autonomous Operations Agents", "LLM Guardrails & Security"]
      }
    ],
    accentColor: "#6366f1"
  }
];
