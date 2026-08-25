export type Project = {
  slug: string;
  name: string;
  initial: string;
  category: string;
  image: string;
  tags: string[];
  industries: string[];
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    slug: "karnataka-statewide-survey-platform",
    name: "Karnataka Statewide Survey Platform",
    initial: "K",
    category: "#01 · GovTech",
    image: "/clients/The-Karnataka-Government-Kannada-Logo-Vector.svg-.png",
    tags: ["GovTech", "Karnataka Socio-Educational Survey"],
    industries: ["GovTech"],
    summary:
      "Enterprise-grade digital platform powering the Government of Karnataka's statewide socio-educational survey covering millions of households.",
    overview:
      "A state-scale digital platform built for the Government of Karnataka to run its socio-educational survey across millions of households, with offline-first data collection, geotagging and real-time aggregation.",
    challenge:
      "Running a survey at this scale required offline resilience, multilingual data capture, and centralized monitoring across thousands of field agents.",
    solution:
      "We engineered a Flutter-based field app with offline sync, a Node.js orchestration layer and a PostgreSQL reporting backend that consolidates survey data in near real time.",
    tech: ["Flutter", "Node.js", "PostgreSQL"],
  },
  {
    slug: "taurus-career-ai",
    name: "Taurus Career AI",
    initial: "T",
    category: "#02 · AI Platform",
    image: "/case-studies/taurus-career-ai.jpg",
    tags: ["AI Platform", "Career/HR"],
    industries: ["AI Platform"],
    summary:
      "AI-driven, mobile-first career platform combining job discovery, résumé optimization, and community collaboration.",
    overview:
      "Taurus Career AI is a comprehensive, AI-driven career platform designed to revolutionize how job seekers discover opportunities, optimize their professional profiles, and collaborate with peers.",
    challenge:
      "Job seekers struggle to navigate fragmented job markets, craft compelling résumés, and access professional networks. Traditional job portals lack personalization and AI-powered optimization capabilities.",
    solution:
      "We built a unified mobile-first platform with AI-powered job matching, intelligent résumé optimization using NLP, and a built-in community collaboration space.",
    tech: ["React Native", "Node.js", "Python"],
  },
  {
    slug: "flycure-health",
    name: "Flycure Health",
    initial: "F",
    category: "#03 · Healthcare",
    image: "/case-studies/flycure-health.jpg",
    tags: ["Healthcare", "Medical Tourism"],
    industries: ["Healthcare"],
    summary:
      "Cross-platform medical tourism application connecting international patients with accredited hospitals in India.",
    overview:
      "Flycure Health is a cross-platform medical tourism application that connects international patients with accredited hospitals in India, featuring multilingual support and in-app booking.",
    challenge:
      "International patients face significant barriers in accessing quality healthcare in India — language barriers, lack of transparency in hospital ratings, and complex booking processes.",
    solution:
      "We developed a cross-platform application with multilingual support, real-time hospital listings, in-app booking, and role-based access controls for patients, doctors, and partners.",
    tech: ["Flutter", "Node.js", "Firebase"],
  },
  {
    slug: "cloud-kitchen-pos",
    name: "Cloud Kitchen POS",
    initial: "C",
    category: "#04 · Enterprise",
    image: "/case-studies/cloud-kitchen-pos.jpg",
    tags: ["Enterprise", "FoodTech"],
    industries: ["Enterprise"],
    summary:
      "Scalable POS system for a top cloud kitchen brand, managing 5 sub-brands and close to 100 kitchens.",
    overview:
      "A scalable Point-of-Sale system designed for a top cloud kitchen brand, handling operations across 5 different sub-brands and nearly 100 kitchens nationwide.",
    challenge:
      "Managing orders, inventory, and analytics across 100 kitchens with 5 sub-brands required a unified, real-time system that could handle high throughput during peak hours.",
    solution:
      "We built a real-time order management system with OOS management, comprehensive reporting, AI-based analytics, and KDS (Kitchen Display System) integration.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    slug: "contractor-loyalty-app",
    name: "Contractor Loyalty App",
    initial: "C",
    category: "#05 · Enterprise",
    image: "/case-studies/contractor-loyalty-app.jpg",
    tags: ["Enterprise", "ConstructionTech"],
    industries: ["Enterprise"],
    summary:
      "Digital loyalty application fostering stronger contractor relationships through a points-based rewards system.",
    overview:
      "A construction loyalty application designed to foster stronger relationships with contractors by rewarding repeat business and referrals through a points-based system.",
    challenge:
      "Construction companies lack digital tools to retain contractors, track loyalty, and incentivize repeat business in an industry where such programs are rare.",
    solution:
      "We built a digital loyalty platform with CRM integration for seamless reward tracking, personalized offers, and real-time points management.",
    tech: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    slug: "trackway",
    name: "Trackway",
    initial: "T",
    category: "#06 · IoT / Mobility",
    image: "/case-studies/trackway.jpg",
    tags: ["IoT/Mobility", "Mobility"],
    industries: ["IoT / Mobility", "Mobility"],
    summary:
      "Smart vehicle tracking platform with real-time monitoring, ride data analytics, and support integration.",
    overview:
      "Trackway is a smart and scalable vehicle tracking platform built to give users real-time visibility and control over their vehicles.",
    challenge:
      "Fleet operators needed a unified dashboard to monitor vehicles across locations with real-time data, route history, and performance analytics.",
    solution:
      "We built an intuitive dashboard with live GPS tracking, route playback, ride analytics, and custom status filters that transform raw movement into actionable insights.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    slug: "ai-lead-discovery",
    name: "AI Lead Discovery",
    initial: "A",
    category: "#07 · AI Platform",
    image: "/case-studies/ai-lead-discovery.jpg",
    tags: ["AI Platform", "SalesTech"],
    industries: ["AI Platform"],
    summary:
      "AI solution automating the lead management lifecycle with smart algorithms and data enrichment.",
    overview:
      "An AI-based lead discovery platform designed to automate and enhance the entire lead management lifecycle using smart algorithms and multi-source data enrichment.",
    challenge:
      "Sales teams waste significant time manually sourcing, qualifying, and enriching leads from disparate data sources, leading to low conversion rates.",
    solution:
      "We built an AI-powered platform that automatically generates, qualifies, and enriches leads using multi-source data aggregation, behavior analysis, and ideal customer profile matching.",
    tech: ["Python", "FastAPI", "React"],
  },
  {
    slug: "catalogue-management",
    name: "Catalogue Management",
    initial: "C",
    category: "#08 · Enterprise",
    image: "/case-studies/catalogue-management.jpg",
    tags: ["Enterprise", "PIM"],
    industries: ["Enterprise"],
    summary:
      "Enterprise-grade product information management platform with real-time inventory and pricing.",
    overview:
      "An enterprise-grade product information management (PIM) platform that centralizes product data with real-time inventory and pricing across channels.",
    challenge:
      "Businesses managing large product catalogues struggle with scattered data, inconsistent pricing, and stale inventory across multiple channels.",
    solution:
      "We delivered a unified catalogue management system with real-time inventory sync, centralized pricing control, and channel-ready product publishing.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    slug: "stackintel",
    name: "StackIntel",
    initial: "S",
    category: "#09 · Fintech",
    image: "/case-studies/stackintel.jpg",
    tags: ["Fintech", "Card Issuing"],
    industries: ["Fintech"],
    summary:
      "NPCI-certified RuPay card processing engine with end-to-end control over the card lifecycle.",
    overview:
      "StackIntel is an NPCI-certified RuPay card processing engine giving financial institutions end-to-end control over the card lifecycle.",
    challenge:
      "Card issuing requires stringent certification, secure data handling, and seamless integration with banking rails for issuance, activation and settlement.",
    solution:
      "We architected a certified processing engine covering card personalization, lifecycle management, transaction processing and settlement reporting.",
    tech: ["Java", "React", "PostgreSQL"],
  },
  {
    slug: "finfan",
    name: "FinFan",
    initial: "F",
    category: "#10 · Fintech",
    image: "/case-studies/finfan.jpg",
    tags: ["Fintech", "Cross-border"],
    industries: ["Fintech"],
    summary:
      "Modern cross-border remittance platform for multi-currency fund management.",
    overview:
      "FinFan is a modern cross-border remittance platform enabling multi-currency fund management for consumers and businesses.",
    challenge:
      "Cross-border payments are fragmented across currencies, corridors and compliance requirements, making transfers slow and costly.",
    solution:
      "We built a remittance platform with multi-currency wallets, corridor-aware routing, competitive FX handling and compliance-ready flows.",
    tech: ["Flutter", "Node.js", "PostgreSQL"],
  },
  {
    slug: "bobo-ride-hailing",
    name: "BOBO Ride-Hailing",
    initial: "B",
    category: "#11 · Mobility",
    image: "/case-studies/bobo-ride-hailing.jpg",
    tags: ["Mobility", "Ride-hailing"],
    industries: ["Mobility"],
    summary:
      "Smart ride-hailing platform built specifically for India's Tier 2 and Tier 3 cities.",
    overview:
      "BOBO is a smart ride-hailing platform built specifically for India's Tier 2 and Tier 3 cities, tuned to local commuting patterns.",
    challenge:
      "Ride-hailing in smaller cities requires lightweight apps, reliable dispatch, and pricing suited to local demand and purchasing power.",
    solution:
      "We shipped rider and driver apps with smart dispatch, dynamic pricing, and low-bandwidth reliability optimized for smaller markets.",
    tech: ["React Native", "Node.js", "MongoDB"],
  },
  {
    slug: "road-scope",
    name: "Road Scope",
    initial: "R",
    category: "#12 · IoT / Mobility",
    image: "/case-studies/road-scope.jpg",
    tags: ["IoT/Mobility", "Logistics"],
    industries: ["IoT / Mobility", "Mobility"],
    summary:
      "Vehicle tracking system for logistics companies managing 1000+ heavy vehicles.",
    overview:
      "Road Scope is a vehicle tracking system purpose-built for logistics companies managing 1000+ heavy vehicles across long-haul routes.",
    challenge:
      "Fleet managers needed live visibility, route discipline, and fuel/geofence controls across a very large fleet of heavy vehicles.",
    solution:
      "We built a scalable tracking platform with live telemetry, geofencing, trip analytics and alerting designed for fleets of 1000+ vehicles.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    slug: "mascons",
    name: "Mascons",
    initial: "M",
    category: "#13 · Fintech",
    image: "/case-studies/mascons.jpg",
    tags: ["Fintech", "B2B Payments"],
    industries: ["Fintech"],
    summary:
      "E-commerce platform turning purchase orders into instant vendor payments via digital vouchers.",
    overview:
      "Mascons is an e-commerce platform that converts purchase orders into instant vendor payments using digital vouchers.",
    challenge:
      "Vendors on large supply chains face slow payment cycles that tie up working capital and strain supplier relationships.",
    solution:
      "We built a platform where purchase orders trigger digital voucher issuance for instant, trackable vendor settlement.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    slug: "odinmo-baas",
    name: "Odinmo BaaS",
    initial: "O",
    category: "#14 · Fintech",
    image: "/case-studies/odinmo-baas.jpg",
    tags: ["Fintech", "BaaS"],
    industries: ["Fintech"],
    summary:
      "Banking-as-a-Service platform for fintechs and enterprises to launch banking products.",
    overview:
      "Odinmo BaaS is a Banking-as-a-Service platform that lets fintechs and enterprises launch banking products without building banking infrastructure.",
    challenge:
      "Launching banking products requires licenses, rails integration and compliance — a prohibitive barrier for most fintechs.",
    solution:
      "We engineered a BaaS layer providing accounts, cards, payments and KYC-ready flows through clean APIs for rapid product launch.",
    tech: ["Java", "React", "PostgreSQL"],
  },
  {
    slug: "instapay-pos",
    name: "Instapay POS",
    initial: "I",
    category: "#15 · Fintech",
    image: "/case-studies/instapay-pos.jpg",
    tags: ["Fintech", "Merchant Payments"],
    industries: ["Fintech"],
    summary:
      "POS and merchant payment platform simplifying digital transactions for retail chains.",
    overview:
      "Instapay POS is a point-of-sale and merchant payment platform that simplifies digital transactions for retail chains.",
    challenge:
      "Retail chains needed a unified POS experience handling billing, multiple payment methods, and reconciliation across stores.",
    solution:
      "We delivered a POS platform with integrated payments, instant settlements and store-level reconciliation for multi-branch retail.",
    tech: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    slug: "enpay",
    name: "EnPay",
    initial: "E",
    category: "#16 · Fintech",
    image: "/case-studies/enpay.jpg",
    tags: ["Fintech", "Payments"],
    industries: ["Fintech"],
    summary:
      "B2B payment gateway for high-volume pay-ins and payouts across partners.",
    overview:
      "EnPay is a B2B payment gateway engineered for high-volume pay-ins and payouts across a partner network.",
    challenge:
      "B2B platforms require reliable, high-throughput payment rails with precise settlement and partner-level reporting.",
    solution:
      "We built a gateway with high-volume transaction processing, automated reconciliation and partner portals for settlements.",
    tech: ["Java", "React", "PostgreSQL"],
  },
  {
    slug: "via-carte",
    name: "Via Carte",
    initial: "V",
    category: "#17 · Fintech",
    image: "/case-studies/via-carte.jpg",
    tags: ["Fintech", "Expense Management"],
    industries: ["Fintech"],
    summary:
      "Comprehensive expense management system for businesses to monitor and streamline spending.",
    overview:
      "Via Carte is a comprehensive expense management system that helps businesses monitor and streamline corporate spending.",
    challenge:
      "Businesses lacked a single view of expenses, policy enforcement, and approval workflows, leading to overspend and manual bookkeeping.",
    solution:
      "We built an expense platform with real-time tracking, policy rules, approval flows and analytics for finance teams.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    slug: "enqupay",
    name: "EnQuPay",
    initial: "E",
    category: "#18 · Fintech",
    image: "/case-studies/enqupay.jpg",
    tags: ["Fintech", "Payments"],
    industries: ["Fintech"],
    summary:
      "End-to-end payments experience for merchant settlements and peer-to-peer transfers.",
    overview:
      "EnQuPay delivers an end-to-end payments experience covering merchant settlements and peer-to-peer transfers.",
    challenge:
      "Merchants and consumers needed a single, trusted destination for instant transfers and settlement visibility.",
    solution:
      "We built a payments app with instant P2P transfers, merchant settlement dashboards and secure transaction history.",
    tech: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    slug: "runway-tender-discovery",
    name: "Runway — Tender Discovery",
    initial: "R",
    category: "#19 · GovTech",
    image: "/case-studies/runway-tender-discovery.jpg",
    tags: ["GovTech", "Tender Discovery"],
    industries: ["GovTech"],
    summary:
      "Digital tender sourcing platform for finding government tenders across India.",
    overview:
      "Runway is a digital tender sourcing platform that helps businesses discover and track government tenders across India.",
    challenge:
      "Finding relevant government tenders is fragmented across portals and formats, costing suppliers time and missed opportunities.",
    solution:
      "We built a tender discovery platform with aggregated listings, smart search, filters and tracking alerts for suppliers.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    slug: "ticketing-app",
    name: "Ticketing App",
    initial: "T",
    category: "#20 · Consumer",
    image: "/case-studies/ticketing-app.png",
    tags: ["Consumer", "Entertainment"],
    industries: ["Consumer"],
    summary:
      "Progressive web app connecting users with live events across India with seamless booking.",
    overview:
      "A progressive web app connecting users with live events across India, enabling discovery and seamless ticket booking.",
    challenge:
      "Event discovery and booking were fragmented, with poor mobile experiences and high drop-off during checkout.",
    solution:
      "We delivered a fast PWA with event discovery, seat selection, secure checkout and digital ticket delivery.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    slug: "bulk-hiring",
    name: "Bulk Hiring",
    initial: "B",
    category: "#21 · AI Platform",
    image: "/case-studies/bulk-hiring.jpg",
    tags: ["AI Platform", "Career/HR"],
    industries: ["AI Platform"],
    summary:
      "Video-based high-volume recruitment platform with AI-powered candidate screening.",
    overview:
      "Bulk Hiring is a video-based high-volume recruitment platform that uses AI to screen candidates at scale.",
    challenge:
      "High-volume hiring makes manual screening impractical, leading to slow pipelines and inconsistent candidate evaluation.",
    solution:
      "We built a video-based screening platform with AI-powered assessments, ranking and structured review workflows.",
    tech: ["React", "Node.js", "Python"],
  },
  {
    slug: "echo",
    name: "Echo",
    initial: "E",
    category: "#22 · Communication",
    image: "/case-studies/echo.jpg",
    tags: ["Communication", "Collaboration"],
    industries: ["Communication"],
    summary:
      "1:1 video networking platform for mentor–mentee and founder–freelancer collaboration.",
    overview:
      "Echo is a 1:1 video networking platform designed for mentor–mentee and founder–freelancer collaboration.",
    challenge:
      "Meaningful 1:1 connections are hard to schedule and run well across time zones and busy calendars.",
    solution:
      "We shipped a video networking platform with scheduling, in-call tools and connection management for one-on-one sessions.",
    tech: ["React Native", "Node.js", "WebRTC"],
  },
  {
    slug: "blitz-meet",
    name: "Blitz Meet",
    initial: "B",
    category: "#23 · Marketplace",
    image: "/case-studies/blitz-meet.jpg",
    tags: ["Marketplace", "Freelancing"],
    industries: ["Marketplace"],
    summary:
      "Freelancer discovery platform connecting businesses with skilled professionals.",
    overview:
      "Blitz Meet is a freelancer discovery platform that connects businesses with vetted, skilled professionals.",
    challenge:
      "Businesses struggle to find and vet quality freelancers quickly, while freelancers lack a reliable channel for opportunities.",
    solution:
      "We built a discovery marketplace with profiles, skill matching, and engagement workflows that bring both sides together.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    slug: "ai-video-networking",
    name: "AI Video Networking",
    initial: "A",
    category: "#24 · AI Platform",
    image: "/case-studies/ai-video-networking.jpg",
    tags: ["AI Platform", "Communication"],
    industries: ["AI Platform", "Communication"],
    summary:
      "Secure video solution with live transcription, automated MoMs and an AI meeting assistant.",
    overview:
      "A secure video solution enhanced with live transcription, automated meeting minutes and an AI meeting assistant.",
    challenge:
      "Teams waste hours on manual notes and follow-ups after every meeting, and video tools often lack enterprise-grade security.",
    solution:
      "We delivered a secure video platform with live transcription, AI-generated minutes and post-meeting action tracking.",
    tech: ["React", "Node.js", "Python"],
  },
  {
    slug: "consumer-loyalty-app",
    name: "Consumer Loyalty App",
    initial: "L",
    category: "#25 · Consumer",
    image: "/case-studies/consumer-loyalty-app.jpg",
    tags: ["Consumer", "E-Commerce"],
    industries: ["Consumer"],
    summary:
      "Plug-and-play customer engagement and rewards platform to increase retention and boost repeat purchases.",
    overview:
      "A plug-and-play loyalty platform for consumer brands to run rewards, increase retention and drive repeat purchases.",
    challenge:
      "Brands lacked a fast way to launch engagement and loyalty programs without heavy custom development.",
    solution:
      "We built a configurable loyalty engine with points, tiers and campaigns that integrate with existing commerce stacks.",
    tech: ["React Native", "Node.js", "Firebase"],
  },
];

export const industries = [
  { name: "Fintech", projects: "10+ projects" },
  { name: "AI Platform", projects: "6+ projects" },
  { name: "Enterprise", projects: "4+ projects" },
  { name: "Mobility", projects: "3+ projects" },
  { name: "IoT / Mobility", projects: "2+ projects" },
  { name: "Healthcare", projects: "1+ projects" },
  { name: "GovTech", projects: "2+ projects" },
  { name: "Consumer", projects: "3+ projects" },
  { name: "Communication", projects: "2+ projects" },
  { name: "Marketplace", projects: "1+ projects" },
];