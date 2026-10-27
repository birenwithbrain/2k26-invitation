"use client";



import { useCallback, useEffect, useRef, useState } from "react";

import type { ReactNode } from "react";

import {

  AnimatePresence,

  motion,

  useReducedMotion,

  useScroll,

  useTransform,

} from "motion/react";

import {

  ArrowDownRight,

  ArrowRight,

  ArrowUpRight,

  CalendarDays,

  MapPin,

  MoveUpRight,

  Sparkles,

} from "lucide-react";



const ease = [0.22, 1, 0.36, 1] as const;

const letters = ["Z", "E", "N", "I", "T", "H"];



function Intro({ onFinish }: { onFinish: () => void }) {

  const reduceMotion = useReducedMotion();



  useEffect(() => {

    if (reduceMotion) {

      const timer = window.setTimeout(onFinish, 500);

      return () => window.clearTimeout(timer);

    }

    const timer = window.setTimeout(onFinish, 3650);

    return () => window.clearTimeout(timer);

  }, [onFinish, reduceMotion]);



  return (

    <motion.div

      className="intro"

      initial={{ opacity: 1 }}

      exit={{ opacity: 0, y: "-4%", transition: { duration: 0.8, ease } }}

    >

      <motion.div

        className="intro-sweep"

        initial={{ x: "-110%", opacity: 0.8 }}

        animate={{ x: "110%", opacity: [0.8, 0.55, 0] }}

        transition={{ duration: 1.4, delay: 0.12, ease }}

      />

      <div className="intro-top">

        <span>SCIENCE COLLEGE · HINJILICUT</span>

        <span>DEPARTMENT OF BCA</span>

      </div>

      <div className="intro-center">

        <motion.p

          className="intro-kicker"

          initial={{ opacity: 0, y: 14, letterSpacing: ".42em" }}

          animate={{ opacity: 1, y: 0, letterSpacing: ".2em" }}

          transition={{ delay: 0.2, duration: 0.75, ease }}

        >

          A NEW CHAPTER BEGINS

        </motion.p>

        <div className="intro-word" aria-label="Zenith">

          <span className="intro-word-line">

            {letters.map((letter, index) => (

              <motion.span

                className="intro-letter"

                key={letter}

                initial={

                  reduceMotion

                    ? false

                    : {

                        y: "125%",

                        opacity: 0,

                        rotateX: -75,

                        filter: "blur(10px)",

                      }

                }

                animate={{ y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)" }}

                transition={{

                  delay: reduceMotion ? 0 : 0.35 + index * 0.095,

                  duration: 0.8,

                  ease,

                }}

              >

                {letter}

              </motion.span>

            ))}

          </span>

        </div>

        <motion.div

          className="intro-rule"

          initial={{ scaleX: 0, opacity: 0.3 }}

          animate={{ scaleX: 1, opacity: 1 }}

          transition={{ delay: 1.15, duration: 0.9, ease }}

        />

        <motion.p

          className="intro-sub"

          initial={{ opacity: 0, y: 8 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ delay: 1.55, duration: 0.65, ease }}

        >

          FRESHERS’ WELCOME · 2026

        </motion.p>

      </div>

      <motion.div

        className="intro-bottom"

        initial={{ opacity: 0, y: 8 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ delay: 1.8, duration: 0.6, ease }}

      >

        <span>LEARN SOMETHING NEW.</span>

        <span>MEET YOUR PEOPLE.</span>

        <span>MAKE IT COUNT.</span>

      </motion.div>

      <motion.div

        className="intro-progress"

        initial={{ scaleX: 0 }}

        animate={{ scaleX: 1 }}

        transition={{ duration: 3.55, ease: "linear" }}

      />

      <button type="button" className="skip-intro" onClick={onFinish}>

        SKIP INTRO <ArrowUpRight size={13} />

      </button>

    </motion.div>

  );

}



function Reveal({

  children,

  delay = 0,

  className = "",

  distance = 30,

}: {

  children: ReactNode;

  delay?: number;

  className?: string;

  distance?: number;

}) {

  const reduceMotion = useReducedMotion();

  return (

    <motion.div

      className={className}

      initial={

        reduceMotion ? false : { opacity: 0, y: distance, filter: "blur(5px)" }

      }

      whileInView={

        reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }

      }

      viewport={{ once: true, amount: 0.16 }}

      transition={{ duration: 0.8, delay, ease }}

    >

      {children}

    </motion.div>

  );

}



function SectionIndex({

  left,

  right,

  light = false,

}: {

  left: string;

  right: string;

  light?: boolean;

}) {

  return (

    <motion.div

      className={`section-index ${light ? "section-index-light" : ""}`}

      initial={{ opacity: 0, y: 15 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true, amount: 0.7 }}

      transition={{ duration: 0.65, ease }}

    >

      <span>{left}</span>

      <span>{right}</span>

    </motion.div>

  );

}



function FlowTicker() {

  const reduceMotion = useReducedMotion();

  const items = ["LEARN", "BUILD", "CONNECT", "GROW", "WELCOME TO ZENITH"];

  const repeated = [...items, ...items];

  return (

    <div className="flow-ticker" aria-label="Learn, build, connect, grow">

      <motion.div

        className="flow-track"

        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}

        transition={{ duration: 28, ease: "linear", repeat: Infinity }}

      >

        {repeated.map((item, index) => (

          <span className="flow-item" key={`${item}-${index}`}>

            {item}

            <b>✳</b>

          </span>

        ))}

      </motion.div>

    </div>

  );

}



function EnergyBloom() {

  const reduceMotion = useReducedMotion();

  const petals = Array.from({ length: 12 }, (_, index) => index);

  return (

    <motion.div

      className="energy-bloom"

      aria-label="A glowing flower symbolising new beginnings"

      initial={reduceMotion ? false : { opacity: 0, scale: 0.78, rotate: -8 }}

      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}

      viewport={{ once: true, amount: 0.3 }}

      transition={{ duration: 1.05, ease }}

      animate={reduceMotion ? undefined : { y: [0, -5, 0] }}

    >

      <motion.svg

        className="energy-bloom-art"

        viewBox="0 0 180 180"

        role="img"

        aria-hidden="true"

        animate={reduceMotion ? undefined : { rotate: [0, 5, 0, -5, 0] }}

        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}

      >

        <defs>

          <radialGradient id="bloom-petal" cx="50%" cy="25%" r="80%">

            <stop offset="0%" stopColor="#f8dfaa" />

            <stop offset="48%" stopColor="#d8b875" />

            <stop offset="100%" stopColor="#8e4b4e" />

          </radialGradient>

          <radialGradient id="bloom-core" cx="35%" cy="25%" r="80%">

            <stop offset="0%" stopColor="#fff2c9" />

            <stop offset="55%" stopColor="#e2bd70" />

            <stop offset="100%" stopColor="#9e603e" />

          </radialGradient>

          <filter id="bloom-glow" x="-70%" y="-70%" width="240%" height="240%">

            <feGaussianBlur stdDeviation="5" result="blur" />

            <feMerge>

              <feMergeNode in="blur" />

              <feMergeNode in="SourceGraphic" />

            </feMerge>

          </filter>

        </defs>

        <g

          className="bloom-rays"

          stroke="#d8b875"

          strokeWidth=".8"

          opacity=".6"

        >

          {Array.from({ length: 20 }, (_, i) => (

            <line

              key={i}

              x1="90"

              y1="10"

              x2="90"

              y2="19"

              transform={`rotate(${i * 18} 90 90)`}

            />

          ))}

        </g>

        <g className="bloom-petals">

          {petals.map((index) => (

            <ellipse

              key={index}

              className={`bloom-petal bloom-petal-${index % 3}`}

              cx="90"

              cy={index % 3 === 0 ? "51" : "55"}

              rx={index % 3 === 0 ? "13" : "11"}

              ry={index % 3 === 0 ? "33" : "29"}

              transform={`rotate(${index * 30} 90 90)`}

              fill={index % 2 === 0 ? "url(#bloom-petal)" : "#651e32"}

              stroke="#d8b875"

              strokeWidth=".8"

              style={{ animationDelay: `${index * 55}ms` }}

            />

          ))}

        </g>

        <g className="bloom-inner-petals" opacity=".96">

          {Array.from({ length: 8 }, (_, index) => (

            <ellipse

              key={index}

              cx="90"

              cy="68"

              rx="8"

              ry="19"

              transform={`rotate(${index * 45 + 22.5} 90 90)`}

              fill={index % 2 ? "#8f3e48" : "#e6c986"}

              stroke="#f5e5be"

              strokeWidth=".7"

            />

          ))}

        </g>

        <circle

          cx="90"

          cy="90"

          r="21"

          fill="url(#bloom-core)"

          filter="url(#bloom-glow)"

        />

        <circle cx="90" cy="90" r="8" fill="#fff3cc" />

        <path d="M86 90l3-5 3 5-3 5z" fill="#7e3a32" />

        <g fill="#f5e4b9" filter="url(#bloom-glow)">

          <circle cx="36" cy="57" r="2.2" />

          <circle cx="141" cy="48" r="1.8" />

          <circle cx="132" cy="132" r="2.3" />

          <circle cx="47" cy="132" r="1.6" />

        </g>

      </motion.svg>

      <span className="bloom-caption">A LITTLE SPARK FOR WHAT’S AHEAD</span>

    </motion.div>

  );

}



export default function ZenithExperience() {

  const [showWelcomeGate, setShowWelcomeGate] = useState(true);

  const [showIntro, setShowIntro] = useState(false);
  const [siteReady, setSiteReady] = useState(false);

  const [galleryMode, setGalleryMode] = useState(false);

  const [copied, setCopied] = useState(false);



  const musicRef = useRef<HTMLAudioElement | null>(null);
  const reduceMotion = useReducedMotion();

  // Keep the page beneath the welcome gate/intro from scrolling, and keep the
  // handoff background black until the actual website is revealed.
  useEffect(() => {
    const body = document.body;
    const previousBackground = body.style.backgroundColor;
    const previousOverflow = body.style.overflow;

    if (!siteReady) {
      body.style.backgroundColor = "#080708";
      body.style.overflow = "hidden";
    } else {
      body.style.backgroundColor = previousBackground;
      body.style.overflow = previousOverflow;
    }

    return () => {
      body.style.backgroundColor = previousBackground;
      body.style.overflow = previousOverflow;
    };
  }, [siteReady]);

  const heroRef = useRef<HTMLElement | null>(null);

  const whenWhereRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress: heroProgress } = useScroll({

    target: heroRef,

    offset: ["start start", "end start"],

  });

  const { scrollYProgress: whenWhereProgress } = useScroll({

    target: whenWhereRef,

    offset: ["start end", "end start"],

  });

  const titleY = useTransform(heroProgress, [0, 1], [0, 82]);

  const titleOpacity = useTransform(heroProgress, [0, 0.8, 1], [1, 0.8, 0.2]);

  const shapeY = useTransform(heroProgress, [0, 1], [0, 115]);

  const whenWatermarkY = useTransform(whenWhereProgress, [0, 1], [70, -60]);

  const whenLineX = useTransform(whenWhereProgress, [0, 1], ["-12%", "12%"]);

  const pageProgress = useScroll().scrollYProgress;



  const finishIntro = useCallback(() => {
    setShowIntro(false);
    setSiteReady(true);
  }, []);

  const copyVenue = async () => {

    try {

      await navigator.clipboard.writeText(

        "Centenary Hall, Science College (Autonomous), Hinjilicut",

      );

      setCopied(true);

      window.setTimeout(() => setCopied(false), 1800);

    } catch {

      setCopied(false);

    }

  };



  return <>

    <audio ref={musicRef} src="/audio/zenith-theme.mp3" loop preload="auto" />





    <AnimatePresence
      initial={false}
      onExitComplete={() => setShowIntro(true)}
    >
      {showWelcomeGate && (
        <motion.section
          className="welcome-gate"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.99,
            transition: { duration: 0.65, ease },
          }}
          aria-label="Welcome to ZENITH"
        >
          <motion.div
            className="welcome-gate-content"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="welcome-eyebrow">
              SCIENCE COLLEGE · BCA DEPARTMENT
            </p>

            <h1>A little surprise awaits.</h1>

            <p className="welcome-subtitle">
              An invitation to celebrate new beginnings.
            </p>

            <motion.button
              type="button"
              className="reveal-surprise"
              whileHover={reduceMotion ? undefined : { scale: 1.04 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              onClick={() => {
                // Start playback synchronously in this user gesture so browsers
                // that block autoplay can permit the soundtrack here.
                const audio = musicRef.current;
                if (audio) {
                  audio.volume = 0.28;
                  void audio.play().catch(() => {
                    // Continue into the site even if the audio file cannot play.
                  });
                }
                setShowWelcomeGate(false);
              }}
            >
              <span>REVEAL SURPRISE</span>
              <ArrowRight size={16} aria-hidden="true" />
            </motion.button>

            <p className="welcome-footnote">
              A quiet beginning. A little glow. Then ZENITH.
            </p>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>

    <motion.div
      className="page-progress"
      style={{ scaleX: pageProgress, visibility: siteReady ? "visible" : "hidden" }}
    />

      <AnimatePresence>

        {showIntro && <Intro onFinish={finishIntro} />}

      </AnimatePresence>



      <main
        className="site-shell"
        style={{ visibility: siteReady ? "visible" : "hidden" }}
        aria-hidden={!siteReady}
      >

        <motion.header

          className="nav"

          initial={false}

          animate={showIntro ? { opacity: 0, y: -18 } : { opacity: 1, y: 0 }}

          transition={{ duration: 0.7, ease }}

        >

          <motion.a

            className="wordmark"

            href="#top"

            whileHover={{ scale: 1.08, rotate: -5 }}

            transition={{ type: "spring", stiffness: 300 }}

          >

            Z<span>.</span>

          </motion.a>

          <span className="nav-center">

            BCA DEPARTMENT <i>×</i> FRESHERS’ WELCOME

          </span>

          <motion.a

            className="nav-link"

            href="#invitation"

            whileHover={{ x: 4 }}

          >

            THE INVITATION <ArrowUpRight size={14} />

          </motion.a>

        </motion.header>



        <section className="hero" id="top" ref={heroRef}>

          <div className="hero-meta">

            <Reveal distance={12}>

              <span>SCIENCE COLLEGE (AUTONOMOUS)</span>

            </Reveal>

            <Reveal delay={0.08} distance={12}>

              <span>HINJILICUT · ODISHA</span>

            </Reveal>

          </div>

          <motion.div

            className="hero-title-wrap"

            style={

              reduceMotion ? undefined : { y: titleY, opacity: titleOpacity }

            }

          >

            <motion.p

              className="eyebrow"

              initial={{ opacity: 0, x: -18 }}

              animate={

                showIntro ? { opacity: 0, x: -18 } : { opacity: 1, x: 0 }

              }

              transition={{ delay: 0.06, duration: 0.7, ease }}

            >

              <span className="eyebrow-dot" /> A CELEBRATION OF NEW BEGINNINGS

            </motion.p>

            <h1 className="hero-title" aria-label="A warm welcome">

              <span className="hero-mask">

                <motion.span

                  className="hero-line"

                  initial={{ y: "115%" }}

                  animate={showIntro ? { y: "115%" } : { y: 0 }}

                  transition={{ delay: 0.06, duration: 0.88, ease }}

                >

                  A WARM

                </motion.span>

              </span>

              <span className="hero-mask hero-mask-second">

                <motion.span

                  className="hero-line hero-line-2"

                  initial={{ y: "120%" }}

                  animate={showIntro ? { y: "120%" } : { y: 0 }}

                  transition={{ delay: 0.19, duration: 0.95, ease }}

                >

                  <em>WELCOME.</em>

                </motion.span>

              </span>

            </h1>

            <motion.div

              className="hero-side-note"

              initial={{ opacity: 0, x: 15 }}

              animate={showIntro ? { opacity: 0, x: 15 } : { opacity: 1, x: 0 }}

              transition={{ delay: 0.45, duration: 0.8, ease }}

            >

              CELEBRATING

              <br />

              NEW BEGINNINGS.

            </motion.div>

          </motion.div>

          <div className="hero-bottom">

            <Reveal delay={0.15} distance={16}>

              <p>

                A new batch, welcomed with care.

                <br />A shared future, shaped together.

              </p>

            </Reveal>

            <motion.a

              className="round-link"

              href="#story"

              aria-label="Scroll to discover"

              whileHover={{

                rotate: 45,

                scale: 1.08,

                backgroundColor: "#d8b875",

                color: "#0d0a0c",

              }}

              whileTap={{ scale: 0.92 }}

            >

              <ArrowDownRight size={23} />

            </motion.a>

            <span className="hero-index">

              01 <i>/</i> 05

            </span>

          </div>

          <motion.div

            className="hero-block hero-block-one"

            style={reduceMotion ? undefined : { y: shapeY }}

            animate={

              reduceMotion ? undefined : { rotate: [0, 2.5, 0], x: [0, -12, 0] }

            }

            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}

          />

          <motion.div

            className="hero-block hero-block-two"

            animate={

              reduceMotion

                ? undefined

                : { rotate: [0, -2, 0], scale: [1, 1.05, 1] }

            }

            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}

          />

          <span className="vertical-label">WELCOME TO ZENITH · 2026</span>

        </section>



        <FlowTicker />



        <section className="manifesto" id="story">

          <SectionIndex

            left="01 / THE BEGINNING"

            right="EVERY STORY STARTS SOMEWHERE."

          />

          <div className="manifesto-content">

            <Reveal>

              <p className="manifesto-small">FOR EVERY FIRST HELLO.</p>

              <h2>

                A ROOM FULL

                <br />

                OF <span>POSSIBILITY.</span>

              </h2>

            </Reveal>

            <Reveal delay={0.13}>

              <div className="manifesto-copy">

                <p>

                  Every new chapter starts somewhere: a first hello, a familiar

                  smile, a room where strangers begin to feel like a community.

                </p>

                <p>

                  With ZENITH, the BCA Department warmly invites our respected

                  faculty and dear students to welcome the newest members of the

                  BCA family. Come share the moment, make someone feel at home,

                  and help turn a first day into a story worth keeping.

                </p>

                <span className="signature">

                  WITH WARM REGARDS, THE BCA DEPARTMENT <b>✳</b>

                </span>

              </div>

            </Reveal>

          </div>

          <motion.div

            className="manifesto-stamp"

            animate={

              reduceMotion ? undefined : { rotate: [12, 7, 12], y: [0, -7, 0] }

            }

            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}

          >

            NEW

            <br />

            CHAPTER

            <br />

            <span>2026</span>

          </motion.div>

        </section>



        <section className="event" id="invitation">

          <SectionIndex

            left="02 / THE INVITATION"

            right="WE WOULD LOVE YOU TO JOIN US."

            light

          />

          <div className="event-grid">

            <div className="event-copy">

              <Reveal distance={20}>

                <p className="eyebrow eyebrow-light">

                  A NOTE FROM THE BCA DEPARTMENT

                </p>

                <h2>

                  LET’S MAKE

                  <br />A <span>BEGINNING.</span>

                </h2>

              </Reveal>

              <Reveal delay={0.1}>

                <p className="event-description">

                  The BCA Department of Science College (Autonomous),

                  Hinjilicut, warmly invites faculty members and students to

                  ZENITH, our Freshers’ Welcome for the new BCA batch. Join us

                  for first conversations, new connections, and the memories

                  that make a department feel like family.

                </p>

              </Reveal>

              <motion.div

                className="event-rule"

                initial={{ scaleX: 0 }}

                whileInView={{ scaleX: 1 }}

                viewport={{ once: true }}

                transition={{ duration: 1.05, ease }}

              />

              <motion.div

                className="event-signoff"

                initial={{ opacity: 0, x: -12 }}

                whileInView={{ opacity: 1, x: 0 }}

                viewport={{ once: true }}

                transition={{ delay: 0.2, duration: 0.7, ease }}

              >

                <span className="signoff-mark">✳</span>

                <span>

                  Come with curiosity.

                  <br />

                  <strong>Leave with a new memory.</strong>

                </span>

              </motion.div>

            </div>

            <div className="ticket-wrap">

              <motion.div

                className="ticket-float"

                initial={{ opacity: 0, x: 48, rotate: 2 }}

                whileInView={{ opacity: 1, x: 0, rotate: 0 }}

                viewport={{ once: true, amount: 0.25 }}

                transition={{ duration: 0.95, ease }}

                animate={reduceMotion ? undefined : { y: [0, -7, 0] }}

              >

                <motion.div

                  className="ticket"

                  whileHover={{ rotate: 0, scale: 1.018, y: -4 }}

                  transition={{ type: "spring", stiffness: 220, damping: 18 }}

                >

                  <div className="ticket-top">

                    <span>OFFICIAL INVITATION</span>

                    <span>NO. 001 / BCA</span>

                  </div>

                  <div className="ticket-name">

                    ZENITH<span>’26</span>

                  </div>

                  <p className="ticket-by">

                    A FRESHERS’ WELCOME

                    <br />

                    BY THE BCA DEPARTMENT

                  </p>

                  <motion.div

                    className="ticket-cut"

                    initial={{ scaleX: 0 }}

                    whileInView={{ scaleX: 1 }}

                    viewport={{ once: true }}

                    transition={{ delay: 0.3, duration: 0.75, ease }}

                  >

                    <i />

                    <i />

                  </motion.div>

                  <div className="ticket-bottom">

                    <div>

                      <span>ISSUED BY</span>

                      <strong>BCA DEPARTMENT</strong>

                      <small>Science College (Autonomous)</small>

                    </div>

                    <EnergyBloom />

                  </div>

                </motion.div>

              </motion.div>

              <motion.p

                className="ticket-note"

                initial={{ opacity: 0, y: 9 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{ delay: 0.4, duration: 0.6, ease }}

              >

                <Sparkles size={15} /> A SMALL SYMBOL OF BIG BEGINNINGS{" "}

                <span>✳</span>

              </motion.p>

            </div>

          </div>

          <div className="event-footer">

            <span>ONE DEPARTMENT. MANY STORIES.</span>

            <span>THERE’S A PLACE FOR YOU HERE.</span>

          </div>

        </section>



        <section className="when-where" id="when-where" ref={whenWhereRef}>

          <motion.div

            className="when-watermark"

            aria-hidden="true"

            style={reduceMotion ? undefined : { y: whenWatermarkY }}

          >

            WHEN

            <br />

            <span>& WHERE</span>

          </motion.div>

          <motion.div

            className="when-sweep"

            aria-hidden="true"

            style={reduceMotion ? undefined : { x: whenLineX }}

          />

          <SectionIndex

            left="03 / THE WHEN & WHERE"

            right="A PLACE TO MEET. A MEMORY TO MAKE."

            light

          />

          <div className="when-heading">

            <Reveal distance={36}>

              <p className="eyebrow when-eyebrow">

                <span className="eyebrow-dot" /> SAVE A LITTLE SPACE FOR ZENITH

              </p>

              <h2>

                <span>THE PLACE</span>

                <em>IS SET.</em>

              </h2>

            </Reveal>

            <Reveal delay={0.12} distance={24}>

              <p className="when-intro">

                The day is still being finalised, but the welcome is already

                waiting. Here’s where we’ll gather when it’s time to begin.

              </p>

            </Reveal>

          </div>

          <div className="when-grid">

            <motion.article

              className="when-card date-card"

              initial={

                reduceMotion ? false : { opacity: 0, x: -52, rotate: -1.8 }

              }

              whileInView={{ opacity: 1, x: 0, rotate: 0 }}

              viewport={{ once: true, amount: 0.22 }}

              transition={{ duration: 0.95, ease }}

              whileHover={reduceMotion ? undefined : { y: -8, rotate: -0.5 }}

            >

              <div className="when-card-top">

                <span>01 / DATE & TIME</span>

                <motion.span

                  className="date-icon-wrap"

                  animate={

                    reduceMotion

                      ? undefined

                      : { y: [0, -4, 0], rotate: [0, 3, 0] }

                  }

                  transition={{

                    duration: 4.4,

                    repeat: Infinity,

                    ease: "easeInOut",

                  }}

                >

                  <CalendarDays size={21} />

                </motion.span>

              </div>

              <div className="date-card-main">

                <motion.p

                  className="date-pretitle"

                  initial={{ opacity: 0, letterSpacing: ".18em" }}

                  whileInView={{ opacity: 1, letterSpacing: ".08em" }}

                  viewport={{ once: true }}

                  transition={{ delay: 0.35, duration: 0.8 }}

                >

                  THE COUNTDOWN STARTS SOON

                </motion.p>

                <h3>

                  <span>COMING</span>

                  <em>SOON.</em>

                </h3>

                <div className="date-gold-line">

                  <motion.span

                    initial={{ scaleX: 0 }}

                    whileInView={{ scaleX: 1 }}

                    viewport={{ once: true }}

                    transition={{ delay: 0.5, duration: 1.1, ease }}

                  />

                </div>

                <p>

                  The official date and time will appear here as soon as they’re

                  confirmed. One thing’s certain: we’ll make the wait worth it.

                </p>

              </div>

              <div className="when-card-foot">

                <span>DATE: TO BE ANNOUNCED</span>

                <motion.span

                  animate={

                    reduceMotion ? undefined : { opacity: [0.45, 1, 0.45] }

                  }

                  transition={{ duration: 2.8, repeat: Infinity }}

                >

                  <i /> DETAILS IN PROGRESS

                </motion.span>

              </div>

            </motion.article>

            <motion.article

              className="when-card venue-card"

              initial={

                reduceMotion ? false : { opacity: 0, x: 52, rotate: 1.8 }

              }

              whileInView={{ opacity: 1, x: 0, rotate: 0 }}

              viewport={{ once: true, amount: 0.22 }}

              transition={{ delay: 0.12, duration: 0.95, ease }}

              whileHover={reduceMotion ? undefined : { y: -8, rotate: 0.5 }}

            >

              <div className="when-card-top">

                <span>02 / THE MEETING PLACE</span>

                <motion.span

                  className="venue-icon-wrap"

                  animate={reduceMotion ? undefined : { y: [0, -3, 0] }}

                  transition={{

                    duration: 3.8,

                    repeat: Infinity,

                    ease: "easeInOut",

                  }}

                >

                  <MapPin size={21} />

                </motion.span>

              </div>

              <div className="venue-card-main">

                <p className="date-pretitle">WHEN WE COME TOGETHER</p>

                <h3>

                  CENTENARY

                  <br />

                  <em>HALL.</em>

                </h3>

                <p className="venue-description">

                  Science College (Autonomous), Hinjilicut

                </p>

                <div className="venue-route">

                  <motion.span

                    initial={{ scaleX: 0 }}

                    whileInView={{ scaleX: 1 }}

                    viewport={{ once: true }}

                    transition={{ delay: 0.35, duration: 0.9, ease }}

                  />

                  <MapPin size={16} />

                  <span>HINJILICUT · ODISHA</span>

                </div>

              </div>

              <motion.button

                className="venue-copy"

                onClick={copyVenue}

                whileHover={{ x: 5 }}

                whileTap={{ scale: 0.98 }}

              >

                {copied ? "ADDRESS COPIED ✓" : "COPY VENUE DETAILS"}{" "}

                <ArrowUpRight size={15} />

              </motion.button>

            </motion.article>

          </div>

          <motion.div

            className="when-footline"

            initial={{ opacity: 0, y: 14 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ delay: 0.25, duration: 0.7 }}

          >

            <Sparkles size={15} />

            <span>

              THE DATE WILL BE UPDATED HERE. THE LINK WILL STAY THE SAME.

            </span>

            <ArrowRight size={15} />

          </motion.div>

        </section>



        <section className="details">

          <SectionIndex

            left="04 / WHAT WE’RE LOOKING FORWARD TO"

            right="GOOD PEOPLE. GOOD BEGINNINGS."

          />

          <Reveal>

            <div className="details-head">

              <h2>

                AND THEN,

                <br />

                <em>WE BEGIN.</em>

              </h2>

              <p>

                New names become familiar faces. Small conversations become

                shared stories. This is where the BCA journey starts feeling

                like yours.

              </p>

            </div>

          </Reveal>

          <div className="details-list">

            {[

              [

                "01",

                "Meet the people",

                "Put names to faces and say hello to the classmates, seniors, and faculty who’ll shape the journey.",

              ],

              [

                "02",

                "Find your place",

                "A new batch joins the story, and there’s room for everyone at the beginning.",

              ],

              [

                "03",

                "Make the memory",

                "Come with curiosity. Leave with a few moments that already feel like yours.",

              ],

            ].map(([number, title, description], index) => (

              <motion.div

                className="detail-row"

                key={number}

                initial={{ opacity: 0, y: 25 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true, amount: 0.45 }}

                transition={{ delay: index * 0.08, duration: 0.7, ease }}

                whileHover={{ x: 7, backgroundColor: "#f0e7db" }}

              >

                <span>{number}</span>

                <strong>{title}</strong>

                <p>{description}</p>

                <motion.span className="row-arrow">

                  <MoveUpRight size={18} />

                </motion.span>

              </motion.div>

            ))}

          </div>

        </section>



        <section className="gallery" id="memories">

          <div className="gallery-top">

            <SectionIndex

              left="05 / THE MEMORIES"

              right="AFTER THE DAY, THE STORIES STAY."

            />

            <motion.button

              className="gallery-toggle"

              onClick={() => setGalleryMode(!galleryMode)}

              whileHover={{ x: 4 }}

              whileTap={{ scale: 0.98 }}

            >

              {galleryMode ? "SHOW PREVIEW" : "PREVIEW GALLERY MODE"}{" "}

              <ArrowUpRight size={14} />

            </motion.button>

          </div>

          <div className="gallery-title">

            <Reveal>

              <h2>

                THE DAY.

                <br />

                <em>IN FRAMES.</em>

              </h2>

            </Reveal>

            <Reveal delay={0.1}>

              <p>

                {galleryMode

                  ? "Gallery mode preview is on. Replace these placeholders with your event photos after ZENITH."

                  : "The little moments, the big smiles, the people who made the day. After ZENITH, this space will hold the memories we create together."}

              </p>

            </Reveal>

          </div>

          <div className={`photo-grid ${galleryMode ? "gallery-active" : ""}`}>

            <motion.div

              className="photo photo-large"

              initial={{ opacity: 0, y: 38, rotate: -1.4 }}

              whileInView={{ opacity: 1, y: 0, rotate: 0 }}

              viewport={{ once: true, amount: 0.15 }}

              transition={{ duration: 0.8, ease }}

              whileHover={{ y: -10, rotate: -0.6, scale: 1.012 }}

            >

              <span>FRAME 01</span>

              <b>{galleryMode ? "YOUR PHOTO HERE" : "THE FIRST HELLO"}</b>

              <i>01</i>

            </motion.div>

            <motion.div

              className="photo photo-small photo-burgundy"

              initial={{ opacity: 0, y: 38 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true, amount: 0.15 }}

              transition={{ delay: 0.1, duration: 0.8, ease }}

              whileHover={{ y: -10, rotate: 0.5, scale: 1.012 }}

            >

              <span>FRAME 02</span>

              <b>{galleryMode ? "YOUR PHOTO HERE" : "THE PEOPLE"}</b>

              <i>02</i>

            </motion.div>

            <motion.div

              className="photo photo-small photo-ivory"

              initial={{ opacity: 0, y: 38 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true, amount: 0.15 }}

              transition={{ delay: 0.2, duration: 0.8, ease }}

              whileHover={{ y: -10, rotate: -0.5, scale: 1.012 }}

            >

              <span>FRAME 03</span>

              <b>{galleryMode ? "YOUR PHOTO HERE" : "THE LITTLE THINGS"}</b>

              <i>03</i>

            </motion.div>

          </div>

          <p className="gallery-footnote">

            THE GALLERY WILL LIVE AT THIS SAME LINK, EVEN AFTER THE EVENT.

          </p>

        </section>



        <footer className="footer">

          <div className="footer-top">

            <span>SCIENCE COLLEGE (AUTONOMOUS), HINJILICUT</span>

            <span>BCA DEPARTMENT PRESENTS</span>

          </div>

          <Reveal>

            <h2>

              PRESENTING

              <br />

              YOU <br />

              <br />

              <em>ZENITH.</em>

            </h2>

          </Reveal>

          <div className="footer-bottom">

            <span>FRESHERS’ WELCOME · 2026</span>

            <motion.a href="#top" whileHover={{ y: -3 }}>

              BACK TO TOP <ArrowUpRight size={14} />

            </motion.a>

            <span>

              MADE FOR A NEW BEGINNING <b>✳</b>

            </span>

          </div>

        </footer>

      </main>

    </>

  ;

}
