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
                As a Software Developer Intern at the Stanford Shen Laboratory, I work on automation systems for microwave impedance microscopy (MIM) within a multidisciplinary research team combining physics, materials science, and software engineering. My primary focus is developing a particle-filter–based localization and automated scanning pipeline, which increased positioning accuracy by 40% and reduced manual scanning time by up to four days per experiment.
              </p>
              <br />
              <p>
                I designed and implemented this system in Python, leveraging tools such as OpenCV, scikit-image, and PyTorch for image processing and model training. The pipeline integrates both probabilistic and CNN-based localization methods, enabling robust alignment even in noisy imaging conditions.
              </p>
              <br />
              <p>
                Beyond algorithm development, I built a modular PyQt5 GUI that unifies data processing, live visualization, and hardware communication. This interface now serves as a central control hub for the lab&rsquo;s microscopy experiments, improving workflow efficiency for over 15 researchers and forming the basis for future automation work.
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
                As a Data Science Intern at the Kavli Institute for Particle Astrophysics and Cosmology (KIPAC), I worked under Professor Vahe Petrosian in the multiwavelength astrophysics group, studying emission correlations across different energy bands in active galactic nuclei. My main project focused on analyzing cross-band luminosity relationships to investigate how particle acceleration and jet physics shape broadband emission spectra.
              </p>
              <br />
              <p>
                Using Python (NumPy, SciPy, Pandas, Astropy), I processed over 10,000 luminosity samples from SDSS, Fermi-LAT, and VLBI surveys. I applied the Efron–Petrosian method to remove redshift biases from truncated astronomical data and performed correlation analyses (Kendall&rsquo;s τ, Pearson) to identify statistically significant trends. The results revealed a stronger radio–gamma correlation (PCC = 0.53) compared to radio–optical (PCC = 0.40), consistent with a shared nonthermal origin of emission.
              </p>
              <br />
              <p>
                This work contributed to Professor Petrosian&rsquo;s ongoing research on nonthermal radiation mechanisms and cosmological selection effects in high-energy astrophysics. I also developed visualization and preprocessing pipelines that standardized the analysis workflow for future luminosity correlation studies within KIPAC.
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
                As a Machine Learning Intern at SLAC National Accelerator Laboratory, I worked with Dr. Julia Gonski in the Particle Physics and Artificial Intelligence Group on permutation-invariant anomaly detection for identifying beyond-the-Standard-Model particle-tracking signatures. Our project aimed to uncover subtle, previously unmodeled collision patterns in large-scale simulation datasets, helping expand the sensitivity of collider experiments to new physics phenomena.
              </p>
              <br />
              <p>
                I benchmarked a permutation-invariant anomaly detection model in Python (scikit-learn, NumPy) across more than one million simulated particle events, achieving AUC = 0.98 and outperforming supervised baselines such as the Particle Flow Network. The model&rsquo;s architecture, designed to preserve event-level symmetries, demonstrated that unsupervised methods can rival fully labeled approaches in detecting exotic event topologies.
              </p>
              <br />
              <p>
                Working closely with Dr. Gonski, I also identified and diagnosed oversampling artifacts in pile-up simulations that caused model performance to collapse (AUC = 0.49). Tracing the problem to statistical imbalance, I helped design higher-statistics datasets and improved the preprocessing pipeline, laying the groundwork for future anomaly-detection research in high-energy physics.
              </p>
            </ExpandableRow>

            <ExpandableRow
              title="Particle Physics Research Intern"
              subtitle="UCLA Physics & Astronomy"
              date="Jul 2021 – Jun 2023"
              logoSrc="/ucla.png"
              logoAlt="UCLA"
            >
              <p>
                As a Research Intern with the UCLA Nuclear Physics Group, I worked under Professor Huan Zhong Huang and Associate Researcher Gang Wang on the study of high-energy particle collisions at the Large Hadron Collider (LHC) and Relativistic Heavy Ion Collider (RHIC). My primary project focused on analyzing particle spectra and nuclear modification factors (RAA) to uncover trends in parton energy loss within the quark–gluon plasma.
              </p>
              <br />
              <p>
                Using Python and ROOT, I processed large datasets from the ALICE and STAR experiments, extracting transverse-momentum spectra and investigating centrality-dependent suppression patterns across multiple collision energies. The analysis revealed contrasting energy-loss behaviors between RHIC and LHC systems, providing new insight into medium-induced parton interactions and their scaling with system size.
              </p>
              <br />
              <p>
                This research culminated in a peer-reviewed publication, &ldquo;Contrasting Features of Parton Energy Loss in Heavy-Ion Collisions at RHIC and LHC.&rdquo; My contributions supported the paper&rsquo;s quantitative findings and advanced ongoing efforts to characterize the properties of the quark–gluon plasma through cross-experiment comparisons.
              </p>
            </ExpandableRow>
          </Grid>
        </Block>

        {/* PROJECTS */}
        <Block id="projects" title="Projects">
          <Grid>
            <ExpandableRow
              title="Counterwatch"
              date="Jun 2025 – Present"
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
              title="PokerSync"
              date="Apr 2025 – Apr 2025"
              links={[
                { label: "GitHub", href: "https://github.com/philipsuh004/Ai-Commentator", kind: "github" },
              ]}
            >
              <p>
                Stack: Flask, Gemini 2.0 Flash, ElevenLabs, React, Vite, FFmpeg
              </p>
              <br />
              <p>
                3rd Place– AGI House Google AI Build Weekend Hackathon for developing an AI poker commentator with real-time video analysis and synchronized speech. Built a Flask backend using Gemini 2.0 Flash and ElevenLabs, achieving 0-delay playback from 10–15 s lag. Developed a React + Vite frontend and cached FFmpeg pipeline for responsive commentary.
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
                View Resume (PDF)
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
                I&rsquo;m Philip and I am currently a computer science student at Stanford with a background in Physics, passionate about building intelligent systems that bridge automation, data, and human insight.
              </p>
              <br />
              <p className="text-neutral-300 leading-relaxed">
                My work combines software engineering with computer vision and scientific computation. I&rsquo;ve developed particle-filter-based localization pipelines that use contrast analysis, noise subtraction, and morphological filtering to track microscopic features with physical-unit precision. These systems accelerate imaging workflows and bring reproducibility to experimental research.
              </p>
              <br />
              <p className="text-neutral-300 leading-relaxed">
                Outside the lab, I enjoy creating side projects that merge creativity with engineering from PokerSync, an AI poker commentator, to a voice-controlled interface for video and streaming services, and even esports analytics tools for competitive play. I like building projects that feel both novel and useful, exploring how human–computer interaction can make technology more intuitive and expressive.
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
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4 py-4 sm:px-6 sm:py-5 gap-3">
        {/* Left: Name */}
        <div className="text-base sm:text-lg font-medium tracking-wide text-white flex-shrink-0">
          Philip Suh
        </div>

        {/* Right: Nav */}
        <nav className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-7 text-[14px] sm:text-[15px] text-neutral-200 w-full sm:w-auto">
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

          {/* Icons — wrap on mobile */}
          <div className="flex items-center justify-center sm:justify-end gap-4 sm:gap-5 text-white w-full sm:w-auto mt-2 sm:mt-0">
            <a
              href="mailto:philip.suh@stanford.edu"
              aria-label="Email"
              className="hover:text-cyan-300 transition"
            >
              <Mail size={20} sm-size={22} strokeWidth={1.6} />
            </a>
            <a
              href="https://github.com/philipsuh004"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-cyan-300 transition"
            >
              <Github size={20} sm-size={22} strokeWidth={1.6} />
            </a>
            <a
              href="https://linkedin.com/in/phlpsuh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-300 transition"
            >
              <Linkedin size={20} sm-size={22} strokeWidth={1.6} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Intro() {
  return (
    <section className="snap-section flex min-h-[100dvh] items-center justify-center px-4 sm:px-6 text-center">
      <div className="relative z-0 max-w-6xl pt-28 sm:pt-32 flex flex-col md:flex-row items-center md:justify-center gap-8 sm:gap-12 md:gap-16">
        {/* Portrait */}
        <div className="flex-shrink-0">
          <Image
            src="/photo.png"
            alt="Philip Suh"
            width={300}
            height={300}
            priority
            className="rounded-full ring-1 ring-white/10 shadow-[0_0_55px_rgba(56,176,255,0.45)] hover:scale-[1.035] transition-transform duration-700
                       w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover"
          />
        </div>

        {/* Intro Text */}
        <div className="md:text-left text-center max-w-xl sm:max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(56,176,255,0.25)]"
          >
            Hi, I&rsquo;m Philip
          </motion.h1>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-neutral-300">
            Stanford University • B.S. Computer Science • GPA 3.98 • 2023–2027
          </p>

          {/* Buttons */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
            <a
              href="#projects"
              className="panel px-5 py-2.5 sm:px-7 sm:py-3 text-[14px] sm:text-[15px] font-medium hover:opacity-95"
            >
              Projects
            </a>
            <a
              href="#experiences"
              className="panel px-5 py-2.5 sm:px-7 sm:py-3 text-[14px] sm:text-[15px] font-medium hover:opacity-95"
            >
              Experiences
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="panel px-5 py-2.5 sm:px-7 sm:py-3 text-[14px] sm:text-[15px] font-medium hover:opacity-95 inline-flex items-center gap-2"
            >
              <FileText size={16} strokeWidth={1.8} />
              Resume (PDF)
            </a>
            <a
              href="#about"
              className="rounded-md border border-white/15 bg-white/5 px-5 py-2.5 sm:px-7 sm:py-3 text-[14px] sm:text-[15px] font-medium hover:bg-white/10"
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
function Block({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative px-4 sm:px-6 py-8 md:py-12 scroll-mt-24 md:scroll-mt-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-2 md:mb-3 text-2xl md:text-3xl font-semibold tracking-wide text-white">
          {title}
        </h2>
        <div className="hr mb-4 md:mb-6" />
        <Grid>{children}</Grid>
      </div>
    </section>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-3 sm:gap-4 md:gap-5">
      {React.Children.map(children, (child) => (
        <div className="w-full">{child}</div>
      ))}
    </div>
  );
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
      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-[11px] sm:text-xs text-neutral-200 hover:bg-white/10 transition"
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
          <div className="flex items-start justify-between px-4 sm:px-6 py-3 sm:py-4 gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 min-w-0">
                <ChevronDown
                  className={`shrink-0 transition-transform duration-300 text-neutral-300 ${open ? "rotate-180" : ""}`}
                  size={18}
                  strokeWidth={1.75}
                />
                <span className="font-medium text-neutral-100 truncate">{title}</span>
              </div>
              {subtitle && (
                <span className="pl-[1.6rem] block text-xs sm:text-sm text-neutral-400 leading-tight mt-0.5">
                  {subtitle}
                </span>
              )}
            </div>

            {/* Date (kept right on desktop, wraps on mobile) */}
            <span className="shrink-0 text-xs sm:text-sm text-neutral-300 whitespace-nowrap">
              {date}
            </span>
          </div>
        </button>

        {/* Expanding content */}
        <AnimatePresence initial={false}>
          <motion.div
            id={contentId}
            initial={false}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="px-4 sm:px-6 pb-4 sm:pb-5"
            style={{ overflow: "hidden" }}
          >
            <div className="pt-2">
              {hasLogo && (
                <Image
                  src={logoSrc!}
                  alt={logoAlt ?? "Logo"}
                  width={400}
                  height={160}
                  className="h-20 md:h-25 w-auto float-left mr-4 mb-2"
                  priority={false}
                />
              )}
              
              <div className="text-neutral-300 leading-relaxed">{children}</div>
              {links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {links.map((lnk, i) => (
                    <PillLink key={i} link={lnk} />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ───────── footer ───────── */

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 mt-8 md:mt-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-6 sm:py-8">
        <p className="text-center text-xs sm:text-sm text-neutral-300 leading-relaxed">
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
