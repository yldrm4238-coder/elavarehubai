import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Search, Zap, Shield, Layers, Menu, X } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import heroPoster from "@/assets/hero-poster.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1000ms] ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ElevareHub AI — Digital Alchemy Studio" },
      {
        name: "description",
        content:
          "ElevareHub AI transforms ideas into digital gold. A minimalist studio crafting high-performance, premium web experiences.",
      },
      { property: "og:title", content: "ElevareHub AI — Digital Alchemy Studio" },
      {
        property: "og:description",
        content:
          "ElevareHub AI transforms ideas into digital gold. A minimalist studio crafting high-performance, premium web experiences.",
      },
      { property: "og:image", content: heroPoster },
      { name: "twitter:image", content: heroPoster },
    ],
  }),
  component: Index,
});

type Project = {
  title: string;
  client: string;
  stack: string;
  poster: string;
  video?: string;
  hoverColor?: string;
};

const projects: Project[] = [
  {
    title: "Maison Atelier",
    client: "Maison Atelier",
    stack: "Next.js · Shopify · Motion",
    poster: project1,
    video: "/opt-project1.mp4",
  },
  {
    title: "AutoCouture",
    client: "AutoCouture",
    stack: "React · D3 · Supabase",
    poster: project2,
    video: "/opt-project2.mp4",
    hoverColor: "#2A4B35",
  },
  {
    title: "Ocean Whisper",
    client: "Ocean Whisper",
    stack: "Astro · GSAP · Sanity",
    poster: project3,
    video: "/opt-project3.mp4",
    hoverColor: "#164062",
  },
  {
    title: "Velvet Bite",
    client: "Velvet Bite",
    stack: "React Native · Stripe · tRPC",
    poster: project4,
    video: "/opt-project4.mp4",
    hoverColor: "#6CA5C9",
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <Hero />
      <Portfolio />
      <WhyUs />
      <HowItWorks />
      <Footer />
    </main>
  );
}

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6">
      <div className="relative mx-auto flex w-full max-w-[95%] sm:max-w-[80%] lg:max-w-[60%] items-center justify-between rounded-full px-5 py-3"
        style={{
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10)",
        }}
      >
        <span className="font-display text-lg font-medium tracking-tight">
          ElevareHub<span className="text-gold-gradient"> AI</span>
        </span>

        {/* Center Navigation Links (Desktop) */}
        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground sm:flex">
          <a href="#work" className="transition-colors hover:text-foreground/70">Works</a>
          <a href="#why" className="transition-colors hover:text-foreground/70">Why</a>
          <a href="#how" className="transition-colors hover:text-foreground/70">How</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden rounded-full bg-gradient-to-b from-white/10 to-white/5 px-4 py-1.5 text-[13px] font-medium text-foreground ring-1 ring-white/20 transition-all hover:bg-white/20 sm:block">
            Book a Free Call
          </button>
          
          {/* Hamburger Icon (Mobile) */}
          <button 
            className="p-1 text-foreground sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div 
            className="absolute right-0 top-full mt-4 flex w-[220px] flex-col items-center gap-6 rounded-[24px] p-6 sm:hidden animate-in fade-in slide-in-from-top-8 duration-[600ms] ease-out"
            style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(24px) saturate(200%)",
            WebkitBackdropFilter: "blur(24px) saturate(200%)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          }}
        >
          <a href="#work" onClick={() => setIsMenuOpen(false)} className="text-[13px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:text-white/70">Works</a>
          <a href="#why" onClick={() => setIsMenuOpen(false)} className="text-[13px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:text-white/70">Why</a>
          <a href="#how" onClick={() => setIsMenuOpen(false)} className="text-[13px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:text-white/70">How</a>
          
          <button className="mt-2 w-full rounded-full bg-gradient-to-b from-white/10 to-white/5 px-4 py-3 text-[13px] font-medium text-foreground ring-1 ring-white/20 transition-all hover:bg-white/20">
            Book a Free Call
          </button>
        </div>
        )}
      </div>
    </header>
  );
}

const DESKTOP_FRAME_COUNT = 342;
const MOBILE_FRAME_COUNT = 240;

function buildFrameUrls(base: "desktop" | "mobile", count: number) {
  return Array.from(
    { length: count },
    (_, i) => `/${base}/${String(i + 1).padStart(5, "0")}.webp`
  );
}

// Kare ilerlemesinin normal hızı (1800vh boyunca 342/240 kare eşit dağılır).
const BASE_SCROLL_VH = 1800;
// Kadının son karesi (desktop'ta 243. kare) burada 100vh boyunca donar.
const MID_HOLD_VH = 100;
// Son kare, sona erdiğinde 100vh boyunca donar.
const END_HOLD_VH = 100;
const TOTAL_SCROLL_VH = BASE_SCROLL_VH + MID_HOLD_VH + END_HOLD_VH;
const HOLD_FRAME_FRACTION = 243 / DESKTOP_FRAME_COUNT;

function frameIndexForProgress(progress: number, frameCount: number) {
  const holdFrameIndex = Math.min(
    frameCount - 1,
    Math.round(HOLD_FRAME_FRACTION * (frameCount - 1))
  );
  const holdFrameVh = (holdFrameIndex / (frameCount - 1)) * BASE_SCROLL_VH;
  const currentVh = progress * TOTAL_SCROLL_VH;

  let effectiveVh: number;
  if (currentVh <= holdFrameVh) {
    effectiveVh = currentVh;
  } else if (currentVh <= holdFrameVh + MID_HOLD_VH) {
    effectiveVh = holdFrameVh;
  } else if (currentVh <= holdFrameVh + MID_HOLD_VH + (BASE_SCROLL_VH - holdFrameVh)) {
    effectiveVh = currentVh - MID_HOLD_VH;
  } else {
    effectiveVh = BASE_SCROLL_VH;
  }

  return Math.min(
    frameCount - 1,
    Math.round((effectiveVh / BASE_SCROLL_VH) * (frameCount - 1))
  );
}

function Hero() {
  const isMobile = useIsMobile();
  const base: "desktop" | "mobile" = isMobile ? "mobile" : "desktop";
  const frameCount = isMobile ? MOBILE_FRAME_COUNT : DESKTOP_FRAME_COUNT;
  const frameUrls = useMemo(() => buildFrameUrls(base, frameCount), [base, frameCount]);

  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const wrapperScale = useTransform(scrollYProgress, [0.95, 1], [1, 0.92]);
  const wrapperBorderRadius = useTransform(scrollYProgress, [0.95, 1], ["0px", "24px"]);

  // Metin scroll'un sonuna kadar gizli kalsın, son %20'de yukarı kayarak belirsin.
  const textOpacity = useTransform(scrollYProgress, [0, 0.8, 0.92, 1], [0, 0, 1, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.8, 0.92, 1], [28, 28, 0, 0]);
  const textVisibility = useTransform(textOpacity, (v) => (v > 0.01 ? "visible" : "hidden"));

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const cssWidth = window.innerWidth;
    const cssHeight = window.innerHeight;

    canvas.width = cssWidth * dpr;
    canvas.height = cssHeight * dpr;
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;

    const canvasRatio = cssWidth / cssHeight;
    const imgRatio = img.naturalWidth / img.naturalHeight;

    let renderWidth = cssWidth;
    let renderHeight = cssHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderHeight = cssWidth / imgRatio;
      offsetY = (cssHeight - renderHeight) / 2;
    } else {
      renderWidth = cssHeight * imgRatio;
      offsetX = (cssWidth - renderWidth) / 2;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    ctx.restore();
  };

  useEffect(() => {
    let cancelled = false;
    setLoaded(false);
    setLoadingProgress(0);
    imagesRef.current = [];

    let loadedCount = 0;
    const total = frameUrls.length;

    frameUrls.forEach((url, i) => {
      const img = new Image();
      const onSettled = () => {
        if (cancelled) return;
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / total) * 100));
        if (loadedCount === total) {
          setTimeout(() => {
            if (!cancelled) setLoaded(true);
          }, 300);
          drawFrame(0);
        }
      };
      img.onload = onSettled;
      img.onerror = onSettled;
      img.src = url;
      imagesRef.current[i] = img;
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameUrls]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!loaded) return;
    const frameIndex = frameIndexForProgress(latest, frameUrls.length);
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  useEffect(() => {
    const handleResize = () => {
      if (loaded) {
        const frameIndex = frameIndexForProgress(scrollYProgress.get(), frameUrls.length);
        drawFrame(frameIndex);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [loaded, scrollYProgress, frameUrls]);

  return (
    <>
      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--carbon)] text-white"
          >
            <div className="flex flex-col items-center gap-6">
              <div className="relative h-[120px] w-[1px] overflow-hidden bg-white/20">
                <motion.div
                  className="absolute bottom-0 w-full bg-[var(--gold)]"
                  initial={{ height: "0%" }}
                  animate={{ height: `${loadingProgress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <p className="font-display text-sm tracking-[0.3em] uppercase">
                {loadingProgress}%
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 left-0 z-0 flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden origin-center will-change-transform"
        style={{
          scale: wrapperScale,
          borderRadius: wrapperBorderRadius,
        }}
      >
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full object-cover" />

        {/* Metin belirirken devreye giren hafif merkez vinyeti — okunabilirlik için */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: textOpacity,
            background:
              "radial-gradient(circle at 50% 55%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 35%, transparent 62%)",
          }}
        />

        <motion.div
          style={{ opacity: textOpacity, y: textY, visibility: textVisibility as any }}
          className="relative mx-auto max-w-2xl px-6 text-center"
        >
          <h1 className="font-display text-5xl font-medium leading-[1.06] tracking-tight text-white sm:text-6xl md:text-7xl">
            We design the web.
          </h1>

          <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-white/55 sm:text-base">
            Premium web design for brands that refuse to blend in.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--carbon)] transition-transform hover:-translate-y-0.5"
            >
              Book a Free Call
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-white/60">
          Scroll
        </div>
      </motion.div>

      {/* Görünmez kaydırma alanı (scroll spacer) */}
      <section
        ref={containerRef}
        id="top"
        className="relative w-full pointer-events-none"
        style={{ height: `${TOTAL_SCROLL_VH}vh` }}
      />
    </>
  );
}

function Portfolio() {
  return (
    <section id="work" className="noise-texture relative z-10 overflow-hidden bg-background px-6 pt-32 pb-16 sm:pt-48 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-20 max-w-2xl sm:mb-28">
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Selected Work — 2026
            </span>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-6xl">
              Visions turned into
              <span className="text-gold-gradient"> digital reality</span>.
            </h2>
          </div>
        </FadeIn>

        <div className="relative">
          <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {projects.map((p, i) => (
              <li key={p.title} className="relative">
                <ProjectCard project={p} index={i} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.figure
      className="group relative mx-auto w-full max-w-3xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
    >
      <div className="absolute inset-x-0 top-[-30px] flex items-center justify-between px-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        <span>0{index + 1}</span>
        <span className="hidden sm:inline">{project.client}</span>
      </div>

      <motion.div
        className="relative overflow-hidden rounded-[24px] border-2 border-white/40 bg-white/30 shadow-[var(--shadow-glass)] backdrop-blur-xl transition-[border-color,box-shadow] duration-500 ease-out group-hover:border-[var(--hover-color)] group-hover:shadow-[0_0_32px_color-mix(in_oklab,var(--hover-color)_35%,transparent)]"
        style={{
          aspectRatio: "9 / 16",
          "--hover-color": project.hoverColor || "var(--gold)"
        } as React.CSSProperties}
        initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1], delay: index * 0.15 + 0.1 }}
      >
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={project.poster}
            alt={`${project.title} — ${project.client}`}
            width={1280}
            height={800}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        )}

        {/* Reveal overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-end opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(29,29,31,0) 40%, rgba(29,29,31,0.85) 100%)",
            }}
          />
          <div className="relative z-10 w-full p-6 sm:p-8">
            <div className="flex flex-col gap-1 text-white">
              <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">
                {project.client}
              </span>
              <h3 className="font-display text-2xl font-medium tracking-tight sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-2 text-xs text-white/80 sm:text-sm">{project.stack}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile meta (always visible) */}
      <figcaption className="mt-5 flex items-baseline justify-between gap-4 sm:hidden">
        <div className="min-w-0">
          <h3 className="truncate font-display text-xl font-medium tracking-tight">
            {project.title}
          </h3>
          <p className="truncate text-xs text-muted-foreground">{project.client}</p>
        </div>
        <span className="shrink-0 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          0{index + 1}
        </span>
      </figcaption>
    </motion.figure>
  );
}

function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border/40 bg-background px-6 pb-10 pt-24">

      {/* Gold glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-px w-64"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-40 w-96 opacity-15 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
      />

      <div className="relative mx-auto max-w-5xl">

        {/* Two-column layout */}
        <div className="grid gap-16 md:grid-cols-2 md:gap-12">

          {/* LEFT — copy */}
          <div className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Ready to start?</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Let's build something{" "}
              <span className="text-gold-gradient italic">great together.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We're open for new projects. Fill out the form and we'll get back to you within 24 hours.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get("name") as string;
              const email = formData.get("email") as string;
              const phone = formData.get("phone") as string;
              const projectType = formData.get("projectType") as string;
              const message = formData.get("message") as string;

              const mailtoEmail = "yildirimcelik1@gmail.com";
              const subject = encodeURIComponent(`ElevareHub AI - New Project Inquiry from ${name}`);
              const body = encodeURIComponent(
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Phone: ${phone}\n` +
                `Project Type: ${projectType || "Not Specified"}\n\n` +
                `Message:\n${message}`
              );

              window.location.href = `mailto:${mailtoEmail}?subject=${subject}&body=${body}`;
            }}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="rounded-xl border border-border bg-white/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none backdrop-blur-sm transition-colors focus:border-foreground/30 focus:bg-white/80"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  className="rounded-xl border border-border bg-white/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none backdrop-blur-sm transition-colors focus:border-foreground/30 focus:bg-white/80"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                className="rounded-xl border border-border bg-white/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none backdrop-blur-sm transition-colors focus:border-foreground/30 focus:bg-white/80"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Project Type</label>
              <select 
                name="projectType"
                className="rounded-xl border border-border bg-white/60 px-4 py-3 text-sm text-foreground outline-none backdrop-blur-sm transition-colors focus:border-foreground/30 focus:bg-white/80 appearance-none cursor-pointer"
              >
                <option value="">Select a service…</option>
                <option>Landing Page</option>
                <option>Corporate Website</option>
                <option>E-Commerce</option>
                <option>Web App / SaaS</option>
                <option>Brand Identity</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project…"
                required
                className="resize-none rounded-xl border border-border bg-white/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none backdrop-blur-sm transition-colors focus:border-foreground/30 focus:bg-white/80"
              />
            </div>

            <button
              type="submit"
              className="mt-1 w-full rounded-xl bg-foreground py-3.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              Send Message →
            </button>
          </form>

        </div>

        {/* Divider */}
        <div className="mt-20 h-px w-full bg-border/60" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-[11px] text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} ElevareHub AI</p>

        </div>

      </div>
    </footer>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      desc: "We analyze your goals and brand identity to craft a tailor-made roadmap for success.",
    },
    {
      num: "02",
      title: "Design & Development",
      desc: "We build high-performance, aesthetically flawless interfaces using modern technologies.",
    },
    {
      num: "03",
      title: "Delivery & Launch",
      desc: "After rigorous testing, we deploy your project and hand you the keys to your new digital home.",
    },
  ];

  return (
    <section id="how" className="relative bg-background px-4 pt-16 pb-24 sm:px-8 sm:pt-20 sm:pb-32">
      {/* Section Divider */}
      <div className="absolute inset-x-0 top-0 mx-auto max-w-5xl h-px bg-border/60" />
      
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">The Process</span>
            <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
              How it <span className="text-gold-gradient italic">works.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 200}>
              <div
                className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-white/40 bg-white/30 p-8 shadow-[var(--shadow-glass)] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[var(--gold)] hover:shadow-[0_0_32px_color-mix(in_oklab,var(--gold)_35%,transparent)]"
              >
                <div className="mb-12 text-5xl font-display text-muted-foreground/30 transition-colors duration-500 group-hover:text-[var(--gold)]">
                  {step.num}
                </div>
                <div>
                  <h3 className="mb-3 font-display text-xl tracking-tight text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const features = [
    {
      icon: <Search className="size-6" />,
      title: "Technical SEO",
      desc: "Semantic HTML and SSR for optimal indexability, ensuring your content is easily discovered by search engines.",
    },
    {
      icon: <Layers className="size-6" />,
      title: "Modern Architecture",
      desc: "Built with the latest frameworks to deliver dynamic, responsive, and highly maintainable user interfaces.",
    },
    {
      icon: <Zap className="size-6" />,
      title: "Optimized Performance",
      desc: "Minimal payloads and highly optimized assets to ensure sub-second load times and smooth interactions.",
    },
    {
      icon: <Shield className="size-6" />,
      title: "Clean & Secure Code",
      desc: "A strictly typed, well-documented codebase adhering to the highest modern security standards.",
    },
  ];

  return (
    <section id="why" className="relative bg-background px-4 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Engineering Excellence</span>
            <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Built with <span className="text-gold-gradient italic">precision.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              We focus on robust architecture, modern technologies, and clean code to build digital assets that perform flawlessly.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FadeIn key={i} delay={i * 200}>
              <div
                className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-white/20 bg-white/10 p-6 shadow-[var(--shadow-glass)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)] hover:bg-white/20 hover:shadow-[0_0_24px_color-mix(in_oklab,var(--gold)_20%,transparent)]"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-white/10 text-muted-foreground transition-colors duration-300 group-hover:bg-[var(--gold)]/20 group-hover:text-[var(--gold)]">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="mb-2 font-display text-lg tracking-tight text-foreground">{feature.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
