import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaFilePdf, FaDownload } from "react-icons/fa";
import resume from "../assets/Phani.pdf";

/**
 * Hero Component
 * Renders a fullscreen hero section (3D model removed).
 */

/**
 * Magnetic Component
 * Creates an elastic "pull" effect towards the cursor.
 */
function Magnetic({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.4, y: y * 0.4 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * CinematicReveal Component
 * High-impact technical shutter opening effect.
 */
function CinematicReveal({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top Shutter */}
      <motion.div
        initial={{ height: "50%" }}
        animate={{ height: 0 }}
        transition={{ duration: 1.1, ease: [0.7, 0, 0.3, 1], delay: 1.2 }}
        onAnimationComplete={() => onComplete && onComplete()}
        style={{
          width: "100%",
          background: "#080b0e",
          borderBottom: "1px solid rgba(109, 124, 255, 0.5)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative"
        }}
      />

      {/* Bottom Shutter */}
      <motion.div
        initial={{ height: "50%" }}
        animate={{ height: 0 }}
        transition={{ duration: 1.1, ease: [0.7, 0, 0.3, 1], delay: 1.2 }}
        style={{
          width: "100%",
          background: "#080b0e",
          borderTop: "1px solid rgba(109, 124, 255, 0.5)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative"
        }}
      />
    </motion.div>
  );
}

/**
 * Windows11Desktop Component
 * Sleek, modern Windows 11 interface for the 2D screen.
 */
function Windows11Desktop() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const icons = [
    { label: "This PC", icon: "💻" },
    { label: "Recycle Bin", icon: "🗑️" },
    { label: "FORENSICS", icon: "📂" },
    { label: "Mail", icon: "✉️", action: () => window.location.href = "mailto:nittalaphaneendhar@gmail.com" },
  ];

  return (
    <div style={{
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg, #005a9e 0%, #0078d4 50%, #00bcf2 100%)",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      fontSize: "clamp(8px, 1.2vw, 10px)",
      color: "white",
      fontFamily: "'Segoe UI', system-ui, sans-serif"
    }}>
      {/* Premium Bloom-styled abstract background overlay - ENLARGED */}
      <div style={{
        position: "absolute",
        top: "-20%",
        left: "-20%",
        width: "140%",
        height: "140%",
        background: "radial-gradient(circle at center, rgba(109, 124, 255, 0.2) 0%, rgba(0, 120, 212, 0.12) 35%, transparent 70%)",
        filter: "blur(50px)",
        pointerEvents: "none",
        mixBlendMode: "screen"
      }} />
      <div style={{
        position: "absolute",
        bottom: "-25%",
        right: "-15%",
        width: "120%",
        height: "120%",
        background: "radial-gradient(circle at center, rgba(147, 51, 234, 0.15) 0%, transparent 60%)",
        filter: "blur(55px)",
        pointerEvents: "none",
        mixBlendMode: "plus-lighter"
      }} />

      {/* Desktop Icons */}
      <div style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        flex: 1,
        overflow: "visible",
        zIndex: 2
      }}>
        {icons.map((icon, i) => (
          <motion.div
            key={i}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "6px" }}
            onClick={icon.action ? icon.action : undefined}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "50px",
              textAlign: "center",
              cursor: icon.action ? "pointer" : "default",
              padding: "4px 0"
            }}
          >
            <div style={{ fontSize: "24px", marginBottom: "4px" }}>{icon.icon}</div>
            <div style={{
              background: "rgba(0,0,0,0.4)",
              padding: "2px 6px",
              borderRadius: "4px",
              fontSize: "7px",
              whiteSpace: "nowrap",
              fontWeight: "600"
            }}>{icon.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Taskbar */}
      <div style={{
        height: "28px",
        background: "rgba(20, 20, 20, 0.85)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255,255,255,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10px",
        zIndex: 2
      }}>
        {/* Start Button & Apps (Centered Group) */}
        <div style={{ display: "flex", gap: "10px", position: "absolute", left: "50%", transform: "translateX(-50%)", alignItems: "center" }}>
          <div style={{ fontSize: "14px", filter: "drop-shadow(0 0 4px rgba(0,188,242,0.6))" }}>💠</div>
          <div style={{ fontSize: "14px", opacity: 0.9 }}>🔍</div>
          <div style={{ fontSize: "14px", opacity: 0.9 }}>📂</div>
          {/* TEXT-BASED MAIL BUTTON - GUARANTEED VISIBLE */}
          <motion.div
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "mailto:nittalaphaneendhar@gmail.com"}
            style={{
              fontSize: "8px",
              fontWeight: "700",
              cursor: "pointer",
              background: "linear-gradient(135deg, #0078d4, #00bcf2)",
              padding: "3px 6px",
              borderRadius: "3px",
              color: "white",
              letterSpacing: "0.5px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.3)"
            }}
            title="Send Email"
          >
            MAIL
          </motion.div>
        </div>

        {/* Start Spacer */}
        <div />

        {/* System Tray/Clock */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          fontSize: "7px",
          lineHeight: "1.2",
          opacity: 0.95
        }}>
          <div style={{ fontWeight: "600" }}>{formatTime(time)}</div>
          <div style={{ opacity: 0.8 }}>{formatDate(time)}</div>
        </div>
      </div>
    </div>
  );
}


export default function Hero3D({ onReady, onAboutClick }) {
  // Show content immediately - no delay
  const [showDetails] = useState(true);
  const [revealComplete, setRevealComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Call onReady only after the cinematic reveal is complete
  useEffect(() => {
    if (revealComplete && onReady) {
      onReady();
    }
  }, [revealComplete, onReady]);

  // Combined responsive logic
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Parallax Scroll Tracking
  const { scrollYProgress } = useScroll();

  // Text glides faster and slightly sideways for a "floating" sensation
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -300]);
  const textX = useTransform(scrollYProgress, [0, 0.3], [0, 40]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section
      id="hero"
      style={{
        width: "100%",
        height: "100vh",
        background: "#0b0f14",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cinematic Shutter Reveal */}
      <CinematicReveal onComplete={() => setRevealComplete(true)} />

      {/* 2D Content */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial="hidden"
            animate={revealComplete ? "visible" : "hidden"}
            exit="hidden"
            style={{
              y: textY,
              x: textX,
              opacity: textOpacity,
              position: "relative",
              width: "100%",
              minHeight: "100vh",
              zIndex: 10,
              pointerEvents: "none",
              display: "flex",
              flexWrap: "wrap",
              alignItems: isMobile ? "center" : "flex-start",
              alignContent: isMobile ? "center" : "flex-start",
              justifyContent: "center",
              gap: isMobile ? "40px" : "clamp(24px, 5vw, 50px)",
              padding: isMobile
                ? "clamp(60px, 10vh, 80px) 20px"
                : "clamp(80px, 12vh, 140px) clamp(16px, 5%, 8%) clamp(60px, 10vh, 100px)",
              boxSizing: "border-box",
              willChange: "transform, opacity",
            }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {/* Text Content */}
            <div style={{
              flex: "1 1 320px",
              maxWidth: "600px",
              minWidth: "280px",
              pointerEvents: "auto"
            }}>
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 60,
                    scale: 0.9,
                    filter: "blur(20px)",
                    rotateX: -15
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    rotateX: 0,
                    transition: {
                      duration: 1.2,
                      ease: [0.16, 1, 0.3, 1],
                      type: "spring",
                      stiffness: 70,
                      damping: 24
                    }
                  },
                }}
                style={{ willChange: "transform, opacity, filter" }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "20px",
                    padding: "8px 12px",
                    borderRadius: "999px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.12)"
                  }}
                >
                  <img
                    src="/phani.png"
                    alt="Phaneendhar Nittala profile photo"
                    width="42"
                    height="42"
                    loading="eager"
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "1px solid rgba(109, 124, 255, 0.5)"
                    }}
                  />
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.85)", fontWeight: 700, letterSpacing: "0.4px" }}>
                    Phaneendhar Nittala
                  </span>
                </div>
                <h1
                  style={{
                    fontSize: "clamp(42px, 7vw, 76px)",
                    lineHeight: "1.0",
                    color: "white",
                    fontWeight: 800,
                    marginBottom: "24px",
                    letterSpacing: "-2px",
                    textTransform: "uppercase"
                  }}
                  aria-label="Phaneendhar Nittala - Digital Investigator"
                >
                  <motion.span
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  >
                    HELLO,
                  </motion.span> I'M <br />
                  <span style={{
                    background: "linear-gradient(90deg, #6d7cff, #be94ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}>
                    PHANEENDHAR.
                  </span>
                </h1>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { scaleX: 0, opacity: 0 },
                  visible: {
                    scaleX: 1,
                    opacity: 1,
                    transition: {
                      duration: 1.4,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.3
                    }
                  }
                }}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "1px",
                  background: "linear-gradient(90deg, #6d7cff, transparent)",
                  marginBottom: "32px",
                  transformOrigin: "left"
                }}
              />

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(15px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: {
                      duration: 1.3,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.4
                    }
                  },
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(16px, 1.8vw, 19px)",
                    color: "rgba(255, 255, 255, 0.5)",
                    lineHeight: "1.6",
                    marginBottom: "48px",
                    maxWidth: "480px",
                    fontWeight: 300,
                    letterSpacing: "0.5px",
                    fontStyle: "italic"
                  }}
                >
                  Digital Investigator (Phanix) <br />
                  Independently architected with clinical precision.
                  Focused on logic, structure, and systematic evidence.
                </p>

                {/* Social Links restored to original position */}
                <motion.div
                  initial="hidden"
                  animate={revealComplete ? "visible" : "hidden"}
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginTop: "20px"
                  }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.12,
                        delayChildren: 0.6
                      }
                    }
                  }}
                >
                  {[
                    { Icon: FaInstagram, href: "https://instagram.com/phani.49" },
                    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/phaneendhar-nittala-a2a3443a1/" },
                    { Icon: FaGithub, href: "https://github.com/nphaneendhar" },
                    { Icon: FaEnvelope, href: "mailto:nittalaphaneendhar@gmail.com" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={{
                        hidden: { scale: 0, rotate: -180, opacity: 0, y: 20 },
                        visible: {
                          scale: 1,
                          rotate: 0,
                          opacity: 1,
                          y: 0,
                          transition: {
                            type: "spring",
                            stiffness: 260,
                            damping: 15,
                            mass: 0.8
                          }
                        }
                      }}
                    >
                      <Magnetic>
                        <SocialIcon Icon={item.Icon} href={item.href} />
                      </Magnetic>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={revealComplete ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              style={{
                flex: isMobile ? "0 0 auto" : "1 1 240px",
                width: isMobile ? "100%" : "auto",
                maxWidth: isMobile ? "220px" : "380px",
                minWidth: isMobile ? "160px" : "220px",
                pointerEvents: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                willChange: "transform, opacity",
                marginTop: isMobile ? "20px" : "0",
                transform: isMobile ? "scale(0.6)" : "scale(1)"
              }}
            >
              <RetroMonitor onAboutClick={onAboutClick} isMobile={isMobile} />
            </motion.div>

            {/* Removed social links from bottom */}

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "absolute",
                bottom: "40px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                pointerEvents: "none"
              }}
            >
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "2px", textTransform: "uppercase" }}>Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #6d7cff, transparent)" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * DigitalClock Component
 * Stylized readable time for forensic terminal
 */
function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      fontSize: "clamp(12px, 1.5vw, 18px)",
      fontWeight: "bold",
      color: "#0078d4",
      letterSpacing: "2px",
      textShadow: "0 0 10px rgba(0, 120, 212, 0.4)",
    }}>
      {time.toLocaleTimeString([], { hour12: false })}
    </div>
  );
}

/**
 * RetroMonitor Component
 * Premium vintage CRT with functional binary clock and navigation
 */
function RetroMonitor({ onAboutClick, isMobile }) {
  const [glitchActive, setGlitchActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [screenOn, setScreenOn] = useState(false);
  const [bootComplete, setBootComplete] = useState(false);
  const [showStatic, setShowStatic] = useState(false);
  // Removed local isMobile as it's now passed via props
  const [activeCommand, setActiveCommand] = useState(null);
  const [typingKeys, setTypingKeys] = useState([]);
  const [displayText, setDisplayText] = useState("");
  const monitorRef = useRef(null);

  // Simulate typing effect for the keyboard
  useEffect(() => {
    if (!screenOn) {
      setTypingKeys([]);
      return;
    }
    const interval = setInterval(() => {
      const keys = Array.from({ length: 3 }, () => Math.floor(Math.random() * 20));
      setTypingKeys(keys);
      setTimeout(() => setTypingKeys([]), 200);
    }, 1500);
    return () => clearInterval(interval);
  }, [screenOn]);

  // Thoughtful boot sequence
  // PHANIX Custom Boot Animation Sequence
  useEffect(() => {
    if (!screenOn) return;

    // Simulate BIOS + Windows Loading
    const timer = setTimeout(() => {
      setBootComplete(true);
    }, 4000); // 4 seconds of PHANIX splash + Spinner

    return () => clearTimeout(timer);
  }, [screenOn]);

  // Subtle glitch effect
  useEffect(() => {
    if (!screenOn) return;
    const interval = setInterval(() => {
      if (Math.random() > 0.85) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 60);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [screenOn]);

  // Power toggle with cinematic static
  const handlePowerToggle = () => {
    if (screenOn) {
      setShowStatic(true);
      setTimeout(() => {
        setScreenOn(false);
        setShowStatic(false);
        setBootComplete(false);
        setActiveCommand(null);
      }, 250);
    } else {
      setScreenOn(true);
    }
  };

  const handleCommandClick = (cmd) => {
    setActiveCommand(cmd.id === activeCommand ? null : cmd.id);
  };

  // Smooth mouse tracking
  const handleMouseMove = (e) => {
    if (!monitorRef.current) return;
    const rect = monitorRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 6, y: y * -4 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={monitorRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: 0,
        rotateY: mousePos.x,
        rotateX: mousePos.y,
      }}
      transition={{
        opacity: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
        y: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
        rotateY: { type: "spring", stiffness: 100, damping: 30 },
        rotateX: { type: "spring", stiffness: 100, damping: 30 },
      }}
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: "clamp(10px, 1.5vw, 18px)",
        position: "relative",
        width: "100%",
        maxWidth: "480px",
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* PC Tower - LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -3 }}
        style={{
          background: "linear-gradient(180deg, #1f1f1f 0%, #141414 40%, #0a0a0a 100%)",
          borderRadius: "clamp(6px, 0.8vw, 10px)",
          width: "clamp(45px, 6vw, 70px)",
          height: "clamp(120px, 16vw, 180px)",
          position: "relative",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
          border: "1px solid #2a2a2a",
          display: "flex",
          flexDirection: "column",
          padding: "clamp(6px, 0.8vw, 12px)",
          gap: "clamp(4px, 0.5vw, 8px)",
          flexShrink: 0,
        }}
      >
        {/* Front Panel Top - Power & Reset */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(4px, 0.5vw, 8px)" }}>
          {/* Power Button - WORKING */}
          <motion.button
            onClick={handlePowerToggle}
            whileHover={{ scale: 1.15, boxShadow: "0 0 15px rgba(59, 130, 246, 0.6)" }}
            whileTap={{ scale: 0.85 }}
            animate={{
              boxShadow: screenOn
                ? ["0 0 8px #3b82f6", "0 0 15px #3b82f6", "0 0 8px #3b82f6"]
                : "0 0 3px #222"
            }}
            transition={{ duration: 1.5, repeat: screenOn ? Infinity : 0 }}
            style={{
              width: "clamp(16px, 2.2vw, 26px)",
              height: "clamp(16px, 2.2vw, 26px)",
              borderRadius: "50%",
              background: screenOn
                ? "radial-gradient(circle, #3b82f6 0%, #1d4ed8 100%)"
                : "radial-gradient(circle, #333 0%, #1a1a1a 100%)",
              border: "2px solid",
              borderColor: screenOn ? "#60a5fa" : "#444",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              outline: "none",
              padding: 0,
            }}
            title="Power ON/OFF"
          >
            <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none"
              stroke={screenOn ? "#fff" : "#555"} strokeWidth="3" strokeLinecap="round">
              <path d="M12 2v8" />
              <path d="M17 4a8 8 0 1 1-10 0" />
            </svg>
          </motion.button>

          {/* Reset Button */}
          <motion.button
            whileHover={{ scale: 1.2, backgroundColor: "#444" }}
            whileTap={{ scale: 0.7 }}
            onClick={() => {
              setShowStatic(true);
              setTimeout(() => {
                setShowStatic(false);
                setDisplayText("");
                setBootComplete(false);
                setActiveCommand(null);
              }, 200);
            }}
            style={{
              width: "clamp(10px, 1.2vw, 16px)",
              height: "clamp(10px, 1.2vw, 16px)",
              borderRadius: "3px",
              background: "#2a2a2a",
              border: "1px solid #3a3a3a",
              cursor: "pointer",
              outline: "none",
              padding: 0,
            }}
            title="Reset / Reboot"
          />
        </div>

        {/* Drive Bays */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginTop: "auto" }}>
          {[0, 1].map((i) => (
            <div key={i} style={{
              width: "100%",
              height: "clamp(8px, 1vw, 12px)",
              background: "linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)",
              borderRadius: "2px",
              border: "1px solid #2a2a2a",
              position: "relative",
            }}>
              {/* Drive LED */}
              <motion.div
                animate={{
                  opacity: screenOn && i === 0 ? [0.3, 1, 0.3] : 0.2,
                  backgroundColor: i === 0 ? "#22c55e" : "#333",
                }}
                transition={{ duration: 0.5, repeat: screenOn ? Infinity : 0 }}
                style={{
                  position: "absolute",
                  right: "3px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "3px",
                  height: "3px",
                  borderRadius: "50%",
                }}
              />
            </div>
          ))}
        </div>

        {/* USB & Audio Ports */}
        <div style={{ display: "flex", gap: "3px", justifyContent: "center" }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{
              width: "clamp(6px, 0.8vw, 10px)",
              height: "clamp(4px, 0.5vw, 6px)",
              background: i === 2 ? "#1a1a1a" : "#0a0a0a",
              borderRadius: i === 2 ? "50%" : "1px",
              border: "1px solid #333",
            }} />
          ))}
        </div>

        {/* RGB Light Strip */}
        {/* Side Hardware Accents - PC Style */}
        <motion.div
          animate={{
            background: screenOn
              ? ["linear-gradient(180deg, #0078d4, #00bcf2, #0078d4)"]
              : "linear-gradient(180deg, #1a1a1a, #1a1a1a)",
            backgroundSize: ["100% 200%"],
            backgroundPosition: screenOn ? ["0% 0%", "0% 100%", "0% 0%"] : ["0% 0%"],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            left: "2px",
            top: "35%",
            bottom: "35%",
            width: "2px",
            borderRadius: "1px",
            boxShadow: screenOn ? "0 0 8px rgba(0, 120, 212, 0.5)" : "none",
          }}
        />

        {/* Rear Cooling Vents */}
        <div style={{
          position: "absolute",
          bottom: "clamp(6px, 0.8vw, 10px)",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "1.5px",
        }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{
              width: "clamp(15px, 2.5vw, 30px)",
              height: "1px",
              background: "#151515",
            }} />
          ))}
        </div>

        {/* Status LED */}
        <motion.div
          animate={{
            opacity: screenOn ? [0.6, 1, 0.6] : 0.2,
            backgroundColor: screenOn ? "#0078d4" : "#111",
            boxShadow: screenOn ? ["0 0 5px #0078d4", "0 0 12px #0078d4", "0 0 5px #0078d4"] : "none",
          }}
          transition={{ duration: 2.5, repeat: screenOn ? Infinity : 0 }}
          style={{
            position: "absolute",
            bottom: "clamp(3px, 0.4vw, 6px)",
            right: "clamp(3px, 0.4vw, 6px)",
            width: "clamp(3px, 0.4vw, 5px)",
            height: "clamp(3px, 0.4vw, 5px)",
            borderRadius: "50%",
          }}
        />
      </motion.div>

      {/* Monitor & Peripherals Column */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
        {/* Ambient Glow */}
        <motion.div
          animate={{
            opacity: screenOn ? [0.15, 0.3, 0.15] : 0,
            scale: screenOn ? [1, 1.05, 1] : 0.8,
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            width: "140%",
            height: "140%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse, rgba(0, 120, 212, 0.2) 0%, rgba(0, 30, 60, 0.1) 40%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />

        {/* Modern Windows PC Monitor */}
        <motion.div
          animate={{
            boxShadow: screenOn
              ? "0 40px 120px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255,255,255,0.05)"
              : "0 30px 80px rgba(0, 0, 0, 0.5)"
          }}
          transition={{ duration: 0.8 }}
          style={{
            background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
            borderRadius: "8px",
            padding: "2px",
            position: "relative",
            width: "clamp(260px, 85vw, 420px)",
            height: "clamp(190px, 60vw, 300px)",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #333",
            transform: isMobile ? "scale(1.15) translateY(-20px)" : "none",
            transformOrigin: "center",
          }}
        >
          {/* Screen Container - Edge to Edge */}
          <div style={{
            background: "#000",
            borderRadius: "12px",
            padding: "clamp(8px, 1.2vw, 12px)",
            overflow: "hidden",
            position: "relative",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}>
            {/* Display Screen */}
            <motion.div
              animate={{
                boxShadow: screenOn
                  ? "inset 0 0 40px rgba(100, 200, 255, 0.1)"
                  : "inset 0 0 30px rgba(0, 0, 0, 0.8)"
              }}
              style={{
                background: screenOn
                  ? "linear-gradient(180deg, #0a1628 0%, #061018 100%)"
                  : "#000",
                borderRadius: "8px",
                padding: "clamp(10px, 1.2vw, 16px)",
                height: "100%",
                width: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Screen Turn On Flash */}
              <motion.div
                initial={{ opacity: 1, scaleY: 0.01 }}
                animate={{
                  opacity: screenOn ? 0 : 1,
                  scaleY: screenOn ? 1 : 0.01,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "#fff",
                  zIndex: 10,
                }}
              />

              {/* Scanlines Overlay */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 1px,
                rgba(0, 0, 0, 0.4) 1px,
                rgba(0, 0, 0, 0.4) 2px
              )`,
                pointerEvents: "none",
                zIndex: 3,
              }} />

              {/* CRT Curve Reflection */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "50%",
                background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)",
                borderRadius: "12px 12px 0 0",
                pointerEvents: "none",
                zIndex: 2,
              }} />

              {/* Screen Flicker */}
              <motion.div
                animate={{ opacity: [1, 0.96, 1, 0.98, 1, 0.97, 1] }}
                transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 0.8 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(0, 255, 100, 0.02)",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />

              {/* VHS Glitch Effect - Multiple Layers */}
              {glitchActive && (
                <>
                  <motion.div
                    initial={{ x: -10 }}
                    animate={{ x: 10 }}
                    transition={{ duration: 0.05 }}
                    style={{
                      position: "absolute",
                      top: `${20 + Math.random() * 60}%`,
                      left: 0,
                      right: 0,
                      height: `${10 + Math.random() * 20}px`,
                      background: "linear-gradient(90deg, rgba(255,0,0,0.3), rgba(0,255,255,0.3))",
                      zIndex: 4,
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                    linear-gradient(90deg, rgba(255,0,0,0.1) 33%, rgba(0,255,0,0.1) 33%, rgba(0,255,0,0.1) 66%, rgba(0,0,255,0.1) 66%)
                  `,
                    zIndex: 4,
                  }} />
                </>
              )}
              {/* TV Static Effect */}
              {showStatic && (
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  opacity: 0.8,
                  zIndex: 10,
                }} />
              )}

              {/* Screen Glow */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "200%",
                height: "200%",
                transform: "translate(-50%, -50%)",
                background: screenOn
                  ? "radial-gradient(ellipse, rgba(0, 120, 212, 0.08) 0%, transparent 60%)"
                  : "none",
                pointerEvents: "none",
              }} />

              {/* Terminal Content */}
              <div style={{
                position: "relative",
                zIndex: 1,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflowY: "hidden",
              }}>
                {/* PHANIX BIOS SPLASH */}
                {!bootComplete && screenOn && (
                  <div style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    background: "#000",
                  }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      style={{
                        fontSize: "clamp(24px, 4vw, 48px)",
                        color: "white",
                        fontWeight: "900",
                        letterSpacing: "8px",
                        textTransform: "uppercase",
                        fontFamily: "'Segoe UI Variable', system-ui, sans-serif",
                      }}
                    >
                      PHANIX
                    </motion.div>

                    {/* Modern Windows Spinner */}
                    <motion.div
                      initial={{ opacity: 0, rotate: 0 }}
                      animate={{ opacity: 1, rotate: 360 }}
                      transition={{
                        opacity: { duration: 0.5, delay: 1.5 },
                        rotate: { duration: 1, repeat: Infinity, ease: "linear" }
                      }}
                      style={{
                        marginTop: "40px",
                        width: "30px",
                        height: "30px",
                        border: "2px solid rgba(255, 255, 255, 0.1)",
                        borderTopColor: "#fff",
                        borderRadius: "50%",
                      }}
                    />

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      style={{
                        position: "absolute",
                        bottom: "10%",
                        fontSize: "10px",
                        color: "#666",
                        letterSpacing: "2px",
                        fontFamily: "monospace"
                      }}
                    >
                      SYSTEM BOOTING...
                    </motion.div>
                  </div>
                )}

                {/* Windows 11 Desktop Experience */}
                {bootComplete && screenOn && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{
                      position: "absolute",
                      top: "clamp(2px, 0.4vw, 4px)",
                      left: "clamp(2px, 0.4vw, 4px)",
                      right: "clamp(2px, 0.4vw, 4px)",
                      bottom: "clamp(10px, 1.5vw, 15px)",
                      borderRadius: "1px",
                      overflow: "hidden"
                    }}
                  >
                    <Windows11Desktop />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Monitor Branding */}
          <div style={{
            position: "absolute",
            bottom: "clamp(6px, 0.8vw, 10px)",
            left: "clamp(12px, 1.5vw, 20px)",
            fontSize: "clamp(8px, 0.6vw, 10px)",
            color: "#444",
            fontFamily: "'Segoe UI Variable', sans-serif",
            fontWeight: "bold",
            letterSpacing: "1px",
            textTransform: "uppercase",
            pointerEvents: "none"
          }}>
            PHANIX SERIES
          </div>

          {/* Power Button - Click to toggle screen */}
          <motion.button
            onClick={handlePowerToggle}
            whileHover={{ scale: 1.1, backgroundColor: screenOn ? "#0078d4" : "#444" }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: screenOn
                ? ["0 0 8px #0078d4", "0 0 15px #0078d4"]
                : "0 0 2px #222"
            }}
            transition={{ duration: 2, repeat: screenOn ? Infinity : 0 }}
            style={{
              position: "absolute",
              bottom: "clamp(10px, 1.2vw, 15px)",
              right: "clamp(12px, 1.5vw, 20px)",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: screenOn ? "#0078d4" : "#222",
              border: "none",
              cursor: "pointer",
              outline: "none",
              zIndex: 10,
            }}
            title={screenOn ? "Power Off" : "Power On"}
          />

          {/* Vent Lines */}
          <div style={{
            position: "absolute",
            top: "50%",
            right: "clamp(4px, 0.5vw, 8px)",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "3px",
          }}>
            {[...Array(6)].map((_, i) => (
              <div key={i} style={{
                width: "clamp(2px, 0.3vw, 4px)",
                height: "clamp(10px, 1.2vw, 15px)",
                background: "linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)",
                borderRadius: "1px",
              }} />
            ))}
          </div>
        </motion.div>

        {/* Pro Monitor Stand */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: isMobile ? "scale(0.85)" : "none",
        }}>
          {/* Solid Neck */}
          <div style={{
            width: "clamp(30px, 4vw, 50px)",
            height: "clamp(20px, 3vw, 30px)",
            background: "linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)",
            borderRadius: "0 0 4px 4px",
          }} />
          {/* Flat Rectangular Base */}
          <div style={{
            width: "clamp(120px, 15vw, 200px)",
            height: "clamp(4px, 0.6vw, 8px)",
            background: "#1a1a1a",
            borderRadius: "4px 4px 2px 2px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
          }} />
        </div>

        {/* Desk Surface / Grounding Shadow */}
        <div style={{
          position: "absolute",
          bottom: "-10px",
          left: "-20%",
          right: "-20%",
          height: "20px",
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, transparent 70%)",
          filter: "blur(5px)",
          zIndex: -2,
        }} />

        {/* Modern PC Peripherals Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: "clamp(10px, 1.5vw, 16px)",
            display: "flex",
            alignItems: "center",
            gap: "clamp(10px, 1.5vw, 20px)",
            position: "relative",
            transform: isMobile ? "scale(0.8)" : "none",
          }}
        >
          {/* Gaming Headset */}
          <motion.div
            whileHover={{ y: -2 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: "clamp(4px, 0.6vw, 8px)",
            }}
          >
            <div style={{
              width: "clamp(18px, 2.5vw, 28px)",
              height: "clamp(12px, 1.6vw, 16px)",
              borderRadius: "8px 8px 0 0",
              border: "2px solid #222",
              background: "#111",
            }} />
            <div style={{
              width: "4px",
              height: "25px",
              background: "#1a1a1a",
            }} />
            <div style={{
              width: "18px",
              height: "4px",
              background: "#0d0d0d",
            }} />
          </motion.div>

          {/* Carbon Mechanical Keyboard */}
          <div
            style={{
              background: "linear-gradient(180deg, #121212 0%, #1a1a1a 100%)",
              borderRadius: "6px",
              padding: "8px 12px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
              border: "1px solid #222",
            }}
          >
            {[9, 8, 7].map((keysInRow, rowIdx) => (
              <div
                key={rowIdx}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "3px",
                  marginBottom: rowIdx < 2 ? "3px" : 0,
                }}
              >
                {[...Array(keysInRow)].map((_, keyIdx) => {
                  const isActive = typingKeys.length > 0 &&
                    typingKeys[typingKeys.length - 1] * 30 % (rowIdx * 9 + keyIdx + 1) < 0.4;
                  return (
                    <motion.div
                      key={keyIdx}
                      animate={{
                        backgroundColor: isActive && screenOn ? "#0078d4" : "#222",
                        boxShadow: isActive && screenOn
                          ? "0 0 6px rgba(0, 120, 212, 0.8)"
                          : "inset 0 1px 1px rgba(255,255,255,0.05)",
                      }}
                      transition={{ duration: 0.1 }}
                      style={{
                        width: "clamp(8px, 1vw, 12px)",
                        height: "clamp(8px, 1vw, 12px)",
                        borderRadius: "1px",
                        border: "1px solid #111",
                      }}
                    />
                  );
                })}
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "3px" }}>
              <motion.div
                animate={{
                  backgroundColor: typingKeys.length > 0 && Math.random() > 0.8 && screenOn ? "#0078d4" : "#222",
                }}
                style={{
                  width: "clamp(40px, 6vw, 70px)",
                  height: "clamp(8px, 1vw, 12px)",
                  borderRadius: "1px",
                  border: "1px solid #111",
                }}
              />
            </div>
          </div>

          {/* Gaming Mouse */}
          <motion.div
            whileHover={{ y: -3, boxShadow: "0 8px 20px rgba(0,0,0,0.4)" }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)",
              borderRadius: "10px",
              width: "clamp(26px, 3.5vw, 42px)",
              height: "clamp(42px, 5.5vw, 62px)",
              position: "relative",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              border: "1px solid #222",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <motion.div
              animate={{
                boxShadow: screenOn ? "0 0 8px #0078d4" : "none",
                backgroundColor: screenOn ? "#0078d4" : "#222",
              }}
              style={{
                position: "absolute",
                top: "20%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "2px",
                height: "8px",
                borderRadius: "1px",
              }}
            />
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}

const iconLinkStyle = {
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: "20px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(4px)",
  transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
};

function SocialIcon({ Icon, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...iconLinkStyle, willChange: "transform, opacity" }}
      whileHover={{
        y: -5,
        scale: 1.1,
        backgroundColor: "rgba(109, 124, 255, 0.15)",
        borderColor: "#6d7cff",
        color: "#6d7cff",
        boxShadow: "0 10px 20px -5px rgba(109, 124, 255, 0.4), 0 0 15px rgba(109, 124, 255, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Icon />
    </motion.a>
  );
}
