import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

/**
 * ProjectDossier - Ultra-Minimalist Edition
 */
function ProjectDossier({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(60px) saturate(150%)",
          WebkitBackdropFilter: "blur(60px) saturate(150%)"
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 30, stiffness: 350 }}
          style={{
            width: "min(95%, 550px)",
            background: "rgba(32, 32, 32, 0.8)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "0",
            textAlign: "center",
            boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            fontFamily: "'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif"
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Windows 11 Title Bar */}
          <div style={{
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 12px",
            background: "rgba(255, 255, 255, 0.02)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
            userSelect: "none"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "16px", opacity: 0.8 }}>📁</span>
              <span style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.9)", fontWeight: "400" }}>Project Details</span>
            </div>
            <div style={{ display: "flex", height: "100%" }}>
              <button 
                onClick={onClose}
                style={{ 
                  width: "46px", 
                  height: "100%", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  background: "transparent", 
                  border: "none", 
                  color: "white", 
                  cursor: "pointer",
                  transition: "background 0.2s"
                }}
                onMouseEnter={(e) => e.target.style.background = "#e81123"}
                onMouseLeave={(e) => e.target.style.background = "transparent"}
              >
                ✕
              </button>
            </div>
          </div>

          <div style={{ padding: "40px 32px" }}>

          <h1 style={{ fontSize: "32px", color: "white", fontWeight: "900", letterSpacing: "-1.5px", marginBottom: "32px" }}>
            {project.title}
          </h1>

          <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(109,124,255,0.3), transparent)", marginBottom: "40px" }} />

          <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 32px",
              background: "linear-gradient(135deg, #0078d4 0%, #00bcf2 100%)",
              color: "white",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
              transition: "opacity 0.2s"
            }}
            onMouseEnter={(e) => e.target.style.opacity = "0.9"}
            onMouseLeave={(e) => e.target.style.opacity = "1"}
          >
            Visit Live Project
          </a>
        </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const projects = [
  {
    title: "Phanix Investigation Expert Platform",
    category: "Featured Ecosystem",
    gridState: "feature",
    description: "A world-class investigation platform with 6 core forensic modules and advanced integrity scanning engines.",
    tech: "React, Python, Forensic",
    link: "https://p-h-a-n-i-x-investigation-e-xpert.vercel.app/",
    image: "images/project_phanix.png"
  },
  {
    title: "N.I.T.T.A.L.A V7.4",
    category: "AI Intel Toolkit",
    gridState: "profile",
    description: "Advanced AI suite for digital investigations, deep trace analysis, and automated courtroom reporting.",
    tech: "Python, AI, Deep Analysis",
    link: "https://nittala-forensic-suite.vercel.app/",
    image: "images/project_nittala.png"
  },
  {
    title: "Forensic QR System",
    category: "Architecture",
    gridState: "standard",
    description: "QR-based evidence tracking with cryptographic hashing, integrity verification, and malicious payload detection.",
    tech: "Python, OpenCV",
    link: "https://nphaneendhar.github.io/P.H.A.N.I.X-FORENSIC-QR-ARCHITECT/",
    image: "images/project_qr.png"
  }
];

// Abstract Future Slotted Grid
const futureArchive = [
  { title: "upcoming projects", tag: "on process", link: "https://nitala-forensi-suite.vercel.app/" },
  { title: "upcoming projects", tag: "", link: "https://nitala-forensic-suite.verel.app/" },
  { title: "upcoming projects", tag: "", link: "https://nitala-forensic-suite.vercl.app/" },
  { title: "upcoming projects", tag: "", link: "https://nitala-forensic-suite.vercel.pp/" }
];

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const chk = () => setIsMobile(window.innerWidth < 1024);
    chk(); window.addEventListener("resize", chk);
    return () => window.removeEventListener("resize", chk);
  }, []);

  return (
    <section id="projects" style={{ padding: "120px 8%", background: "#000" }}>
      <ScrollReveal>
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <span style={{ color: "#0078d4", letterSpacing: "5px", fontSize: "11px", fontWeight: "900", textTransform: "uppercase" }}>PROJECTS</span>
          <h2 style={{ fontSize: "clamp(32px, 6vw, 68px)", color: "white", marginTop: "16px", fontWeight: "900", letterSpacing: "-3.5px" }}>Made with ❤️ on forensic's</h2>
        </div>
      </ScrollReveal>

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: "24px",
        gridAutoRows: isMobile ? "auto" : "320px",
        gridAutoFlow: "dense",
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
        {/* Main Projects */}
        {projects.map((p, i) => (
          <div 
            key={i}
            style={{ 
              gridColumn: !isMobile && p.gridState === "feature" ? "span 2" : "span 1",
              gridRow: !isMobile && p.gridState === "profile" ? "span 2" : "span 1"
            }}
          >
            <ScrollReveal delay={i * 0.1}><ProjectCard project={p} /></ScrollReveal>
          </div>
        ))}
      </div>

      {/* Upcoming Projects Section */}
      <div style={{ maxWidth: "1400px", margin: "60px auto 0" }}>
        <ScrollReveal>
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "30px", opacity: 0.7 }}>
            <div style={{ width: "20px", height: "2px", background: "#6d7cff" }}></div>
            <span style={{ color: "white", fontSize: "14px", fontWeight: "700", letterSpacing: "2px" }}>UPCOMING</span>
          </div>
        </ScrollReveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px"
        }}>
          {futureArchive.map((item, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <motion.a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, backgroundColor: "rgba(109, 124, 255, 0.05)", borderColor: "#6d7cff" }}
                style={{
                background: "rgba(32, 32, 32, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "12px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "140px",
                textDecoration: "none",
                cursor: "pointer"
              }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "10px", color: "#6d7cff", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase", border: "1px solid rgba(109, 124, 255, 0.3)", padding: "4px 8px", borderRadius: "4px" }}>
                    {item.tag}
                  </span>
                  <div style={{ width: "6px", height: "6px", background: "#6d7cff", borderRadius: "50%", boxShadow: "0 0 10px #6d7cff" }}></div>
                </div>
                
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <h4 style={{ color: "white", fontSize: "16px", fontWeight: "700", margin: 0, maxWidth: "85%" }}>{item.title}</h4>
                    <span style={{ color: "#6d7cff", fontSize: "18px" }}>↗</span>
                  </div>
                  <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, rgba(255,255,255,0.1), transparent)", marginTop: "12px" }}></div>
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef(null);
  const isFeature = project.gridState === "feature";
  
  // 3D Motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mx = useSpring(x, { stiffness: 100, damping: 20 });
  const my = useSpring(y, { stiffness: 100, damping: 20 });
  const rx = useTransform(my, [-0.5, 0.5], ["12deg", "-12deg"]);
  const ry = useTransform(mx, [-0.5, 0.5], ["-12deg", "12deg"]);

  // Glare Effect
  const glareX = useSpring(useTransform(mx, [-0.5, 0.5], ["0%", "100%"]));
  const glareY = useSpring(useTransform(my, [-0.5, 0.5], ["0%", "100%"]));

  return (
    <>
      <motion.div
        ref={cardRef}
        onMouseMove={(e) => {
          const r = cardRef.current.getBoundingClientRect();
          x.set((e.clientX - r.left) / r.width - 0.5);
          y.set((e.clientY - r.top) / r.height - 0.5);
        }}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{
          rotateX: rx, rotateY: ry,
          height: "100%",
          background: "rgba(32, 32, 32, 0.4)",
          backdropFilter: "blur(30px) saturate(120%)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          overflow: "hidden",
          cursor: "pointer",
          position: "relative"
        }}
        whileHover={{ scale: 1.04, borderColor: "rgba(109, 124, 255, 0.5)" }}
        onClick={() => setIsOpen(true)}
      >
        <motion.div
           style={{
             position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
             background: `radial-gradient(circle at var(--glare-x) var(--glare-y), rgba(255,255,255,0.08) 0%, transparent 70%)`,
             zIndex: 2, pointerEvents: "none", "--glare-x": glareX, "--glare-y": glareY
           }}
        />

        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
          <img src={project.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.45, filter: "grayscale(30%)" }} />
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to bottom, transparent, #000)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, padding: "36px", height: "100%", display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", fontWeight: "900", letterSpacing: "2.5px" }}>{project.category.toUpperCase()}</div>
          <div style={{ marginTop: "auto" }}>
            <h3 style={{ fontSize: isFeature ? "36px" : "24px", color: "white", fontWeight: "900", marginBottom: "14px", letterSpacing: "-1.5px" }}>{project.title}</h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: "1.6", fontWeight: "400", marginBottom: "20px", display: "-webkit-box", WebkitLineClamp: isFeature ? 3 : 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
               {project.description}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "white", fontSize: "14px", fontWeight: "900" }}>
               Visit Site <span style={{ fontSize: "18px" }}>→</span>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && <ProjectDossier project={project} onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
