"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Deep Sea — immersive page
 * - Fixed gradient abyss background
 * - Procedural caustics (SVG filter)
 * - Particle field (bioluminescent plankton) with cursor stimulus
 * - Scroll-snap sections + glass panels
 */

/* -------------------------------- Page -------------------------------- */

export default function Page() {
  return (
    <div className="relative">
      {/* BACKGROUND GRADIENT (fixed) */}
      <div className="fixed inset-0 -z-40 bg-[radial-gradient(120%_80%_at_50%_-10%,var(--abyss-top),var(--abyss-mid)_50%,var(--abyss-bottom))]" />

      {/* CAUSTICS OVERLAY (procedural SVG) */}
      <div className="fixed inset-0 -z-30 opacity-[0.28] mix-blend-screen">
        <Caustics />
      </div>

      {/* PARTICLES (bioluminescence) */}
      <div className="fixed inset-0 -z-20">
        <ParticleField />
      </div>

      {/* VIGNETTE */}
      <div className="vignette fixed inset-0 -z-10" />

      {/* CONTENT */}
      <Header />
      <main className="snap-container">
        <Hero />
        <Section id="work" title="Selected Work">
          <Grid>
            <Panel title="MIM HyperControl GUI">
              Instrument orchestration, live plots, channel switching, and safety interlocks.
            </Panel>
            <Panel title="Particle Filter Arrow Matcher">
              Probabilistic tracking with unit-aware scaling and masked regions.
            </Panel>
            <Panel title="Rivals Ban Recommender">
              Hero-pool models, synergy maps, and tournament-style global bans.
            </Panel>
            <Panel title="Scoreboard OCR">
              Column-locked OCR with error bounds and timeline alignment.
            </Panel>
          </Grid>
        </Section>

        <Section id="research" title="Research & Systems">
          <Grid>
            <Panel title="Microwave Impedance Microscopy">
              Real-time signal vs. spatial axes with configurable channels.
            </Panel>
            <Panel title="Probabilistic Tracking">
              PF + EKF fusion for motif localization in noisy, masked domains.
            </Panel>
          </Grid>
        </Section>

        <Section id="esports" title="Esports Analytics">
          <Grid>
            <Panel title="Marvel Rivals">
              Pick/ban optimization, synergy maps, replay ingestion, and event timelines.
            </Panel>
            <Panel title="Pipelines">
              Ingestion → OCR → feature engineering → dashboards (Supabase/Postgres, React).
            </Panel>
          </Grid>
        </Section>

        <Section id="about" title="About">
          <div className="panel p-6">
            <p className="max-w-3xl text-neutral-200">
              Hi, I’m Philip. I build systems that bridge research precision and playful interaction—calm structures
              set in a vast, bioluminescent environment.
            </p>
          </div>
        </Section>

        <Footer />
      </main>
    </div>
  );
}

/* ------------------------------ Header ------------------------------- */

function Header() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-black/20 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <div className="font-medium tracking-wide">Philip Suh</div>
        <nav className="flex items-center gap-5 text-sm">
          <a className="hover:opacity-90" href="#work">Work</a>
          <a className="hover:opacity-90" href="#research">Research</a>
          <a className="hover:opacity-90" href="#esports">Esports</a>
          <a className="rounded-full border border-white/15 px-3 py-1 hover:bg-white/5" href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}

/* ------------------------------ Sections ----------------------------- */

function Hero() {
  return (
    <section className="snap-section flex min-h-[100dvh] items-center justify-center text-center px-6">
      <div className="relative z-0 max-w-4xl pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight drop-shadow-[0_6px_24px_rgba(56,176,255,0.25)]"
        >
          Into the Deep
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-lg text-neutral-200 max-w-2xl mx-auto"
        >
          An immersive, bioluminescent portfolio—quiet, focused, and alive.
        </motion.p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <a href="#work" className="panel px-5 py-2 text-sm hover:opacity-95">View Work</a>
          <a href="#about" className="rounded-md border border-white/15 px-5 py-2 text-sm bg-white/5 hover:bg-white/10">
            About
          </a>
        </div>
      </div>
    </section>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="snap-section relative flex items-center px-6">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-4 text-xl font-semibold tracking-wide">{title}</h2>
        <div className="hr mb-6" />
        {children}
      </div>
    </section>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-6 md:grid-cols-2">{children}</div>;
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="panel p-5">
      <div className="font-medium text-neutral-100">{title}</div>
      <div className="mt-2 text-neutral-300">{children}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer id="contact" className="snap-section relative flex items-center border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-neutral-300">Open to SWE/Research roles & collaborations.</p>
        <div className="flex flex-wrap gap-3 text-sm">
          <a className="hover:opacity-90" href="mailto:philip@example.com">Email</a>
          <a className="hover:opacity-90" href="#">LinkedIn</a>
          <a className="hover:opacity-90" href="#">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------- Visual Layers ---------------------------- */

/* Caustics: animated SVG filter for underwater light */
function Caustics() {
  return (
    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      <defs>
        <filter id="caustics">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="11">
            <animate
              attributeName="baseFrequency"
              dur="18s"
              values="0.008 0.012; 0.010 0.014; 0.008 0.012"
              repeatCount="indefinite"
            />
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

/* Particle Field: bioluminescence with cursor stimulus */
function ParticleField() {
  const ref = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = (canvas.width = Math.floor(window.innerWidth * dpr));
    let h = (canvas.height = Math.floor(window.innerHeight * dpr));
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    const resize = () => {
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * dpr);
    };
    window.addEventListener("resize", resize);

    // Particles
    const baseDensity = 1.0;
    const N = Math.floor((w * h) / (105000 * dpr) * baseDensity);
    type P = { x: number; y: number; r: number; hue: number; a: number; vx: number; vy: number; boost: number };
    const pts: P[] = [];
    for (let i = 0; i < N; i++) {
      const hue = 185 + Math.random() * 40; // cyan/blue
      const a = 0.18 + Math.random() * 0.25;
      const r = (Math.random() < 0.2 ? 1.4 : 0.9) * dpr; // a few brighter
      pts.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r, hue, a,
        vx: (Math.random() - 0.5) * 0.08 * dpr,
        vy: (Math.random() - 0.5) * 0.08 * dpr,
        boost: 0,
      });
    }

    // Cursor
    let mouseX = -9999, mouseY = -9999, hasMouse = false;
    const onMove = (e: MouseEvent) => { mouseX = e.clientX * dpr; mouseY = e.clientY * dpr; hasMouse = true; };
    const onLeave = () => { hasMouse = false; };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    // Stimulus params
    const RADIUS = 120 * dpr;
    const MAX_BOOST = 0.55;
    const DECAY = 0.92;

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, w, h);

      // depth fog
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "rgba(0,12,24,0.10)");
      grad.addColorStop(1, "rgba(0,0,0,0.18)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      for (const p of pts) {
        // integrate
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // stimulus
        if (hasMouse) {
          const dx = p.x - mouseX, dy = p.y - mouseY;
          const d2 = dx*dx + dy*dy;
          if (d2 < RADIUS * RADIUS) {
            const t = 1 - Math.sqrt(d2) / RADIUS;   // 0..1
            const bump = t * t * MAX_BOOST;
            p.boost = Math.min(MAX_BOOST, p.boost + bump);
          }
        }
        p.boost *= DECAY;

        // render (glow + core)
        const alpha = p.a + p.boost;
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        glow.addColorStop(0, `hsla(${p.hue}, 85%, 70%, ${alpha})`);
        glow.addColorStop(1, `hsla(${p.hue}, 85%, 70%, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 95%, 78%, ${Math.min(1, alpha + 0.08)})`;
        ctx.fill();
      }
    };
    tick();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className="h-full w-full" />;
}
