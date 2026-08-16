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
  role: string;
  org: string;
  color: 'blue' | 'teal' | 'orange';
  bullets?: { text: string; icon?: string }[];
  challenges?: Challenge[];
  projects?: ProjectGroup[];
}

export interface WorkProject {
  title: string;
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
    role: "B.Tech in Computer Engineering",
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

// ─── Blog Posts ─────────────────────────────────────────────────
export const blogPosts: BlogPost[] = [
  {
    title: "Why idempotency keys matter in payment systems",
    date: "Jul 2025",
    tag: "Backend",
    url: "https://x.com/",
  },
  {
    title: "Building real-time chat at scale with Redis & WebSockets",
    date: "Jun 2025",
    tag: "System Design",
    url: "https://x.com/",
  },
  {
    title: "Monorepos with Turborepo — what I learnt shipping two products",
    date: "May 2025",
    tag: "DevEx",
    url: "https://x.com/",
  },
  {
    title: "CLIP embeddings + Qdrant: AI recommendations without a PhD",
    date: "Apr 2025",
    tag: "AI/ML",
    url: "https://x.com/",
  },
];