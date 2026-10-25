"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "motion/react";
import { BIZ, ALL_PHOTOS, CATEGORIES, SERVICES, type Photo } from "@/lib/data";

const fmt = (p: string) => `+91 ${p.slice(0, 5)} ${p.slice(5)}`;
const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
  onClick,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  onClick?: () => void;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      onClick={onClick}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6% 0px" }}
      transition={{ duration: 0.85, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ==========================================================================
   ELEGANT SVG ICONS (For Interactive Buttons & Action Cues)
   ========================================================================== */
function IconArrowUpRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconSparkle({ className }: { className?: string }) {
  return (
    <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.16 1.6 5.97L0 24l6.23-1.63a11.93 11.93 0 0 0 5.83 1.51h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.43zM12.07 21.88h-.01c-1.8 0-3.56-.48-5.1-1.39l-.37-.22-3.79.99 1.01-3.69-.24-.38a9.92 9.92 0 0 1-1.52-5.22c0-5.5 4.47-9.97 9.98-9.97 2.66 0 5.16 1.04 7.04 2.92a9.88 9.88 0 0 1 2.92 7.04c0 5.5-4.48 9.92-9.92 9.92zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function IconChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function IconInspect({ className }: { className?: string }) {
  return (
    <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconGridGallery({ className }: { className?: string }) {
  return (
    <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

/* ==========================================================================
   NAVIGATION
   ========================================================================== */
export function Nav() {
  const [solid, setSolid] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = [
    ["/", "Home"],
    ["/work", "Work"],
    ["/services", "Services"],
    ["/contact", "Contact"],
  ];

  return (
    <header className={`nav ${solid ? "nav--solid" : ""}`}>
      <Link href="/" className="brand" aria-label="Mahadev Events, home">
        Mahadev<span> Events</span>
      </Link>
      <nav aria-label="Primary" className="nav__links">
        {links.map(([h, l]) => (
          <Link key={h} href={h} aria-current={path === h ? "page" : undefined}>
            {l}
          </Link>
        ))}
      </nav>
      <Link className="btn btn--sm" href="/contact">
        <span>Inquire</span>
        <IconArrowUpRight className="btn-icon--up-right" />
      </Link>
    </header>
  );
}

/* ==========================================================================
   HERO SECTION
   With Brown Designed Architectural Arc Structure and flagship Stage centerpiece!
   ========================================================================== */
function Arch({
  p,
  className,
  y,
  sizes,
  priority,
  isMiddle,
}: {
  p: Photo;
  className?: string;
  y?: ReturnType<typeof useTransform<number, number>>;
  sizes: string;
  priority?: boolean;
  isMiddle?: boolean;
}) {
  return (
    <motion.div className={`arch-wrap ${className ?? ""}`} style={y ? { y } : undefined}>
      {/* Brown Designed Architectural Arc Structure sitting above each image */}
      <div className={`arch-crown ${isMiddle ? "arch-crown--lead" : ""}`} aria-hidden>
        <svg
          viewBox="0 0 240 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arch-crown__svg"
        >
          {/* Outer Ornamental Cusped Arch in Royal Bronze Brown */}
          <path
            d="M 12 76 Q 30 50, 48 56 Q 72 32, 96 42 Q 120 10, 144 42 Q 168 32, 192 56 Q 210 50, 228 76"
            stroke="url(#brown-grad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Inner concentric fine tracing */}
          <path
            d="M 22 76 Q 38 56, 54 62 Q 76 42, 98 50 Q 120 22, 142 50 Q 164 42, 186 62 Q 202 56, 218 76"
            stroke="#a6713e"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Central Royal Finial / Kalash Crest Apex */}
          <path
            d="M 120 4 L 125 16 L 120 22 L 115 16 Z"
            fill="url(#brown-finial)"
            stroke="#5a341a"
            strokeWidth="1"
          />
          <circle cx="120" cy="4" r="2.5" fill="#c69a4c" />
          <circle cx="120" cy="28" r="3" fill="#8c582c" />
          {/* Ornate Scallop Accents */}
          <circle cx="48" cy="56" r="2.5" fill="#8c582c" />
          <circle cx="96" cy="42" r="2.5" fill="#8c582c" />
          <circle cx="144" cy="42" r="2.5" fill="#8c582c" />
          <circle cx="192" cy="56" r="2.5" fill="#8c582c" />
          {/* Linear Gradients */}
          <defs>
            <linearGradient id="brown-grad" x1="12" y1="76" x2="228" y2="76" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5c341b" />
              <stop offset="50%" stopColor="#8f5c32" />
              <stop offset="100%" stopColor="#5c341b" />
            </linearGradient>
            <linearGradient id="brown-finial" x1="120" y1="4" x2="120" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c69a4c" />
              <stop offset="100%" stopColor="#6b3e20" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <figure className="arch">
        <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes={sizes} priority={priority} />
      </figure>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const a = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const b = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const c = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -130]);

  // Trio composition: Left (Haldi), Middle (Grand Petal Pillar Stage!), Right (Bougainvillea Gate)
  const p1 = ALL_PHOTOS.find((p) => p.id === "haldi") || ALL_PHOTOS[0];
  const p2 = ALL_PHOTOS.find((p) => p.id === "stage") || ALL_PHOTOS[0];
  const p3 = ALL_PHOTOS.find((p) => p.id === "bougain") || ALL_PHOTOS[2];

  return (
    <section id="top" className="hero" ref={ref}>
      <div className="hero__glow" aria-hidden />
      <div className="hero__copy">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9 }}
        >
          Event Decoration · Khatauli
        </motion.p>
        <h1>
          {["Celebrations,", "dressed in", "colour & light."].map((l, i) => (
            <span className="line" key={l}>
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.15, ease, delay: 0.2 + i * 0.12 }}
                className={i === 2 ? "it" : undefined}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9, ease }}
        >
          Mahadev Events sculpts stages, entrance walkways, haldi courtyards, residential facades,
          and milestone birthdays across Khatauli & Western UP, tailored to feel like your family&apos;s own occasion.
        </motion.p>
        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.85 }}
        >
          <Link className="btn" href="/contact">
            <span>Share your event</span>
            <IconSparkle className="btn-icon--scale" />
          </Link>
          <Link className="btn btn--ghost" href="/work">
            <span>Explore the portfolio</span>
            <IconArrowRight />
          </Link>
        </motion.div>
      </div>

      <div className="hero__arches" aria-hidden={false}>
        {/* Grand Overarching Heritage Brown Canopy Arc Structure */}
        <div className="hero__arc-canopy" aria-hidden>
          <svg viewBox="0 0 1000 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero__arc-canopy-svg">
            <path
              d="M 50 130 C 180 30, 380 8, 500 8 C 620 8, 820 30, 950 130"
              stroke="url(#canopy-brown)"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 70 130 C 200 42, 390 22, 500 22 C 610 22, 800 42, 930 130"
              stroke="#b58251"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="500" cy="8" r="4.5" fill="#c69a4c" />
            <circle cx="340" cy="38" r="3" fill="#8c582c" />
            <circle cx="660" cy="38" r="3" fill="#8c582c" />
            <defs>
              <linearGradient id="canopy-brown" x1="50" y1="130" x2="950" y2="130" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6e4224" stopOpacity="0.25" />
                <stop offset="25%" stopColor="#8f5c32" />
                <stop offset="50%" stopColor="#5a341a" />
                <stop offset="75%" stopColor="#8f5c32" />
                <stop offset="100%" stopColor="#6e4224" stopOpacity="0.25" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <Arch p={p1} className="arch--l" y={a} sizes="(max-width:900px) 34vw, 18vw" priority />
        <Arch p={p2} className="arch--m" y={b} sizes="(max-width:900px) 38vw, 22vw" priority isMiddle />
        <Arch p={p3} className="arch--r" y={c} sizes="(max-width:900px) 34vw, 18vw" priority />
      </div>

      <div className="scrollcue" aria-hidden>
        <i />
      </div>
    </section>
  );
}

/* ==========================================================================
   STATEMENT SECTION
   ========================================================================== */
export function Statement() {
  const words =
    "Every celebration has a colour it wants to be. We listen for it, then build it: fabric, flowers, lights and craft, down to the last detail.".split(
      " "
    );

  return (
    <section className="statement">
      <p>
        {words.map((w, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0.14 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.55, delay: (i % 7) * 0.04 }}
          >
            {w}{" "}
          </motion.span>
        ))}
      </p>
    </section>
  );
}

/* ==========================================================================
   3D CIRCLE SHOWCASE (Main Page: "Selected celebrations / Moments we've dressed")
   A true 3D rotating cylinder of celebrations with working auto-spin, 
   flanking left/right circular buttons, and direct card click to inspect!
   ========================================================================== */
export function CelebrationCircle3D() {
  const items = ALL_PHOTOS;
  const total = items.length;
  const theta = 360 / total;

  const [radius, setRadius] = useState(480);
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

  const wheelRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef<number>(0);
  const targetAngleRef = useRef<number | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // HUD element refs for zero-overhead DOM text updates (never triggers React re-renders)
  const hudCounterRef = useRef<HTMLSpanElement>(null);
  const hudTitleRef = useRef<HTMLElement>(null);
  const hudCategoryRef = useRef<HTMLSpanElement>(null);
  const activeIdxRef = useRef<number>(0);

  // Responsive radius calculation
  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 560) setRadius(270);
      else if (w < 900) setRadius(360);
      else if (w < 1200) setRadius(440);
      else setRadius(500);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // Silky 60fps/120fps Animation Loop:
  // Continuous, uninterrupted smooth auto-spin! Never pauses on hover.
  useEffect(() => {
    let lastTime = performance.now();
    const SPEED = 13; // degrees per second

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      if (targetAngleRef.current !== null) {
        // Smoothly rotate to commanded card from left/right buttons
        const diff = targetAngleRef.current - angleRef.current;
        if (Math.abs(diff) < 0.05) {
          angleRef.current = targetAngleRef.current;
          targetAngleRef.current = null;
        } else {
          angleRef.current += diff * 0.12;
        }
      } else {
        // Continuous uninterrupted smooth auto-spin
        angleRef.current -= SPEED * dt;
      }

      // Direct GPU transform update
      if (wheelRef.current) {
        wheelRef.current.style.transform = `rotateX(-3deg) rotateY(${angleRef.current}deg)`;
      }

      // Update HUD elements directly in DOM without React re-renders
      const normalized = ((-angleRef.current % 360) + 360) % 360;
      const currentIdx = Math.round(normalized / theta) % total;
      if (currentIdx !== activeIdxRef.current) {
        activeIdxRef.current = currentIdx;
        const p = items[currentIdx];
        if (hudCounterRef.current) {
          hudCounterRef.current.textContent = `${String(currentIdx + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
        }
        if (hudTitleRef.current) {
          hudTitleRef.current.textContent = p.title;
        }
        if (hudCategoryRef.current) {
          hudCategoryRef.current.textContent = `· ${p.categoryLabel}`;
        }
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [theta, total, items]);

  const rotateTo = (targetIdx: number) => {
    const currentAngle = angleRef.current;
    const targetDeg = -targetIdx * theta;
    // Calculate shortest rotational difference
    const diff = ((targetDeg - currentAngle) % 360 + 540) % 360 - 180;
    targetAngleRef.current = currentAngle + diff;
  };

  return (
    <section id="celebrations" className="showcase-3d-wrap" aria-label="3D Celebration Showcase">
      <Reveal className="sechead">
        <p className="eyebrow">Selected celebrations</p>
        <h2>
          Moments we&apos;ve <em>dressed</em>
        </h2>
        <p className="sub">
          An interactive 3D circle of our handcrafted wedding stages, entrance gateways,
          and celebratory facades in Khatauli. Tap any photograph to inspect.
        </p>
      </Reveal>

      {/* 3D Stage Wrapper with Flanking Left & Right Buttons */}
      <div className="stage-3d-wrapper">
        <button
          className="circle-arrow circle-arrow--left"
          onClick={() => rotateTo((activeIdxRef.current + 1) % total)}
          aria-label="Previous celebration"
        >
          <IconChevronLeft />
        </button>

        {/* 3D Stage Canvas */}
        <div className="stage-3d">
          {/* Ambient Pedestal Floor Glow */}
          <div className="pedestal-3d" aria-hidden />

          {/* 3D Rotating Wheel Cylinder */}
          <div className="wheel-3d" ref={wheelRef}>
            {items.map((p, i) => {
              const cardAngle = i * theta;

              return (
                <div
                  key={p.id}
                  className="card-3d"
                  style={{
                    transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                  }}
                  onClick={() => setLightboxPhoto(p)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Inspect ${p.title}, ${p.categoryLabel}`}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={p.w}
                    height={p.h}
                    sizes="(max-width:640px) 200px, 280px"
                    priority={i < 4}
                  />
                  <div className="card-3d__caption">
                    <small>{p.kind}</small>
                    <span>{p.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          className="circle-arrow circle-arrow--right"
          onClick={() => rotateTo((activeIdxRef.current - 1 + total) % total)}
          aria-label="Next celebration"
        >
          <IconChevronRight />
        </button>
      </div>

      {/* Clean Status HUD */}
      <div className="controls-3d">
        <div className="controls-3d__info">
          <span className="controls-3d__counter" ref={hudCounterRef}>
            01 / {String(total).padStart(2, "0")}
          </span>
          <div className="controls-3d__title">
            <strong ref={hudTitleRef}>{items[0].title}</strong>
            <span ref={hudCategoryRef}>· {items[0].categoryLabel}</span>
          </div>
        </div>
      </div>

      <div className="showcase-3d__footer">
        <Link className="btn btn--ghost" href="/work">
          <span>View full curated portfolio ({total} installations)</span>
          <IconGridGallery />
        </Link>
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <LightboxModal
          photo={lightboxPhoto}
          photos={items}
          onClose={() => setLightboxPhoto(null)}
          onNavigate={(p) => setLightboxPhoto(p)}
        />
      )}
    </section>
  );
}

/* ==========================================================================
   WORK PAGE ARCHIVE — STICKY OVERLAPPING ALTERNATING ROWS
   After editorial story & design pillars, each of the 11 celebrations is 
   showcased in a 2-section row (Detail & Image) that alternates positions 
   and sticks on scroll, with subsequent rows overlapping the previous ones!
   ========================================================================== */
export function WorkArchive() {
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

  return (
    <div className="work-page-wrap">
      {/* Editorial Story & Narrative before Photos */}
      <section className="work-narrative">
        <Reveal className="work-story-grid">
          <div>
            <p className="eyebrow">Our Design Philosophy</p>
            <h2>
              The Art of the <em>Occasion</em>
            </h2>
          </div>
          <div>
            <p>
              At Mahadev Events, we believe an occasion is more than an event—it is your family&apos;s
              lasting milestone. Our practice unites traditional ceremonial grandeur with contemporary
              editorial scenography.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Every flower cascade is hand-strung, every silk drape is tailored to the venue&apos;s
              architecture, and every warm amber light is placed to make your celebration feel both regal
              and intimately unforgettable across Khatauli, Muzaffarnagar & Western UP.
            </p>
          </div>
        </Reveal>

        {/* 3 Architectural Design Pillars */}
        <div className="pillars-grid">
          <Reveal delay={0.05} className="pillar-card">
            <span className="pillar-card__n">01 / ARCHITECTURE</span>
            <h3>Scenic Proportion</h3>
            <p>
              We shape stages and mandaps around your venue&apos;s scale, crafting balanced focal points
              that look breathtaking in real life and high-definition photography.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="pillar-card">
            <span className="pillar-card__n">02 / BOTANICALS</span>
            <h3>Flowers & Heavy Silks</h3>
            <p>
              Layered marigold garlands, fresh bougainvillea cascades, imported orchids, and satin drapes
              hand-pleated into luxurious palettes.
            </p>
          </Reveal>
          <Reveal delay={0.19} className="pillar-card">
            <span className="pillar-card__n">03 / ATMOSPHERE</span>
            <h3>Luminous Illumination</h3>
            <p>
              From candlelit haldi corners to 50-foot exterior architectural light washes that turn your
              residence into the heart of the entire neighbourhood.
            </p>
          </Reveal>
        </div>

        {/* Curator's Trust Metrics Strip */}
        <Reveal delay={0.25} className="stats-band">
          <div className="stat-item">
            <h4>250+</h4>
            <p>Celebrations Curated</p>
          </div>
          <div className="stat-item">
            <h4>10+ Yrs</h4>
            <p>Master Craftsmanship</p>
          </div>
          <div className="stat-item">
            <h4>100%</h4>
            <p>Bespoke Setups</p>
          </div>
          <div className="stat-item">
            <h4>Khatauli & UP</h4>
            <p>Regional Excellence</p>
          </div>
        </Reveal>
      </section>

      {/* Intro Heading to the Sticky Stacking Showcase */}
      <section className="stack-deck-intro">
        <Reveal>
          <p className="eyebrow">The Complete Archive · 11 Installations</p>
          <h2>
            Curated <em>Portfolio</em>
          </h2>
          <p className="sub">
            Scroll to discover each celebration. Each row locks in place as the next row smoothly glides and overlaps over it.
          </p>
        </Reveal>
      </section>

      {/* The Sticky Stacking Alternating Rows Showcase */}
      <section className="stack-deck">
        {ALL_PHOTOS.map((photo, index) => {
          const isReverse = index % 2 === 1; // Alternates: even = Detail Left / Image Right; odd = Image Left / Detail Right
          const numStr = String(index + 1).padStart(2, "0");
          const waInquiry = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
            `Hello Mahadev Events, I saw "${photo.title}" (${photo.categoryLabel}) on your work archive and would love to plan a similar decoration.`
          )}`;

          return (
            <div
              key={photo.id}
              className={`stack-card ${isReverse ? "stack-card--reverse" : ""}`}
              style={{
                top: "clamp(84px, 11vh, 108px)",
                zIndex: index + 1,
              }}
            >
              {/* Detail Section */}
              <div className="stack-card__detail">
                <div className="stack-card__header">
                  <span className="stack-card__num">{numStr}</span>
                  <span className="stack-card__badge">{photo.categoryLabel}</span>
                </div>

                <div className="stack-card__body">
                  <h3 className="stack-card__title">{photo.title}</h3>
                  <p className="stack-card__story">{photo.story}</p>

                  <dl className="stack-card__meta">
                    <div>
                      <dt>Location</dt>
                      <dd>{photo.location}, UP</dd>
                    </div>
                    <div>
                      <dt>Occasion</dt>
                      <dd>{photo.kind}</dd>
                    </div>
                    <div style={{ gridColumn: "span 2" }}>
                      <dt>Curated Palette</dt>
                      <dd>{photo.palette}</dd>
                    </div>
                  </dl>
                </div>

                <div className="stack-card__actions">
                  <button
                    className="btn btn--sm btn--gold"
                    onClick={() => setLightboxPhoto(photo)}
                  >
                    <span>Inspect Photograph</span>
                    <IconInspect />
                  </button>
                  <a
                    className="btn btn--sm btn--ghost"
                    href={waInquiry}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconWhatsApp />
                    <span>Plan on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Photo Image Section */}
              <div
                className="stack-card__media"
                onClick={() => setLightboxPhoto(photo)}
                role="button"
                tabIndex={0}
                aria-label={`Inspect ${photo.title}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width:900px) 100vw, 50vw"
                  priority={index < 2}
                />
                <div className="stack-card__media-overlay">
                  <span className="stack-card__media-hint">
                    <span>Click to inspect</span> ↗
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <LightboxModal
          photo={lightboxPhoto}
          photos={ALL_PHOTOS}
          onClose={() => setLightboxPhoto(null)}
          onNavigate={(p) => setLightboxPhoto(p)}
        />
      )}
    </div>
  );
}

/* ==========================================================================
   LIGHTBOX MODAL
   ========================================================================== */
function LightboxModal({
  photo,
  photos,
  onClose,
  onNavigate,
}: {
  photo: Photo;
  photos: Photo[];
  onClose: () => void;
  onNavigate: (p: Photo) => void;
}) {
  const currentIndex = photos.findIndex((p) => p.id === photo.id);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        const next = (currentIndex + 1) % photos.length;
        onNavigate(photos[next]);
      }
      if (e.key === "ArrowLeft") {
        const prev = (currentIndex - 1 + photos.length) % photos.length;
        onNavigate(photos[prev]);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [currentIndex, photos, onClose, onNavigate]);

  const waInquiry = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hello Mahadev Events, I saw "${photo.title}" (${photo.categoryLabel}) on your website and would love to discuss a similar decoration for our upcoming celebration.`
  )}`;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        className="lb__close"
        onClick={onClose}
        aria-label="Close image inspector"
      >
        <IconClose />
      </button>

      <button
        className="lb__nav lb__prev"
        onClick={(e) => {
          e.stopPropagation();
          const prev = (currentIndex - 1 + photos.length) % photos.length;
          onNavigate(photos[prev]);
        }}
        aria-label="Previous photograph"
      >
        <IconChevronLeft />
      </button>

      <motion.div
        key={photo.id}
        className="lb__body"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.35, ease }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lb__media">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.w}
            height={photo.h}
            sizes="75vw"
            priority
          />
        </div>
        <div className="lb__info">
          <div>
            <div className="lb__header">
              <p className="eyebrow">{photo.categoryLabel}</p>
              <h3>{photo.title}</h3>
            </div>
            <p className="lb__desc">{photo.story}</p>
            <dl className="lb__specs">
              <div>
                <dt>Location</dt>
                <dd>{photo.location}</dd>
              </div>
              <div>
                <dt>Occasion</dt>
                <dd>{photo.kind}</dd>
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <dt>Curated Palette</dt>
                <dd>{photo.palette}</dd>
              </div>
            </dl>
          </div>
          <div className="lb__actions">
            <a
              className="btn btn--gold"
              href={waInquiry}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp />
              <span>Enquire about this style</span>
            </a>
            <Link className="btn btn--ghost" href="/contact" onClick={onClose}>
              <span>Book Consultation</span>
              <IconArrowUpRight className="btn-icon--up-right" />
            </Link>
          </div>
        </div>
      </motion.div>

      <button
        className="lb__nav lb__next"
        onClick={(e) => {
          e.stopPropagation();
          const next = (currentIndex + 1) % photos.length;
          onNavigate(photos[next]);
        }}
        aria-label="Next photograph"
      >
        <IconChevronRight />
      </button>
    </div>
  );
}

/* ==========================================================================
   CINEMA SECTION
   ========================================================================== */
export function Cinema() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-10%", "10%"]);

  const nightPhoto = ALL_PHOTOS.find((p) => p.id === "night") || ALL_PHOTOS[0];

  return (
    <section className="cinema" ref={ref} aria-label="Night facade decoration">
      <motion.div className="cinema__img" style={{ y }}>
        <Image src={nightPhoto.src} alt={nightPhoto.alt} fill sizes="100vw" />
      </motion.div>
      <div className="cinema__veil" />
      <Reveal className="cinema__text">
        <p>
          When the lights come on,
          <br />
          <em>the whole street celebrates.</em>
        </p>
      </Reveal>
    </section>
  );
}

/* ==========================================================================
   SERVICES SECTION
   ========================================================================== */
export function Services({ head = true }: { head?: boolean }) {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="services">
      {head && (
        <Reveal className="sechead">
          <p className="eyebrow">What we do</p>
          <h2>
            Decoration, <em>personalised</em>
          </h2>
        </Reveal>
      )}
      <div className="services__grid">
        <ul className="svc" onMouseLeave={() => setActive(0)}>
          {SERVICES.map((s, i) => (
            <li
              key={s.n}
              className={active === i ? "on" : ""}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
            >
              <span className="svc__n">{s.n}</span>
              <div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
              <div className="svc__thumb">
                <Image src={s.img.src} alt="" width={s.img.w} height={s.img.h} sizes="60vw" />
              </div>
            </li>
          ))}
        </ul>
        <div className="svc__stage" aria-hidden>
          {SERVICES.map((s, i) => (
            <Image
              key={s.n}
              src={s.img.src}
              alt=""
              width={s.img.w}
              height={s.img.h}
              sizes="30vw"
              className={active === i ? "on" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   CONTACT SECTION
   ========================================================================== */
export function Contact() {
  const [f, setF] = useState({ name: "", type: "Wedding", date: "", place: "", note: "" });
  const set =
    (k: keyof typeof f) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setF({ ...f, [k]: e.target.value });

  const body = () =>
    [
      "Hello Mahadev Events, I'd like to plan a celebration.",
      `Name: ${f.name || "-"}`,
      `Occasion: ${f.type}`,
      `Date: ${f.date || "not decided"}`,
      `Venue / area: ${f.place || "-"}`,
      `Details: ${f.note || "-"}`,
    ].join("\n");

  const wa = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(body())}`;
  const mail = `mailto:${BIZ.email}?subject=${encodeURIComponent(
    `Event enquiry: ${f.type}`
  )}&body=${encodeURIComponent(body())}`;

  return (
    <section id="contact" className="contact">
      <Reveal className="contact__head">
        <ul className="channels">
          {BIZ.phones.map((p) => (
            <li key={p}>
              <span>Call</span>
              <a href={`tel:+91${p}`}>{fmt(p)}</a>
            </li>
          ))}
          <li>
            <span>WhatsApp</span>
            <a href={`https://wa.me/${BIZ.whatsapp}`} target="_blank" rel="noopener noreferrer">
              {fmt(BIZ.phones[0])}
            </a>
          </li>
          <li>
            <span>Email</span>
            <a href={`mailto:${BIZ.email}`}>{BIZ.email}</a>
          </li>
          <li>
            <span>Instagram</span>
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer">
              {BIZ.handle}
            </a>
          </li>
          <li>
            <span>Find us</span>
            <address>{BIZ.address}</address>
          </li>
        </ul>
      </Reveal>
      <Reveal delay={0.1} className="formwrap">
        <form id="enquire" onSubmit={(e) => e.preventDefault()} aria-label="Event enquiry">
          <label>
            Your name
            <input
              value={f.name}
              onChange={set("name")}
              autoComplete="name"
              placeholder="e.g. Rahul Sharma"
            />
          </label>
          <div className="row">
            <label>
              Occasion
              <select value={f.type} onChange={set("type")}>
                {[
                  "Wedding",
                  "Haldi / Mehndi",
                  "Home Facade decoration",
                  "Birthday & Milestone",
                  "Other Celebration",
                ].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label>
              Date
              <input type="date" value={f.date} onChange={set("date")} />
            </label>
          </div>
          <label>
            Venue or area in Khatauli / UP
            <input
              value={f.place}
              onChange={set("place")}
              placeholder="e.g. Aad Saini Nagar / Grand Resort"
            />
          </label>
          <label>
            Your ideas, colours, guest count
            <textarea
              rows={4}
              value={f.note}
              onChange={set("note")}
              placeholder="Tell us about the stage style, floral preferences, or lighting ideas..."
            />
          </label>
          <div className="form__actions">
            <a className="btn btn--gold" href={wa} target="_blank" rel="noopener noreferrer">
              <IconWhatsApp />
              <span>Send on WhatsApp</span>
            </a>
            <a className="btn btn--ghost" href={mail}>
              <IconMail />
              <span>Send by email</span>
            </a>
          </div>
          <p className="fine">
            This opens WhatsApp or your email client with your enquiry details pre-filled. Nothing is stored on this website.
          </p>
        </form>
      </Reveal>
    </section>
  );
}

/* ==========================================================================
   PAGE HEAD (Subpages)
   ========================================================================== */
export function PageHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
}) {
  return (
    <section className="pagehead">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="pagehead__sub"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.9 }}
      >
        {sub}
      </motion.p>
    </section>
  );
}

/* ==========================================================================
   CTA SECTION
   ========================================================================== */
export function CTA() {
  return (
    <section className="cta">
      <Reveal>
        <p className="eyebrow">Your occasion, our craft</p>
        <h2>
          Planning a <em>celebration?</em>
        </h2>
        <div className="hero__cta" style={{ justifyContent: "center" }}>
          <Link className="btn btn--gold" href="/contact">
            <span>Start an enquiry</span>
            <IconSparkle className="btn-icon--scale" />
          </Link>
          <a className="btn btn--ghost" href={`tel:+91${BIZ.phones[0]}`}>
            <IconPhone />
            <span>Call {fmt(BIZ.phones[0])}</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ==========================================================================
   FOOTER
   ========================================================================== */
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div>
          <span className="brand">
            Mahadev<span> Events</span>
          </span>
          <p>{BIZ.address}</p>
        </div>
        <nav aria-label="Footer" className="footer__links">
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </nav>
        <span>© {new Date().getFullYear()} Mahadev Events. All rights reserved.</span>
      </footer>
      <a
        className="fab"
        href={`https://wa.me/${BIZ.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <IconWhatsApp />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
