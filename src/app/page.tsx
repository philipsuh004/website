"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative">
      {/* background */}
      <div className="fixed inset-0 -z-40 bg-[radial-gradient(120%_80%_at_50%_-10%,var(--abyss-top),var(--abyss-mid)_50%,var(--abyss-bottom))]" />
      <div className="fixed inset-0 -z-30 opacity-30 mix-blend-screen">
        <Caustics />
      </div>
      <div className="fixed inset-0 -z-20">
        <Bioluminescence />
      </div>
      <div className="vignette fixed inset-0 -z-10" />

      {/* content */}
      <TopBar />
      <main className="snap-container">
        <Intro />

        {/* EXPERIENCES */}
        <Block id="experiences" title="Experiences">
          <Grid>
            <Card title="MIM HyperControl GUI">
              Instrument orchestration, live plots, channel switching, and safety interlocks.
            </Card>
            <Card title="Microwave Impedance Microscopy">
              Real-time signal vs. spatial axes with configurable channels.
            </Card>
            <Card title="Pipelines">
              Ingestion → OCR → feature engineering → dashboards (Supabase/Postgres, React).
            </Card>
          </Grid>
        </Block>

        {/* PROJECTS */}
        <Block id="projects" title="Projects">
          <Grid>
            <Card title="Particle Filter Arrow Matcher">
              Probabilistic tracking with unit-aware scaling and masked regions.
            </Card>
            <Card title="Rivals Ban Recommender">
              Hero-pool models, synergy maps, and tournament-style global bans.
            </Card>
            <Card title="Scoreboard OCR">
              Column-locked OCR with error bounds and timeline alignment.
            </Card>
            <Card title="Marvel Rivals">
              Pick/ban optimization, synergy maps, replay ingestion, and event timelines.
            </Card>
          </Grid>
        </Block>

        <Block id="about" title="About">
          <div className="panel p-6">
            <p className="max-w-3xl text-neutral-200">Hi, I’m Philip. I like to build things.</p>
          </div>
        </Block>

        <SiteFooter />
      </main>
    </div>
  );
}

/* layout */

function TopBar() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-black/25 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-5">
        {/* Name / Logo */}
        <div className="text-lg font-medium tracking-wide text-white">Philip Suh</div>

        {/* Nav links */}
        <nav className="flex items-center gap-7 text-[15px] text-neutral-200">
          <a className="hover:text-white transition" href="#experiences">
            Experiences
          </a>
          <a className="hover:text-white transition" href="#projects">
            Projects
          </a>
          <a
            className="rounded-full border border-white/20 px-4 py-1.5 hover:bg-white/10 transition"
            href="#about"
          >
            About
          </a>

          {/* Social Icons */}
          <div className="ml-6 flex items-center gap-5 text-white">
            <a
              href="mailto:philip@example.com"
              aria-label="Email"
              className="hover:text-cyan-300 transition"
            >
              <Mail size={22} strokeWidth={1.6} />
            </a>
            <a
              href="https://github.com/phlpsuh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-cyan-300 transition"
            >
              <Github size={22} strokeWidth={1.6} />
            </a>
            <a
              href="https://linkedin.com/in/phlpsuh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-300 transition"
            >
              <Linkedin size={22} strokeWidth={1.6} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Intro() {
  return (
    <section className="snap-section flex min-h-[100dvh] items-center justify-center px-6 text-center">
      <div className="relative z-0 max-w-6xl pt-32 flex flex-col md:flex-row items-center md:justify-center gap-16">
        {/* Portrait */}
        <div className="flex-shrink-0">
          <Image
            src="/photo.png"
            alt="Philip Suh"
            width={300}
            height={300}
            priority
            className="rounded-full ring-1 ring-white/10 shadow-[0_0_55px_rgba(56,176,255,0.45)] hover:scale-[1.035] transition-transform duration-700"
          />
        </div>

        {/* Intro Text */
        /* bumped sizes up one step */}
        <div className="md:text-left text-center">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-6xl md:text-8xl font-semibold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(56,176,255,0.25)]"
          >
            Hi, I’m Philip
          </motion.h1>

          {/* Education tagline (visible on load) */}
          <p className="mt-3 text-base md:text-lg text-neutral-300">
            Stanford University • B.S. Computer Science • GPA 3.98 • 2023–2027
          </p>

          {/* Buttons */}
          <div className="mt-12 flex items-center justify-center md:justify-start gap-6">
            <a href="#projects" className="panel px-7 py-3 text-[15px] font-medium hover:opacity-95">
              View Projects
            </a>
            <a
              href="#about"
              className="rounded-md border border-white/15 bg-white/5 px-7 py-3 text-[15px] font-medium hover:bg-white/10"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="snap-section relative px-6">
      {/* Outer container controls overall page width */}
      <div className="mx-auto w-full max-w-6xl">
        {/* Inner wrapper is centered and sets the exact row width
            -> header and cards share the same left edge + are symmetric */}
        <div className="mx-auto w-full md:w-[90%] lg:w-[85%] xl:w-[80%]">
          <h2 className="mb-4 text-2xl md:text-3xl font-semibold tracking-wide text-white">
            {title}
          </h2>
          <div className="hr mb-8" />

          <Grid>{children}</Grid>
        </div>
      </div>
    </section>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8">
      {React.Children.map(children, (child) => (
        <div className="flex">{child}</div> // one card per row, left-aligned within inner wrapper
      ))}
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    // full width of the inner wrapper, so header + card edges align perfectly
    <div className="panel p-6 w-full">
      <div className="font-medium text-lg text-neutral-100">{title}</div>
      <div className="mt-2 text-neutral-300 leading-relaxed">{children}</div>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer id="contact" className="snap-section relative flex items-center border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-neutral-300">Open to SWE/Research roles & collaborations.</p>
        <div className="flex flex-wrap gap-3 text-sm">
          <a className="hover:opacity-90" href="mailto:philip@example.com">
            Email
          </a>
          <a className="hover:opacity-90" href="#">
            LinkedIn
          </a>
          <a className="hover:opacity-90" href="#">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

/* visuals */

function Caustics() {
  return (
    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      <defs>
        <filter id="caustics">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="11">
            <animate attributeName="baseFrequency" dur="18s" values="0.008 0.012; 0.010 0.014; 0.008 0.012" repeatCount="indefinite" />
          </feTurbulence>
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="gamma" amplitude="0.9" exponent="1.6" offset="0" />
          </feComponentTransfer>
        </filter>
      </defs>
      <rect width="100" height="100" filter="url(#caustics)" fill="rgba(90,140,220,0.35)" />
    </svg>
  );
}

function Bioluminescence() {
  const ref = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = (canvas.width = Math.floor(window.innerWidth * dpr));
    let h = (canvas.height = Math.floor(window.innerHeight * dpr));
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    const onResize = () => {
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * dpr);
    };
    window.addEventListener("resize", onResize);

    const count = Math.floor((w * h) / (105000 * dpr));
    type Dot = { x: number; y: number; r: number; hue: number; a: number; vx: number; vy: number; k: number };
    const dots: Dot[] = [];
    for (let i = 0; i < count; i++) {
      const hue = 185 + Math.random() * 40;
      const alpha = 0.18 + Math.random() * 0.25;
      const r = (Math.random() < 0.2 ? 1.4 : 0.9) * dpr;
      dots.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r,
        hue,
        a: alpha,
        vx: (Math.random() - 0.5) * 0.08 * dpr,
        vy: (Math.random() - 0.5) * 0.08 * dpr,
        k: 0,
      });
    }

    let mx = -9999,
      my = -9999,
      active = false;
    const move = (e: MouseEvent) => {
      mx = e.clientX * dpr;
      my = e.clientY * dpr;
      active = true;
    };
    const leave = () => {
      active = false;
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseleave", leave);

    const R = 120 * dpr;
    const BOOST = 0.55;
    const DECAY = 0.92;

    let raf = 0;
    const frame = () => {
      raf = requestAnimationFrame(frame);
      ctx.clearRect(0, 0, w, h);

      const fog = ctx.createLinearGradient(0, 0, 0, h);
      fog.addColorStop(0, "rgba(0,12,24,0.10)");
      fog.addColorStop(1, "rgba(0,0,0,0.18)");
      ctx.fillStyle = fog;
      ctx.fillRect(0, 0, w, h);

      for (const p of dots) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        if (active) {
          const dx = p.x - mx,
            dy = p.y - my;
          const d2 = dx * dx + dy * dy;
          if (d2 < R * R) {
            const t = 1 - Math.sqrt(d2) / R;
            p.k = Math.min(BOOST, p.k + t * t * BOOST);
          }
        }
        p.k *= DECAY;

        const a = p.a + p.k;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        g.addColorStop(0, `hsla(${p.hue}, 85%, 70%, ${a})`);
        g.addColorStop(1, `hsla(${p.hue}, 85%, 70%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 95%, 78%, ${Math.min(1, a + 0.08)})`;
        ctx.fill();
      }
    };

    frame();
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className="h-full w-full" />;
}
