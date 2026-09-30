export interface TechItem {
  name: string;
  icon?: string;
}

export interface Challenge {
  problem: string;
  solution: string;
}

export interface ProjectGroup {
  name: string;
  type: string;
  techStack: TechItem[];
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
  description: string;
  highlights: { text: string; icon?: string }[];
  techStack: TechItem[];
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
    period: "2025 – 2026",
    headline: "1+ Years of Startup Experience",
    role: "Full Stack Developer Intern",
    org: "Krityam Solutions and Services",
    color: "orange",
    projects: [
      {
        name: "Real Estate Platform",
        type: "Web Development",
        techStack: [
          { name: "Turborepo", icon: "turborepo" },
          { name: "Clerk", icon: "clerk" },
          { name: "Convex", icon: "convex" },
          { name: "Astro", icon: "astro" },
          { name: "React", icon: "react" },
        ],
        bullets: [
          { text: "Faster dev cycles via monorepo architecture using Turborepo", icon: "turborepo" },
          { text: "Astro Framework for content driven and SEO friendly websites", icon: "astro" },
        ],
        challenges: [
          {
            problem:
              "Shared UI and types drifted out of sync across the builder and landowner apps as the monorepo grew.",
            solution:
              "Introduced a shared internal package with Turborepo's build cache and pipeline scoping, so changes propagate to every app on the next build without manual copying.",
          },
          {
            problem:
              "Convex's real-time subscriptions caused unnecessary re-renders on large landowner dashboards.",
            solution:
              "Scoped queries down to the exact fields each view needed and memoized derived state, cutting re-renders significantly.",
          },
        ],
      },
      {
        name: "AI Snack Recommender",
        type: "Mobile App Development",
        techStack: [
          { name: "Cloudflare Workers", icon: "cloudflare" },
          { name: "Hono", icon: "hono" },
          { name: "Hookdeck", icon: "webhook" },
          { name: "Cloudflare R2", icon: "cloudflare" },
          { name: "Qdrant", icon: "qdrant" },
          { name: "AWS", icon: "aws" },
        ],
        bullets: [
          { text: "Serverless APIs with Cloudflare Workers + Hono, reducing cold-start overhead", icon: "cloudflare" },
          { text: "Real-time product sync via Shopify webhooks + Hookdeck — 99% delivery reliability", icon: "shopify" },
          { text: "Media storage via Cloudflare R2 with CDN-backed image delivery", icon: "cloudflare" },
          { text: "AI recommendations using CLIP embeddings + Qdrant vector search", icon: "qdrant" },
          { text: "Production ML inference on AWS serverless containers", icon: "aws" },
        ],
        challenges: [
          {
            problem:
              "Webhook bursts from upstream product feeds occasionally arrived out of order, corrupting inventory state.",
            solution:
              "Added Hookdeck-backed queuing with per-product ordering keys and idempotent upserts, restoring consistent state under load.",
          },
          {
            problem:
              "Cold-start latency on the AWS inference containers made recommendations feel sluggish on first request.",
            solution:
              "Kept a small warm pool alive with scheduled pings and moved embedding lookups to Qdrant so only the final ranking hit the container.",
          },
        ],
      },
    ],
  },
  {
    period: "2023 – 2027",
    headline: "Computer Engineering",
    role: "B.Tech ( Honours in AI & ML )",
    org: "Vidyalankar Institute of Technology",
    color: "blue",
    bullets: [
      { text: "Specialization in Artificial Intelligence & Machine Learning" },
      { text: "Core subjects: Java, DBMS, Networks, OS, Algorithms, Distributed Systems, Software Engineering" },
    ],
  },
];

// ─── Featured Work ──────────────────────────────────────────────
export const featuredWork: WorkProject = {
  title: "Troupe",
  headline: "My Whole Development Journey in One Project",
  subtitle: "Mobile App where Trip Organizers plan Itineraries for Like-minded Travelers",
  description:
    "Built a secure payment system by integrating Razorpay SDK in-app with Webhook event handling and idempotency keys to prevent duplicate payments. Implemented seat-holding mechanism with cron jobs to clean up expired bookings. Real-time chat using WebSockets, Redis presence indicators and message queues for scalable processing. Optimized media uploads via server-generated presigned URLs. Seamless token-refresh authentication.",
  highlights: [
    { text: "Razorpay SDK + webhook handling & idempotency keys", icon: "razorpay" },
    { text: "Seat-holding with cron-job cleanup for expired bookings", icon: "postgres" },
    { text: "Real-time chat — WebSockets, Redis presence & queues", icon: "redis" },
    { text: "Presigned URL media uploads via Supabase Storage — reduced server load", icon: "supabase" },
    { text: "Secure token-refresh auth flow with JWT", icon: "jwt" },
  ],
  techStack: [
    { name: "React Native", icon: "react" },
    { name: "Expo", icon: "expo" },
    { name: "FastAPI", icon: "fastapi" },
    { name: "PostgreSQL", icon: "postgres" },
    { name: "Redis", icon: "redis" },
    { name: "Supabase", icon: "supabase" },
  ],
  images: ["/troupe_app_1.jpeg"],
  githubUrl: "https://github.com/Sohamm24",
  demoUrl: "https://github.com/Sohamm24",
  systemDesignUrl: "https://github.com/Sohamm24",
  challenges: [
    {
      problem:
        "Duplicate Razorpay webhook deliveries occasionally double-booked a seat before the payment record was finalized.",
      solution:
        "Generated idempotency keys per checkout session and made the booking write a single atomic upsert keyed on that ID, so retried webhooks became safe no-ops.",
    },
    {
      problem:
        "Held seats that were never paid for stayed locked and blocked other travelers from booking.",
      solution:
        "Added a cron job that sweeps expired holds on an interval and releases them back to the pool, with a short grace window to avoid racing an in-flight payment.",
    },
    {
      problem:
        "Redis-backed presence indicators drifted from real WebSocket connection state after reconnects.",
      solution:
        "Tied presence TTLs to heartbeat pings from the client and reconciled state on every reconnect, so stale 'online' indicators expire automatically.",
    },
  ],
};

export const additionalProjects: WorkProject[] = [
  {
    title: "TrustDesk AI",
    headline: "Customer support AI agents with zero trust security",
    subtitle: "A working prototype for AI-first customer workflows with strict identity controls and secure escalation paths.",
    description:
      "Dummy placeholder project for a customer support intelligence platform where AI agents handle triage, summarization, and policy-aware responses without compromising security boundaries.",
    highlights: [
      { text: "AI customer triage with human fallback and policy enforcement", icon: "jwt" },
      { text: "Zero-trust access checks for tool invocation and sensitive data", icon: "clerk" },
      { text: "Audit logs, session isolation, and controlled escalation for support agents", icon: "docker" },
    ],
    techStack: [
      { name: "FastAPI", icon: "fastapi" },
      { name: "React", icon: "react" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "JWT", icon: "jwt" },
      { name: "Docker", icon: "docker" },
    ],
    images: [],
    githubUrl: "https://github.com/",
    demoUrl: "https://github.com/",
    systemDesignUrl: "https://github.com/",
    challenges: [
      {
        problem: "Support automation risked leaking internal context to the wrong agent or workflow.",
        solution: "Introduced role-aware guardrails and zero-trust enforcement before any tool or data access was allowed.",
      },
      {
        problem: "Escalations in live support needed to remain transparent without exposing sensitive records.",
        solution: "Built a reviewed handoff layer with scoped context and full audit trails for every decision.",
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