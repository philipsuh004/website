"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Globe,
  ExternalLink,
  FileText,
  PlayCircle,
} from "lucide-react";
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
            <ExpandableRow
              title="Software Developer Intern"
              subtitle="Stanford Shen Laboratory"
              date="May 2024–Present"
              logoSrc="/simes.jpg"
              logoAlt="MIM Lab"
            >
              <p>
                Designed and evaluated multiple models for automated scanning in microwave impedance microscopy (MIM) with methods including 
                particle filter, CNN-based, and multimodal LLM approaches. Improved directional accuracy by 40% and reduced manual scanning 
                time by 1-4 days using the particle filter method. Also helped create a hypercontrol GUI for experiments.
              </p>
            </ExpandableRow>

            <ExpandableRow
              title="Data Science Intern"
              subtitle="Kavli Institute for Particle Astrophysics and Cosmology"
              date="Jun 2024 - Aug 2024"
              logoSrc="/kipac.png"
              logoAlt="KIPAC"
            >
              <p>
                Analyzed luminosity datasets (SDSS, Fermi-LAT, VLBI) using non-parametric statistical methods in Python (numpy, scipy, 
                astropy, pandas) to help understand accretion disk-jet correlations and their cosmological evolutions. Derived the 
                radio-gamma luminosity funtion and applied Kendall&rsquo;s tau and Pearson correlation tests, showing higher gamma-radio local
                luminosity correlations in comparison to radio-optical.
              </p>
            </ExpandableRow>

            <ExpandableRow
              title="Machine Learning Intern"
              subtitle="SLAC Atlas Group"
              date="Dec 2023 – Jun 2024"
              logoSrc="/slac.jpg"
              logoAlt="SLAC"
            >
              <p>
                Tested semi-supervised methods for detecting beyond-the-standard-model tracking signatures by evaluating a proprietary 
                permutation-invariant anomaly detection model (sci-kit learn), achieving results to the supervise Particle Flow Network.
                Also investigated oversampling artifacts in high-energy physics pile-up simulation data that introduced bias into model
                training.
              </p>
            </ExpandableRow>
          </Grid>
        </Block>

        {/* PROJECTS */}
        <Block id="projects" title="Projects">
          <Grid>
            <ExpandableRow
              title="MIM Hypercontrol GUI"
              date="Jan 2025 - Oct 2025"
              links={[
                { label: "GitHub", href: "https://github.com/philipsuh004/mim_hypercontrol", kind: "github" },
              ]}
            >
              <p>
                Stack: PyQt5, Sci-kit Image, Open CV, PyVisa, Matplotlib
              </p>
              <br />
              <p>
                A modular PyQt5 GUI unifying hardware control into a single interface. Generated confidence-weighted scanner
                movement using a particle filter method, enabling automated navigation across microscopy samples. Developed 
                high-performance visualization using pyqtgraph for live streaming data and matplotlib for embedded plots.
              </p>
            </ExpandableRow>

            <ExpandableRow
              title="Overwatch/Marvel Rivals Ro.Pa.Sci."
              date="Jun 2025 – Current"
            >
              <p>
                Stack: XGBoost, TensorFlow, Next.js, TypeScript, PostgreSQL
              </p>
              <br />
              <p>
                Built a novel heirarchical esports analytics platform for Overwatch 2 and Marvel Rivals used proprietarily by 
                professional teams in both games. Processes time series game data for advanced statistics such as ultimate
                usage win rates, first death classifications, and character matchup spreads using an ML pipeline using XGBoost 
                gradient boosting and TensorFlow neural networks. Optimized PostgreSQL database berformance, enabling Python 
                ETL pipelines to process 17,000+ data points per game, cutting down manual analysis time by 70%.
              </p>
            </ExpandableRow>
          </Grid>
        </Block>

        {/* RESUME */}
        <Block id="resume" title="Resume">
          <div className="panel p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-neutral-200">
                <p className="text-lg">Grab a copy of my latest resume.</p>
              </div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium hover:bg-white/10 transition"
              >
                <FileText size={18} strokeWidth={1.8} />
                View Résumé (PDF)
              </a>
            </div>
          </div>
        </Block>

        {/* ABOUT */}
        <Block id="about" title="About">
          <div className="panel p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/photo.png"
                alt="Philip Suh"
                width={200}
                height={200}
                className="rounded-full ring-1 ring-white/10 shadow-[0_0_40px_rgba(56,176,255,0.35)]"
              />
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                Hi, I&rsquo;m Philip Suh
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                I am currently a student at Stanford University studying computer science. I love to
                build projects relating to physics research, esports, and other practical applications.
                My background in physics has taught me how to think of the world as a system and computer
                science has allowed me to bring my ideas to life. When I am not coding, I like to play
                card games, watch tv shows, and keep up with professional esports.
              </p>
            </div>
          </div>
        </Block>


        {/* FOOTER */}
        <SiteFooter />
      </main>
    </div>
  );
}

/* ───────────────────────── layout & header ───────────────────────── */

function TopBar() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-black/25 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-5">
        <div className="text-lg font-medium tracking-wide text-white">Philip Suh</div>

        <nav className="flex items-center gap-7 text-[15px] text-neutral-200">
          <a className="hover:text-white transition" href="#experiences">
            Experiences
          </a>
          <a className="hover:text-white transition" href="#projects">
            Projects
          </a>
          <a className="hover:text-white transition" href="#resume">
            Resume
          </a>
          <a
            className="rounded-full border border-white/20 px-4 py-1.5 hover:bg-white/10 transition"
            href="#about"
          >
            About
          </a>

          <div className="ml-6 flex items-center gap-5 text-white">
            <a
              href="mailto:philip.suh@stanford.edu"
              aria-label="Email"
              className="hover:text-cyan-300 transition"
            >
              <Mail size={22} strokeWidth={1.6} />
            </a>
            <a
              href="https://github.com/philipsuh004"
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

        <div className="md:text-left text-center">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-6xl md:text-8xl font-semibold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(56,176,255,0.25)]"
          >
            Hi, I&rsquo;m Philip
          </motion.h1>

          <p className="mt-3 text-base md:text-lg text-neutral-300">
            Stanford University • B.S. Computer Science • GPA 3.98 • 2023–2027
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a href="#projects" className="panel px-7 py-3 text-[15px] font-medium hover:opacity-95">
              Projects
            </a>
            <a href="#experiences" className="panel px-7 py-3 text-[15px] font-medium hover:opacity-95">
              Experiences
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="panel px-7 py-3 text-[15px] font-medium hover:opacity-95 inline-flex items-center gap-2"
            >
              <FileText size={16} strokeWidth={1.8} />
              Resume (PDF)
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

/* ───────────────────────────── reusable blocks ───────────────────────────── */
function Block({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative px-6 py-10 md:py-14 scroll-mt-28 md:scroll-mt-36">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-3 text-2xl md:text-3xl font-semibold tracking-wide text-white">{title}</h2>
        <div className="hr mb-5" />
        <Grid>{children}</Grid>
      </div>
    </section>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

/* ───────────────────────────── Expandable Rows ───────────────────────────── */

type LinkKind = "github" | "website" | "demo" | "paper" | "video" | "doc" | "other";
type RowLink = { label: string; href: string; kind?: LinkKind };

function PillLink({ link }: { link: RowLink }) {
  const { label, href, kind = "other" } = link;
  const Icon =
    kind === "github" ? Github :
    kind === "website" ? Globe :
    kind === "paper" ? FileText :
    kind === "video" ? PlayCircle :
    kind === "demo" ? ExternalLink :
    kind === "doc" ? FileText :
    ExternalLink;

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-neutral-200 hover:bg-white/10 transition"
    >
      <Icon size={14} strokeWidth={1.8} /> {label}
    </a>
  );
}

function ExpandableRow({
  title,
  subtitle,
  date,
  children,
  links = [],
  logoSrc,
  logoAlt,
  defaultOpen = false,
}: {
  title: string;
  subtitle?: string;
  date: string;
  children: React.ReactNode;
  links?: RowLink[];
  logoSrc?: string;
  logoAlt?: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const contentId = React.useId();
  const hasLogo = Boolean(logoSrc);

  return (
    <div className="w-full">
      <div className="panel w-full p-0 overflow-hidden">
        {/* Header */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={contentId}
          className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
        >
          <div className="flex items-start justify-between px-6 py-4">
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-3">
                <ChevronDown
                  className={`transition-transform duration-300 text-neutral-300 ${open ? "rotate-180" : ""}`}
                  size={18}
                  strokeWidth={1.75}
                />
                <span className="font-medium text-neutral-100">{title}</span>
              </div>
              {subtitle && (
                <span className="ml-[1.6rem] text-sm text-neutral-400 leading-tight">
                  {subtitle}
                </span>
              )}
            </div>
            <span className="text-sm text-neutral-300">{date}</span>
          </div>
        </button>

        {/* Expanding content */}
        <AnimatePresence initial={false}>
          <motion.div
            id={contentId}
            initial={false}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="px-6 pb-5"
            style={{ overflow: "hidden" }}
          >
            <div
              className={[
                "pt-2 gap-4 items-start",
                hasLogo ? "grid grid-cols-1 md:grid-cols-[auto_1fr]" : "grid grid-cols-1",
              ].join(" ")}
            >
              {hasLogo && (
                <div className="md:pr-2">
                  <Image
                    src={logoSrc!}
                    alt={logoAlt ?? "Logo"}
                    width={400}
                    height={160}
                    className="h-16 md:h-20 w-auto block"
                    priority={false}
                  />
                </div>
              )}

              <div>
                <div className="text-neutral-300 leading-relaxed">{children}</div>
                {links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {links.map((lnk, i) => (
                      <PillLink key={i} link={lnk} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─────────────────────────────── footer ─────────────────────────────── */

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="mx-auto w-full max-w-6xl px-6 py-8">
        <p className="text-center text-sm text-neutral-300">
          Open to SWE / Research roles & collaborations.{" "}
          <a
            className="underline decoration-white/20 underline-offset-4 hover:text-white transition"
            href="mailto:philip.suh@stanford.edu"
          >
            Email
          </a>{" "}
          •{" "}
          <a
            className="underline decoration-white/20 underline-offset-4 hover:text-white transition"
            href="https://linkedin.com/in/phlpsuh"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          •{" "}
          <a
            className="underline decoration-white/20 underline-offset-4 hover:text-white transition"
            href="https://github.com/philipsuh004"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

/* ───────────────────────────── visuals ───────────────────────────── */

function Caustics() {
  return (
    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      <defs>
        <filter id="caustics">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.012"
            numOctaves="2"
            seed="11"
          >
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

    type Dot = {
      x: number; y: number; r: number; hue: number; a: number; vx: number; vy: number; k: number;
    };
    const count = Math.floor((w * h) / (105000 * dpr));
    const dots: Dot[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() < 0.2 ? 1.4 : 0.9) * dpr,
      hue: 185 + Math.random() * 40,
      a: 0.18 + Math.random() * 0.25,
      vx: (Math.random() - 0.5) * 0.08 * dpr,
      vy: (Math.random() - 0.5) * 0.08 * dpr,
      k: 0,
    }));

    let mx = -9999, my = -9999, active = false;
    const onMove = (e: MouseEvent) => { mx = e.clientX * dpr; my = e.clientY * dpr; active = true; };
    const onLeave = () => { active = false; };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

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
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        if (active) {
          const dx = p.x - mx, dy = p.y - my;
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
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className="h-full w-full" />;
}
