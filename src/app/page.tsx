'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import {
  personalInfo,
  careerTimeline,
  featuredWork,
  additionalProjects,
  blogPosts,
  type Challenge,
} from '../data/portfolioData';

// ── Accent — neon orange, used for the scroll-highlighted borders ──
const ACCENT = '#fe722792';

// ── Tech stack icon map — local public/ assets ──
const PUBLIC_ICON: Record<string, string | null> = {
  react: '/react-icon.png',
  expo: '/vite-icon.png',
  fastapi: '/fastapi-icon.png',
  postgres: '/postgress-icon.png',
  redis: '/redis-icon.png',
  supabase: '/supabase-icon.png',
  turborepo: '/turborepo-icon.png',
  astro: '/astro-icon.png',
  cloudflare: '/cloudflare-icon.png',
  aws: '/aws-icon.png',
  convex: '/convex-icon.png',
  figma: '/figma-icon.png',
  vercel: '/vercel-icon.png',
  shopify: '/shopify-icon.png',
  jwt: '/jwt-icon.png',
  postman: '/postman-icon.png',
  docker: '/docker-icon.png',
  qdrant: '/qdrant-icon.png',
  github: '/githib-icon.png',
  tailwind: '/tailwind-icon.png',
  razorpay: '/Razorpay.png',
  kafka: '/kafka-icon.png',
  spark: '/spark-icon.png',
  deltalake: '/deltalake-icon.png',
  'delta-lake': '/deltalake-icon.png',
  lightgbm: '/lightgbm-icon.png',
  youtube: '/youtube-icon.png',
  openrouter: '/OpenRouter.png',
  webhook: null,
  hono: null,
  clerk: null,
};

const ICON_FALLBACK: Record<string, string> = {
  webhook: '⚡',
  hono: '🔥',
  clerk: '🔐',
  duckdb: '🦆',
  python: '🐍',
};

const ICON_LABELS: Record<string, string> = {
  react: 'React',
  expo: 'Expo / Mobile',
  fastapi: 'FastAPI',
  postgres: 'PostgreSQL',
  redis: 'Redis',
  supabase: 'Supabase',
  turborepo: 'Turborepo',
  astro: 'Astro',
  cloudflare: 'Cloudflare',
  aws: 'AWS Cloud',
  convex: 'Convex',
  figma: 'Figma',
  vercel: 'Vercel',
  shopify: 'Shopify',
  jwt: 'JWT Security',
  postman: 'Postman',
  docker: 'Docker',
  qdrant: 'Qdrant Vector DB',
  github: 'GitHub',
  tailwind: 'Tailwind CSS',
  razorpay: 'Razorpay',
  kafka: 'Apache Kafka',
  spark: 'Apache Spark',
  deltalake: 'Delta Lake',
  'delta-lake': 'Delta Lake',
  lightgbm: 'LightGBM ML',
  youtube: 'YouTube API',
  openrouter: 'OpenRouter AI',
  webhook: 'Webhooks',
  hono: 'Hono API',
  clerk: 'Clerk Auth',
};

function resolveIcon(icon?: string): { src: string | null; fallback: string | null; label: string | null } {
  if (!icon) return { src: null, fallback: null, label: null };
  const k = icon.toLowerCase();
  const src = PUBLIC_ICON[k] ?? null;
  const fallback = ICON_FALLBACK[k] ?? null;
  const label = ICON_LABELS[k] ?? (icon.charAt(0).toUpperCase() + icon.slice(1));
  return { src, fallback, label };
}

// ── Card bullet — matches the "bracket card" reference design:
//    rounded top-left corner, icon + label header row, description below. ──
function CardBullet({ text, icon }: { text: string; icon?: string }) {
  const { src, fallback, label } = resolveIcon(icon);

  return (
    <div className="relative rounded-tl-2xl border-t border-l border-zinc-700/70 pl-4 pt-4 pb-3 pr-3 hover:border-zinc-500 transition-colors duration-300">
      <div className="flex items-center gap-2 mb-2.5">
        <span className="w-7 h-7 rounded-full bg-[#0a0a0a] border border-zinc-800 flex items-center justify-center flex-shrink-0">
          {src ? (
            <Image src={src} alt={label || ''} width={15} height={15} className="object-contain" unoptimized />
          ) : fallback ? (
            <span className="text-[11px] leading-none text-zinc-300">{fallback}</span>
          ) : (
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 inline-block" />
          )}
        </span>
        {label && (
          <span className="text-[11px] font-semibold text-zinc-200 tracking-[0.05em] uppercase">
            {label}
          </span>
        )}
      </div>
      <p className="text-[12px] text-zinc-400 leading-[1.65]">{text}</p>
    </div>
  );
}

// ── Grid of card bullets — used for work / internship / project highlights ──
function BulletCardGrid({ bullets }: { bullets?: { text: string; icon?: string }[] }) {
  if (!bullets || bullets.length === 0) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
      {bullets.map((b, i) => (
        <CardBullet key={i} text={b.text} icon={b.icon} />
      ))}
    </div>
  );
}

// ── Education bullet list — plain bulleted list inside a bordered box,
//    kept visually distinct from the work/internship card grid. ──
function EducationBulletList({ bullets }: { bullets?: { text: string; icon?: string }[] }) {
  if (!bullets || bullets.length === 0) return null;
  return (
    <ul className="border border-zinc-800 rounded-lg px-4 py-3.5 space-y-2 bg-[#070707]">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-2.5 text-[12px] text-zinc-300 leading-[1.6]">
          <span className="mt-[7px] w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0" />
          <span>{b.text}</span>
        </li>
      ))}
    </ul>
  );
}

// ── Decide whether a timeline entry is an education entry.
//    Prefer an explicit `isEducation` flag on the item if you add one to
//    portfolioData.ts; otherwise falls back to matching common degree/school
//    keywords in the role or org fields. ──
function isEducationEntry(item: { role?: string; org?: string; isEducation?: boolean }) {
  if (item.isEducation) return true;
  const haystack = `${item.role ?? ''} ${item.org ?? ''}`.toLowerCase();
  return /engineering|b\.?tech|b\.?e\.?\b|university|college|bachelor|degree|computer science/.test(
    haystack
  );
}

// ── Tech tag pill — uses local public/ icons ──
function TechTag({ name, icon }: { name: string; icon?: string }) {
  const { src, fallback } = resolveIcon(icon);
  return (
    <span className="inline-flex items-center gap-[5px] text-[10px] text-zinc-500 border border-zinc-800 rounded px-[7px] py-[3px] leading-none">
      {src ? (
        <Image src={src} alt={name} width={11} height={11} className="object-contain" unoptimized />
      ) : fallback ? (
        <span className="text-[9px] leading-none">{fallback}</span>
      ) : null}
      {name}
    </span>
  );
}

// ── Live clock ──
function Clock() {
  const [time, setTime] = useState('--:--:--');
  const [date, setDate] = useState('—');

  useEffect(() => {
    function tick() {
      const n = new Date();
      const p = (v: number) => String(v).padStart(2, '0');
      setTime(`${p(n.getHours())}:${p(n.getMinutes())}:${p(n.getSeconds())}`);
      setDate(
        n.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        })
      );
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-between gap-4 font-mono text-[11px] text-zinc-700 border-t border-zinc-800 bg-[#050505] px-4 py-3">
      <div className="flex items-center gap-3 text-zinc-300">
        <span className="flex items-center gap-2 text-[#dfe4ea]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#52d274] shadow-[0_0_8px_rgba(82,210,116,0.8)]" />
          <span className="text-zinc-400">Live</span>
        </span>
        <span className="text-zinc-500">{time}</span>
        <span className="text-zinc-700">|</span>
        <span className="text-zinc-500">{date}</span>
      </div>
      <span className="text-[12px] text-[#ffb06b]">&lt;/&gt;</span>
    </div>
  );
}

// ── Section header ──
function SectionHeader({ title, active }: { title: string; active: boolean }) {
  return (
    <div className="flex items-center gap-3.5 mb-6 pt-8">
      <span className="text-[12px] text-zinc-400 tracking-[0.06em] font-medium">{title}</span>
      <div
        className="flex-1 h-px transition-colors duration-700 ease-out"
        style={{ backgroundColor: active ? ACCENT : 'rgb(24 24 27)' }}
      />
    </div>
  );
}

// ── Square grid banner spanning the very top of the page, with the name overlaid ──
function GridBanner({ name }: { name: string }) {
  return (
    <div className="relative w-full h-52 md:h-64 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.078) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.078) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />
      {/* radial glow so the grid doesn't feel flat */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255, 89, 0, 0.26), transparent 70%)',
        }}
      />
      {/* fade to the page background at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
    </div>
  );
}

// ── Chevron icon ──
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform duration-300 flex-shrink-0 ${open ? 'rotate-90' : ''
        }`}
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Challenges & solutions — dark gray card theme ──
function ChallengesDropdown({ challenges }: { challenges?: Challenge[] }) {
  const [open, setOpen] = useState(false);

  if (!challenges || challenges.length === 0) return null;

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center gap-1.5 text-[11px] text-zinc-300 hover:text-[#ff8a5c] transition-colors"
        style={{ color: open ? ACCENT : undefined }}
      >
        <Chevron open={open} />
        Challenges &amp; how I solved them
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
          }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-3">
            {challenges.map((c, i) => (
              <li
                key={i}
                className="rounded-lg border border-zinc-700/50 bg-[#1a1a1a] px-4 py-3 text-[11.5px] leading-[1.65]"
              >
                <p className="mb-1.5">
                  <span className="font-semibold" style={{ color: '#ff9580' }}>
                    Challenge —{' '}
                  </span>
                  <span className="text-zinc-300">{c.problem}</span>
                </p>
                <p>
                  <span className="font-semibold" style={{ color: '#7ec88a' }}>
                    Solution —{' '}
                  </span>
                  <span className="text-zinc-300">{c.solution}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ── Tracks which section is currently in view ──
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')]);

  return active;
}

// ── Scroll-reveal: vertical line + per-item fade-up ──
function useTimelineVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { rootMargin: '-10% 0px -10% 0px', threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// ── Per-item vertical slide-up on scroll ──
function useItemVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// ── Single animated journey item ──
function TimelineItem({
  item,
  isLast,
  delay,
}: {
  item: (typeof import('../data/portfolioData').careerTimeline)[number];
  isLast: boolean;
  delay: number;
}) {
  const { ref, visible } = useItemVisible();
  const education = isEducationEntry(item);

  return (
    <div
      ref={ref}
      className={`relative ${!isLast ? 'pb-10' : 'pb-4'}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 600ms ease-out ${delay}ms, transform 600ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {/* Dot — centered on line via margin-left, no translateX */}
      <span
        className="absolute top-[5px] w-2.5 h-2.5 rounded-full border-2 flex-shrink-0"
        style={{
          borderColor: ACCENT,
          backgroundColor: '#000',
          left: 'calc(-1.5rem - 5px)',
        }}
      />

      <div className="text-[11px] text-zinc-300 mb-1 leading-[1.5]">{item.period}</div>
      <p className="text-[28px] md:text-[34px] font-bold tracking-[-0.04em] leading-[1.02] text-[#ff8a5c] mb-2">
        {item.headline}
      </p>
      <p className="text-[15px] text-zinc-100 mb-0.5 tracking-[-0.01em] font-medium">{item.role}</p>
      <p className="text-[12px] text-zinc-300 mb-3">{item.org}</p>

      {item.bullets && (
        <div className="mb-3">
          {education ? (
            <EducationBulletList bullets={item.bullets} />
          ) : (
            <BulletCardGrid bullets={item.bullets} />
          )}
        </div>
      )}

      <ChallengesDropdown challenges={item.challenges} />

      {item.projects?.map((proj, pi) => (
        <div key={pi} className="mt-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[12px] text-zinc-300 font-medium">{proj.type}</span>
          </div>
          <BulletCardGrid bullets={proj.bullets} />
          <ChallengesDropdown challenges={proj.challenges} />
        </div>
      ))}
    </div>
  );
}

// ── Core Interests & Behaviour ──
const INTERESTS = [
  {
    icon: '/stitch.png',
    title: 'Google Stitch',
    body: "Generative UI Design that works as per my thoughts",
  },
  {
    icon: '/claude.png',
    title: 'Claude Code',
    body: "Coding Fast MVP Prototypes and broilerplate code",
  },
  {
    icon: '/atlassian.png',
    title: 'Atlassian Jira & Confluent',
    body: "Streamlining Project Managemen with Jira and Confluent workflows with detailed tracking",
  },
  {
    icon: '/shopify.png',
    title: 'Shopify',
    body: "Managing E-commerce shops with real-time updates",
  },
];

function InterestsSection({ active }: { active: boolean }) {
  return (
    <section id="interests" className="mt-20 md:mt-28">
      <SectionHeader title="more about me" active={active} />
      <p className="text-[13px] text-zinc-300 mb-8 leading-[1.7]">
        Tools which keep me relevant in 2026
      </p>
      <div className="flex flex-col gap-6">
        {INTERESTS.map((item, i) => (
          <div
            key={i}
            className="relative rounded-tl-2xl border-t border-l border-zinc-700/70 pl-6 pt-5 pb-5 pr-5 hover:border-zinc-500 transition-colors duration-300 flex flex-col md:flex-row md:items-center gap-5"
          >
            {item.icon && (
              <div className="w-[140px] h-16 flex items-center justify-start flex-shrink-0">
                <Image src={item.icon} alt={item.title} width={140} height={64} className={`object-contain object-left ${item.icon === '/stitch.png' ? 'rounded-3xl' : ''}`} unoptimized />
              </div>
            )}
            <p className="text-[13px] text-zinc-200 font-normal leading-[1.6] m-0">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Main page ──
export default function Portfolio() {
  const year = new Date().getFullYear();

  const sectionIds = useMemo(() => ['intro', 'journey', 'work', 'writing', 'interests'], []);
  const activeSection = useActiveSection(sectionIds);
  const { ref: timelineRef } = useTimelineVisible();

  const borderStyle = (id: string) => {
    const isActive = activeSection === id;
    return {
      borderColor: isActive ? ACCENT : 'rgb(24 24 27)',
      boxShadow: isActive
        ? `0 0 0 1px ${ACCENT}55, 0 0 18px 2px ${ACCENT}66, 0 0 40px 6px ${ACCENT}33`
        : '0 0 0 0 transparent',
    };
  };

  return (
    <div className="bg-[#000000] text-zinc-500 font-sans min-h-screen pb-16">
      {/* ── Square grid banner ── */}
      <GridBanner name={personalInfo.name} />

      <div className="max-w-[860px] mx-auto px-6 md:px-12">
        {/* ── Hero / Introduction ── */}
        <section id="intro" className="pt-2 pb-12">
          <h1 className="text-[40px] font-light text-zinc-50 tracking-[-0.04em] leading-[1.08] mb-1.5">
            Soham Narvankar.<br />
            <em className="not-italic italic text-zinc-500 font-light">Simple and Relevant.</em>
          </h1>
          <p className="text-[18px] text-zinc-600 leading-[1.7] mb-8 max-w-[380px]">
            {personalInfo.location}.
          </p>
          <div className="flex gap-[18px] items-center flex-wrap">
            {[
              { label: 'LinkedIn', href: personalInfo.linkedin },
              { label: 'GitHub', href: personalInfo.github },
              { label: 'Twitter', href: personalInfo.twitter },
              { label: personalInfo.email, href: `mailto:${personalInfo.email}` },
            ].map(({ label, href }, i, arr) => (
              <React.Fragment key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-[12px] text-zinc-500 no-underline border-b border-zinc-700 pb-px hover:text-zinc-200 hover:border-zinc-500 transition-colors"
                >
                  {label}
                </a>
                {i < arr.length - 1 && (
                  <span className="text-zinc-800 text-[11px]">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* ── Code block ── */}
        <div className="pb-11">
          <div className="overflow-hidden rounded-[12px] border border-zinc-800 bg-[#000000] shadow-[0_0_0_1px_rgba(24,32,46,0.8)]">
            <div className="flex items-center justify-between border-b border-zinc-800 bg-[#090909] px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="block w-2.5 h-2.5 rounded-full bg-[#f87171]" />
                  <span className="block w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
                  <span className="block w-2.5 h-2.5 rounded-full bg-[#4ade80]" />
                </div>
                <span className="font-mono text-[11px] tracking-[0.08em] text-zinc-400">soham.tsx</span>
              </div>
            </div>

            <div className="font-mono text-[12px] md:text-[13px] leading-[1.6] px-[18px] py-5 bg-[#000000]">
              {[
                { n: 1, content: <><span className="text-zinc-500">const </span><span className="text-zinc-300">developer</span><span className="text-zinc-500"> = {'{'}</span></> },
                { n: 2, content: <><span className="w-16 inline-block text-[#7db3ff]">&nbsp;&nbsp;mission:</span><span style={{ color: '#ff8b5c' }}> "{personalInfo.headlineLine1}"</span>,</> },
                { n: 3, content: <><span className="w-16 inline-block text-[#7db3ff]">&nbsp;&nbsp;craft:</span><span style={{ color: '#ff8b5c' }}> "{personalInfo.headlineLine2}"</span>,</> },
                { n: 4, content: <><span className="w-16 inline-block text-[#7db3ff]">&nbsp;&nbsp;output:</span><span style={{ color: '#ff8b5c' }}> "{personalInfo.headlineLine3}"</span></> },
                { n: 5, content: <span className="text-zinc-500">{' }'}</span> },
              ].map(({ n, content }) => (
                <div key={n} className="flex items-baseline gap-2">
                  <span className="w-[22px] flex-shrink-0 text-zinc-600 select-none text-right">{n}</span>
                  <span>{content}</span>
                </div>
              ))}
            </div>
            <Clock />
          </div>
        </div>

        {/* ── Journey — vertical timeline ── */}
        <section id="journey" className="mt-20 md:mt-28">

          <div className="mb-5">
            <span className="text-[12px] text-zinc-400 tracking-[0.06em] font-medium">journey</span>
          </div>

          {/* Scroll-reveal vertical timeline */}
          <div ref={timelineRef} className="relative">
            {/* Vertical line — scaleY from top, no horizontal movement */}
            <div
              className="absolute left-0 top-0 bottom-0 w-px origin-top"
              style={{
                background: `linear-gradient(to bottom, ${ACCENT}cc, ${ACCENT}33)`,
                opacity: 1,
                transform: 'scaleY(1)',
                transition: 'none',
              }}
            />

            <div className="ml-6">
              {careerTimeline.map((item, idx) => (
                <TimelineItem
                  key={idx}
                  item={item}
                  isLast={idx === careerTimeline.length - 1}
                  delay={idx * 120}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Work ── */}
        <section
          id="work"
          className="mt-20 md:mt-28 transition-[border-color,box-shadow] duration-700 ease-out"
          style={{}}
        >
          <SectionHeader title="work" active={activeSection === 'work'} />

          <div className="space-y-10 p-0">
            <div className="border border-zinc-900 rounded-[10px] p-[28px] min-h-[240px]">
              <h2 className="text-[24px] text-zinc-50 font-light tracking-[-0.03em] mb-1">
                {featuredWork.title}
              </h2>
              <p className="text-[28px] md:text-[34px] font-bold tracking-[-0.04em] leading-[1.02] text-[#ff8a5c] mb-3">
                {featuredWork.headline}
              </p>
              <p className="text-[12px] text-zinc-300 mb-4">{featuredWork.subtitle}</p>

              <div className="mb-5">
                <BulletCardGrid bullets={featuredWork.highlights} />
              </div>

              <div className="mb-5">
                <ChallengesDropdown challenges={featuredWork.challenges} />
              </div>

              {featuredWork.githubUrl && (
                <div className="flex gap-2">
                  <a
                    href={featuredWork.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] text-zinc-400 bg-transparent border border-zinc-800 rounded-md px-4 py-[7px] no-underline hover:border-zinc-600 hover:text-zinc-300 transition-colors tracking-[0.02em]"
                  >
                    GitHub
                  </a>
                </div>
              )}
            </div>

            {additionalProjects.map((project, idx) => (
              <div key={idx} className="border border-zinc-900 rounded-[10px] p-[28px] min-h-[230px]">
                <h3 className="text-[22px] text-zinc-50 font-light tracking-[-0.03em] mb-1">
                  {project.title}
                </h3>
                <p className="text-[28px] md:text-[34px] font-bold tracking-[-0.04em] leading-[1.08] text-[#ff8a5c] mb-2">
                  {project.headline}
                </p>
                <p className="text-[12px] text-zinc-300 mb-4">{project.subtitle}</p>

                <div className="mb-5">
                  <BulletCardGrid bullets={project.highlights} />
                </div>

                <div className="mb-5">
                  <ChallengesDropdown challenges={project.challenges} />
                </div>

                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] text-zinc-400 bg-transparent border border-zinc-800 rounded-md px-4 py-[7px] no-underline hover:border-zinc-600 hover:text-zinc-300 transition-colors tracking-[0.02em]"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Writing ── */}
        <section
          id="writing"
          className="mt-20 md:mt-28 transition-[border-color,box-shadow] duration-700 ease-out"
        >
          <SectionHeader title="top writing" active={activeSection === 'writing'} />

          <p className="text-[28px] md:text-[34px] font-bold tracking-[-0.04em] leading-[1.08] text-[#ff8a5c] mb-6">
            Blogs related to my Specialization in AI/ML
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {blogPosts.map((post, idx) => (
              <a
                key={idx}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-800/80 bg-[#090909] hover:border-zinc-600 transition-all duration-300 no-underline"
              >
                {/* Banner image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/70">
                  <Image
                    src={post.banner}
                    alt={post.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                </div>

                {/* Content body */}
                <div className="p-5 flex flex-col flex-1 justify-between gap-3 bg-[#0a0a0a]">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-zinc-300 bg-zinc-900 border border-zinc-700/80 rounded px-2 py-0.5">
                        {post.tag}
                      </span>
                      <span className="text-[11px] text-zinc-500 font-mono flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff8a5c]" />
                        {post.readTime ? `${post.readTime}` : post.date}
                      </span>
                    </div>

                    <h3 className="text-[15px] font-semibold text-zinc-100 group-hover:text-[#ff8a5c] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    {post.description && (
                      <p className="text-[12px] text-zinc-400 leading-[1.65]">
                        {post.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    <span className="font-medium">Read on Medium</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Core Interests & Behaviour ── */}
        <InterestsSection active={activeSection === 'interests'} />

        {/* ── Footer ── */}
        <footer className="flex justify-between items-center pt-9">
          <span className="text-[11px] text-zinc-700 tracking-[0.06em]">soham.narvankar</span>
          <div className="flex gap-[18px]">
            {[
              { label: 'LinkedIn', href: personalInfo.linkedin },
              { label: 'GitHub', href: personalInfo.github },
              { label: 'Email', href: `mailto:${personalInfo.email}` },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-[11px] text-zinc-700 no-underline hover:text-zinc-400 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <span className="text-[11px] text-zinc-700">{year}</span>
        </footer>
      </div>
    </div>
  );
}