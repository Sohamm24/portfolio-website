export interface TechItem {
  name: string;
  icon?: string;
}

export interface Challenge {
  problem: string;
  solution: string;
}

export interface ProjectGroup {
  type: string;
  bullets: { text: string; icon?: string }[];
  challenges?: Challenge[];
}

export interface CareerItem {
  period: string;
  headline: string;
  role: string;
  org: string;
  color: 'blue' | 'teal' | 'orange';
  bullets?: { text: string; icon?: string }[];
  challenges?: Challenge[];
  projects?: ProjectGroup[];
}

export interface WorkProject {
  title: string;
  headline: string;
  subtitle: string;
  highlights: { text: string; icon?: string }[];
  images: string[];
  githubUrl?: string;
  demoUrl?: string;
  systemDesignUrl?: string;
  challenges?: Challenge[];
}

export interface BlogPost {
  title: string;
  date: string;
  tag: string;
  url: string;
  banner: string;
  description?: string;
  readTime?: string;
}

export interface PersonalInfo {
  name: string;
  location: string;
  headlineLine1: string;
  headlineLine2: string;
  headlineLine3: string;
  linkedin: string;
  github: string;
  email: string;
  twitter: string;
}

// ─── Personal Info ─────────────────────────────────────────────
export const personalInfo: PersonalInfo = {
  name: "Soham Narvankar",
  location: "Mumbai, India",
  headlineLine1: "Designing Systems",
  headlineLine2: "Building Scalable Software",
  headlineLine3: "Shipping Products to Cloud",
  linkedin: "https://www.linkedin.com/in/soham-narvankar-607998302/",
  github: "https://github.com/Sohamm24",
  email: "sohamnarvankar24@gmail.com",
  twitter: "https://x.com/narvankar_53259",
};

// ─── Career Timeline ────────────────────────────────────────────
export const careerTimeline: CareerItem[] = [
  {
    period: "July 2025 – April 2026",
    headline: "Full Stack Developer Intern",
    role: "Krityam Solutions and Services",
    org: "Startup environment · Web & Mobile platforms, cloud integrations & AI features",
    color: "orange",
    projects: [
      {
        type: "Web Development",
        bullets: [
          { text: "Fast, modern web interfaces built for landowners and builders with Astro and React", icon: "astro" },
          { text: "Instant cloud data synchronization and real-time updates powered by Convex", icon: "convex" },
          { text: "Single codebase setup with Turborepo so shared components and logic update everywhere instantly", icon: "turborepo" },
          { text: "Seamless, secure user login and permission management using Clerk", icon: "clerk" },
          { text: "Global, high-speed hosting and domain routing via Vercel and Cloudflare DNS", icon: "vercel" },
        ],
        challenges: [
          {
            problem:
              "Shared user interface and logic drifted out of sync between the builder and landowner applications as the project expanded.",
            solution:
              "Created a shared internal package with automated build caching, ensuring any design or logic change instantly updates both apps without manual copying.",
          },
          {
            problem:
              "Frequent real-time data updates caused entire landowner dashboards to re-render, slowing down the page on large property lists.",
            solution:
              "Fine-tuned data queries so each screen only listens to the exact data it needs, keeping the dashboard snappy and responsive.",
          },
        ],
      },
      {
        type: "App Development",
        bullets: [
          { text: "Cross-platform mobile shopping app created with React Native & Expo for smooth iOS and Android experiences", icon: "react" },
          { text: "High-speed serverless APIs built on Cloudflare Workers and Hono for instant app responses", icon: "cloudflare" },
          { text: "Instant store catalog synchronization using Shopify webhooks and Hookdeck with 99% guaranteed delivery", icon: "shopify" },
          { text: "Lightning-fast product photos served worldwide through Cloudflare R2 storage and CDN caching", icon: "cloudflare" },
          { text: "Visual 'find similar snacks' recommendations powered by CLIP image AI and Qdrant vector search", icon: "qdrant" },
          { text: "Scalable machine-learning inference hosted on AWS containers with Docker", icon: "aws" },
        ],
        challenges: [
          {
            problem:
              "Bursts of incoming product and inventory updates from Shopify occasionally arrived out of order, risking inaccurate stock numbers.",
            solution:
              "Implemented an orderly queue with automated safeguards and idempotent handling, guaranteeing stock and prices stay 100% accurate under traffic spikes.",
          },
          {
            problem:
              "Initial delays on machine-learning containers caused visual snack recommendations to feel slow on the first tap.",
            solution:
              "Maintained warm container pools with automated health checks and pre-indexed image similarity in Qdrant, making search results feel near-instant.",
          },
        ],
      },
    ],
  },
  {
    period: "2023 – 2027",
    headline: "Computer Engineering",
    role: "B.Tech (Honours in AI & ML)",
    org: "Vidyalankar Institute of Technology, Mumbai",
    color: "blue",
    bullets: [
      { text: "Specialization in Artificial Intelligence & Machine Learning" },
      { text: "Core subjects: Data Structures, Algorithms, Distributed Systems, Database Systems, Computer Networks, Operating Systems, Software Engineering" },
    ],
  },
];

// ─── Featured Work ──────────────────────────────────────────────
export const featuredWork: WorkProject = {
  title: "Troupe",
  headline: "Travel Planning and Booking Platform",
  subtitle: "A mobile community app where trip organizers publish curated itineraries and travelers discover, reserve, pay, and chat in real time.",
  highlights: [
    { text: "Seamless checkout and payments with instant verification via Razorpay and automated webhooks", icon: "razorpay" },
    { text: "Smart seat-holding countdown: locks spot during checkout and automatically releases unpaid seats via cron cleanup", icon: "postgres" },
    { text: "Live group chat with active member status and instant delivery powered by WebSockets and Redis", icon: "redis" },
    { text: "Direct, secure photo and itinerary uploads via Supabase Storage using signed, time-limited URLs", icon: "supabase" },
    { text: "Safe login and persistent sessions with protected JSON Web Tokens (JWT)", icon: "jwt" },
    { text: "High-performance backend API services built with Python FastAPI", icon: "fastapi" },
  ],
  images: ["/troupe_app_1.jpeg"],
  githubUrl: "https://github.com/Sohamm24/Troupe-Backend/tree/main",
  demoUrl: "https://github.com/Sohamm24",
  challenges: [
    {
      problem:
        "Duplicate payment webhook notifications from payment gateways could mistakenly trigger duplicate booking confirmations.",
      solution:
        "Generated unique idempotency keys per checkout session so payment notifications are processed exactly once, safely ignoring duplicates.",
    },
    {
      problem:
        "Abandoned checkout sessions kept seats locked, preventing other interested travelers from booking limited spots.",
      solution:
        "Engineered an automated background cleanup timer that safely releases unpaid seats back into the available pool after a brief grace window.",
    },
    {
      problem:
        "Users' online/offline statuses in chat drifted when mobile devices briefly lost cell connection or switched Wi-Fi.",
      solution:
        "Connected presence indicators to lightweight heartbeat pings with Redis auto-expiry, ensuring active indicators stay accurate.",
    },
  ],
};

export const additionalProjects: WorkProject[] = [
  {
    title: "CreatorIQ",
    headline: "AI-Powered YouTube Trend Intelligence",
    subtitle: "An intelligent platform that discovers breakout topics, evaluates channel relevance, predicts trend growth, and drafts video strategies.",
    highlights: [
      { text: "Automated YouTube signals discovery: continuously tracks video metrics, search patterns, and viral momentum", icon: "youtube" },
      { text: "Smart semantic matching: connects trending topics to creator niches using Qdrant vector search", icon: "qdrant" },
      { text: "90-day trend forecasting powered by LightGBM machine learning models using 85 engineered signals", icon: "lightgbm" },
      { text: "AI copilot: automatically generates viral hooks, video titles, complete outlines, and SEO tags with live streaming responses", icon: "openrouter" },
      { text: "Microservices architecture with FastAPI: dedicated services for authentication, channel intelligence, and scheduled trend tracking", icon: "fastapi" },
      { text: "Containerized deployment with Docker for reliable scaling and seamless updates", icon: "docker" },
    ],
    images: [],
    githubUrl: "https://github.com/Sohamm24/CreatorIQ",
    demoUrl: "https://github.com/Sohamm24",
    challenges: [
      {
        problem:
          "YouTube produces immense volumes of repetitive, low-value noise and irrelevant viral shorts that dilute genuine creator opportunities.",
        solution:
          "Built a multi-stage filtering pipeline combining semantic embeddings and engagement thresholds to isolate high-potential, niche-relevant topics.",
      },
      {
        problem:
          "Generating comprehensive video ideas, scripts, and SEO outlines takes several seconds, making users feel the app is stuck.",
        solution:
          "Implemented Server-Sent Events (SSE) to stream the AI thought process and suggestions word-by-word in real time.",
      },
    ],
  },
  {
    title: "Real-Time Orders Streaming Pipeline",
    headline: "Kafka Streaming Lakehouse & Live Analytics",
    subtitle: "A real-time data engineering pipeline that ingests simulated UPI e-commerce transactions, handles unreliable data, and delivers instant revenue insights across Indian cities.",
    highlights: [
      { text: "Live transaction streaming at high throughput using Apache Kafka partitions keyed by city", icon: "kafka" },
      { text: "Real-time stream processing with PySpark Structured Streaming for instant aggregation and late-arrival handling", icon: "spark" },
      { text: "Reliable transactional data storage in Delta Lake tables with zero duplicates and acid guarantees", icon: "deltalake" },
      { text: "Instant revenue analytics across Indian cities querying millions of records with DuckDB", icon: "postgres" }
    ],
    images: [],
    githubUrl: "https://github.com/Sohamm24/realtime-data-streaming-using-kafka",
    demoUrl: "https://github.com/Sohamm24",
    challenges: [
      {
        problem:
          "Corrupted payment entries, network delays, or duplicate network packets could miscalculate store revenues.",
        solution:
          "Added strict watermark windows to process late orders, built automatic deduplication, and routed malformed records to an isolated dead-letter queue for inspection.",
      },
      {
        problem:
          "Sudden traffic surges (tested from 10 to 5,000 events/sec) or pipeline restarts could lead to dropped data or duplicate counting.",
        solution:
          "Used checkpointing and Delta Lake's transaction logs to ensure exact once-processing and zero data loss even across system restarts.",
      },
    ],
  },
];

// ─── Blog Posts ─────────────────────────────────────────────────
export const blogPosts: BlogPost[] = [
  {
    title: "How to Combine Optuna and K-Fold Cross-Validation",
    date: "Medium",
    tag: "AI / ML",
    url: "https://medium.com/@sohamnarvankar24/how-to-combine-optuna-and-k-fold-cross-validation-4db69da5fe95",
    banner: "/optuna-post.png",
    description: "A practical guide to implementing Bayesian hyperparameter optimization across K-Fold cross-validation splits for robust model evaluation.",
    readTime: "4 min read",
  },
  {
    title: "Decoding OpenAI's CLIP: The Trade-Offs of Speed, Scale, and Efficiency",
    date: "Medium",
    tag: "AI / ML",
    url: "https://medium.com/@sohamnarvankar24/decoding-openais-clip-the-trade-offs-of-speed-scale-and-efficiency-adc74fa4fb75",
    banner: "/clip-post.png",
    description: "An architectural exploration of contrastive multimodal learning, joint embedding spaces, and the practical trade-offs in scaling vision-language models.",
    readTime: "5 min read",
  },
];