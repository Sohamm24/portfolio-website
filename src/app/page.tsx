'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import {
  personalInfo,
  careerTimeline,
  featuredWork,
  blogPosts,
  type Challenge,
} from '../data/portfolioData';

// ── Accent — neon orange, used for the scroll-highlighted borders ──
const ACCENT = '#ff6a1a';

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
  webhook: null,
  hono: null,
  clerk: null,
};

const ICON_FALLBACK: Record<string, string> = {
  webhook: '⚡',
  hono: '🔥',
  clerk: '🔐',
  qdrant: '◈',
};

function resolveIcon(icon?: string): { src: string | null; fallback: string | null } {
  if (!icon) return { src: null, fallback: null };
  const k = icon.toLowerCase();
  const src = PUBLIC_ICON[k] ?? null;
  const fallback = ICON_FALLBACK[k] ?? null;
  return { src, fallback };
}

// ── Bullet row: icon (larger) + optional tech name label + bullet text. No outer box. ──
function BulletRow({ text, icon }: { text: string; icon?: string }) {
  const { src, fallback } = resolveIcon(icon);
  // derive a short label from the icon key (e.g. "razorpay" → "Razorpay")
  const label = icon ? icon.charAt(0).toUpperCase() + icon.slice(1) : null;

  return (
    <li className="flex items-start gap-3 py-1.5">
      {/* Icon container — fixed width so text aligns */}
      <span className="flex-shrink-0 flex items-center gap-1.5 w-[90px]">
        <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
          {src ? (
            <Image src={src} alt={label || ''} width={20} height={20} className="object-contain" unoptimized />
          ) : fallback ? (
            <span className="text-[11px] leading-none text-zinc-400">{fallback}</span>
          ) : (
            // white dot fallback when no icon
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 inline-block" />
          )}
        </span>
        {label && src ? (
          <span className="text-[10px] text-zinc-600 leading-none truncate">{label}</span>
        ) : null}
      </span>
      <span className="text-[12px] text-zinc-400 leading-[1.6]">{text}</span>
    </li>
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
    <div className="flex gap-4 font-mono text-[11px] text-zinc-700 mt-3 pt-3 border-t border-zinc-900">
      <span className="text-zinc-600">{time}</span>
      <span>{date}</span>
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

      {/* name, top-left */}
      <div className="absolute top-0 left-0 max-w-[860px] w-full mx-auto right-0">
        <span className="block px-6 md:px-12 py-[26px] text-[13px] font-medium text-zinc-50 tracking-[-0.01em]">
          {name}
        </span>
      </div>
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
        className="flex items-center gap-1.5 text-[11px] text-zinc-500 hover:text-[#ff8a5c] transition-colors"
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
                  <span className="text-zinc-400">{c.problem}</span>
                </p>
                <p>
                  <span className="font-semibold" style={{ color: '#7ec88a' }}>
                    Solution —{' '}
                  </span>
                  <span className="text-zinc-400">{c.solution}</span>
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

      <div className="text-[11px] text-zinc-500 mb-0.5 leading-[1.5]">{item.period}</div>
      <p className="text-[15px] text-zinc-100 mb-0.5 tracking-[-0.01em] font-medium">{item.role}</p>
      <p className="text-[12px] text-zinc-500 mb-3">{item.org}</p>

      {item.bullets && (
        <ul className="space-y-0.5 mb-3">
          {item.bullets.map((b, bi) => (
            <BulletRow key={bi} text={b.text} icon={b.icon} />
          ))}
        </ul>
      )}

      <ChallengesDropdown challenges={item.challenges} />

      {item.projects?.map((proj, pi) => (
        <div key={pi} className="mt-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[12px] text-zinc-300 font-medium">{proj.type}</span>
          </div>
          <ul className="space-y-0.5">
            {proj.bullets.map((b, bi) => (
              <BulletRow key={bi} text={b.text} icon={b.icon} />
            ))}
          </ul>
          <ChallengesDropdown challenges={proj.challenges} />
        </div>
      ))}
    </div>
  );
}

// ── Core Interests & Behaviour ──
const INTERESTS = [
  {
    icon: '/figma-icon.png' as string | null,
    title: 'Figma is my playground',
    body: "Before writing a single line of code, I'm already deep in Figma — pushing pixels, crafting flows, and obsessing over spacing. Design isn't a step for me, it's a mindset.",
  },
  {
    icon: '/system-icon.png' as string | null,
    title: 'Applications → System Design',
    body: "The more I built apps, the more I started asking why they work at scale. That curiosity pulled me into system design — rate limiters, queue architectures, caching strategies. It's just applied curiosity.",
  },
  {
    icon: '/pen-icon.png' as string | null,
    title: 'Pen & paper > whiteboard',
    body: "When I'm stuck, I close the laptop and reach for a notebook. There's something about drawing boxes and arrows by hand that unlocks thinking no IDE can replicate. Analog is underrated.",
  },
  {
    icon: '/night-icon.png' as string | null,
    title: '2 AM is the best time to code',
    body: "Night owl engineer, unironically. The city goes quiet, the distractions disappear, and suddenly the cursor is flying. Some of my best work ships between midnight and 3 AM.",
  },
];

function InterestsSection({ active }: { active: boolean }) {
  return (
    <section id="interests" className="mt-20 md:mt-28">
      <SectionHeader title="more about me" active={active} />
      <p className="text-[13px] text-zinc-500 mb-8 leading-[1.7]">
        Beyond the work — how I actually think, build, and operate.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {INTERESTS.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-zinc-800/70 bg-zinc-950 px-5 py-5 flex flex-col gap-3 hover:border-zinc-600 transition-colors duration-300"
          >
            <div className="flex items-center gap-3">
              {item.icon ? (
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image src={item.icon} alt={item.title} width={18} height={18} className="object-contain" unoptimized />
                </div>
              ) : (
                <span className="text-xl leading-none">{(item as { emoji?: string }).emoji}</span>
              )}
              <span className="text-[13px] font-semibold text-zinc-200 tracking-[-0.01em]">
                {item.title}
              </span>
            </div>
            <p className="text-[12px] text-zinc-500 leading-[1.7]">{item.body}</p>
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
  const { ref: timelineRef, visible: timelineVisible } = useTimelineVisible();

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
            Software engineer.<br />
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
          <div className="border border-zinc-900 rounded-[10px] px-[22px] py-5 relative">
            <span className="absolute -top-px left-[18px] bg-[#09090b] px-[7px] text-[10px] text-zinc-600 tracking-[0.08em]">
              soham.tsx
            </span>
            <div className="font-mono text-[11px] space-y-1">
              {[
                { n: 1, content: <><span className="text-zinc-500">const </span><span className="text-zinc-400">developer</span><span className="text-zinc-500"> = {'{'}</span></> },
                { n: 2, content: <><span className="w-16 inline-block text-zinc-600">&nbsp;&nbsp;mission:</span><span style={{ color: '#ff9d80' }}> &quot;{personalInfo.headlineLine1}&quot;</span></> },
                { n: 3, content: <><span className="w-16 inline-block text-zinc-600">&nbsp;&nbsp;craft:</span><span style={{ color: '#ffc978' }}> &quot;{personalInfo.headlineLine2}&quot;</span></> },
                { n: 4, content: <><span className="w-16 inline-block text-zinc-600">&nbsp;&nbsp;output:</span><span style={{ color: '#ff8f5c' }}> &quot;{personalInfo.headlineLine3}&quot;</span></> },
                { n: 5, content: <span className="text-zinc-500">{'}'}</span> },
              ].map(({ n, content }) => (
                <div key={n} className="flex items-baseline">
                  <span className="w-[22px] flex-shrink-0 text-zinc-700 select-none">{n}</span>
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
                transform: timelineVisible ? 'scaleY(1)' : 'scaleY(0)',
                opacity: timelineVisible ? 1 : 0,
                transition: 'transform 900ms cubic-bezier(0.16,1,0.3,1), opacity 900ms ease-out',
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
          className="border-2 rounded-xl px-5 md:px-7 -mx-5 md:-mx-7 mt-20 md:mt-28 transition-[border-color,box-shadow] duration-700 ease-out"
          style={borderStyle('work')}
        >
          <SectionHeader title="work" active={activeSection === 'work'} />

          <div className="border border-zinc-900 rounded-[10px] p-[26px]">
            <span className="inline-block text-[10px] text-zinc-400 border border-zinc-700 rounded px-2 py-[3px] tracking-[0.04em] mb-[18px]">
              featured · mobile app
            </span>
            <h2 className="text-[24px] text-zinc-50 font-light tracking-[-0.03em] mb-1">
              {featuredWork.title}
            </h2>
            <p className="text-[12px] text-zinc-500 mb-4">{featuredWork.subtitle}</p>

            {/* Highlights with icon bullet rows */}
            <ul className="space-y-0.5 mb-5">
              {featuredWork.highlights.map((h, i) => (
                <BulletRow key={i} text={h.text} icon={h.icon} />
              ))}
            </ul>

            <div className="mb-5">
              <ChallengesDropdown challenges={featuredWork.challenges} />
            </div>

            <div className="flex gap-2">
              {featuredWork.demoUrl && (
                <a
                  href={featuredWork.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-zinc-50 bg-zinc-900 border border-zinc-700 rounded-md px-4 py-[7px] no-underline hover:bg-zinc-800 transition-colors tracking-[0.02em]"
                >
                  Prototype
                </a>
              )}
              {featuredWork.githubUrl && (
                <a
                  href={featuredWork.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-zinc-400 bg-transparent border border-zinc-800 rounded-md px-4 py-[7px] no-underline hover:border-zinc-600 hover:text-zinc-300 transition-colors tracking-[0.02em]"
                >
                  GitHub
                </a>
              )}
              {featuredWork.systemDesignUrl && (
                <a
                  href={featuredWork.systemDesignUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-zinc-400 bg-transparent border border-zinc-800 rounded-md px-4 py-[7px] no-underline hover:border-zinc-600 hover:text-zinc-300 transition-colors tracking-[0.02em]"
                >
                  System design
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ── Writing ── */}
        <section
          id="writing"
          className="border-2 rounded-xl px-5 md:px-7 -mx-5 md:-mx-7 mt-20 md:mt-28 transition-[border-color,box-shadow] duration-700 ease-out"
          style={borderStyle('writing')}
        >
          <SectionHeader title="top writing" active={activeSection === 'writing'} />

          {blogPosts.map((post, idx) => (
            <a
              key={idx}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-t border-zinc-900 py-4 no-underline last:border-b last:border-zinc-900 group"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] text-zinc-400 border border-zinc-700 rounded px-[7px] py-[2px] tracking-[0.04em] whitespace-nowrap">
                  {post.tag}
                </span>
                <span className="text-[13px] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  {post.title}
                </span>
              </div>
              <span className="text-[11px] text-zinc-700 ml-4 flex-shrink-0">{post.date}</span>
            </a>
          ))}
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