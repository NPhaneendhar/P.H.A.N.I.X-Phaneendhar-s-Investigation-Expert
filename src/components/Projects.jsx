import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { FiExternalLink, FiSearch, FiShield, FiFileText, FiActivity } from "react-icons/fi";

/**
 * ProjectDossier - Enhanced Forensic Modal
 */
function ProjectDossier({ project, onClose }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(0, 0, 0, 0.9)", backdropFilter: "blur(20px)",
          padding: "20px"
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          style={{
            width: "100%",
            maxWidth: isMobile ? "400px" : "850px",
            background: "#0d1117",
            borderRadius: "24px",
            border: "1px solid rgba(109, 124, 255, 0.2)",
            boxShadow: "0 50px 100px rgba(0,0,0,0.8)",
            position: "relative",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - Moved slightly higher to avoid title overlap */}
          <button 
            onClick={onClose} 
            style={{ 
              position: "absolute", top: "24px", right: "24px", zIndex: 10,
              background: "rgba(255,255,255,0.05)", border: "none", color: "white", 
              width: "36px", height: "36px", borderRadius: "50%", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "14px", border: "1px solid rgba(255,255,255,0.1)",
              transition: "background 0.3s"
            }}
            onMouseEnter={(e) => e.target.style.background = "rgba(255,255,255,0.15)"}
            onMouseLeave={(e) => e.target.style.background = "rgba(255,255,255,0.05)"}
          >✕</button>

          {/* Left Ward: Visual Evidence */}
          <div style={{ 
            background: "#080b0f", padding: isMobile ? "30px" : "40px", 
            borderRight: isMobile ? "none" : "1px solid rgba(255,255,255,0.05)",
            display: "flex", flexDirection: "column", justifyContent: "center"
          }}>
             <div style={{ marginBottom: "25px" }}>
                <span style={{ fontSize: "10px", color: "#6d7cff", fontWeight: "900", letterSpacing: "2px" }}>CASE_ID // {project.id}</span>
             </div>
             <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
               <img src={project.image} alt={project.alt} style={{ width: "100%", height: "auto", display: "block" }} />
             </div>
             
             <div style={{ marginTop: "30px" }}>
                <h4 style={{ color: "rgba(255,255,255,0.3)", fontSize: "9px", fontWeight: "900", marginBottom: "12px", letterSpacing: "1px" }}>TECH_STACK_ANALYSIS</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tech.split(", ").map((t, i) => (
                    <span key={i} style={{ 
                      padding: "4px 10px", background: "rgba(109,124,255,0.1)", 
                      color: "#6d7cff", borderRadius: "6px", fontSize: "10px", 
                      fontWeight: "800", border: "1px solid rgba(109,124,255,0.1)" 
                    }}>{t}</span>
                  ))}
                </div>
             </div>
          </div>

          {/* Right Ward: Detailed Report */}
          <div style={{ padding: isMobile ? "30px" : "50px", display: "flex", flexDirection: "column" }}>
            <h2 style={{ 
              fontSize: isMobile ? "24px" : "32px", 
              color: "white", 
              fontWeight: "900", 
              letterSpacing: "-1.5px", 
              lineHeight: "1.1",
              maxWidth: "85%" // Ensure it doesn't hit the "X" button
            }}>{project.title}</h2>
            <div style={{ height: "2px", width: "40px", background: "#6d7cff", margin: "25px 0" }} />
            
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.7", fontSize: "15px", flex: 1, marginBottom: "40px" }}>
              {project.description}
            </p>

            <div style={{ display: "flex", gap: "15px" }}>
              <a href={project.link} target="_blank" rel="noreferrer" style={{ 
                flex: 1, padding: "16px", background: "linear-gradient(135deg, #6d7cff 0%, #be94ff 100%)", 
                color: "white", textDecoration: "none", borderRadius: "12px", textAlign: "center", 
                fontWeight: "800", fontSize: "13px", display: "flex", alignItems: "center", 
                justifyContent: "center", gap: "8px", boxShadow: "0 10px 20px rgba(109,124,255,0.2)"
              }}>
                <FiExternalLink /> ACCESS_MODULE
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const projects = [
  {
    id: "PX-01",
    title: "Phanix Investigation Expert Platform",
    category: "Main Ecosystem",
    gridState: "feature",
    description: "The crown jewel of the Phanix Lab. A comprehensive digital investigation ecosystem designed for multi-layered forensic analysis. It features 6 independent modules that communicate through an encrypted backbone, providing investigators with real-time data correlation and integrity scanning.",
    tech: "React, Python, Forensic, GSAP",
    link: "https://p-h-a-n-i-x-investigation-e-xpert.vercel.app/",
    image: "images/project_phanix.png",
    alt: "Phanix Investigation Expert Platform project preview by Phaneendhar Nittala"
  },
  {
    id: "NT-AI",
    title: "N.I.T.T.A.L.A V7.4",
    category: "Intelligence",
    gridState: "vertical",
    description: "An AI-driven intelligence suite that automates the tedious parts of digital discovery. It utilizes specialized models for pattern matching, trace analysis, and generates courtroom-ready reports within seconds.",
    tech: "Python, AI, Deep-Analysis",
    link: "https://nittala-forensic-suite.vercel.app/",
    image: "images/project_nittala.png",
    alt: "N.I.T.T.A.L.A V7.4 intelligence suite project preview by Phaneendhar Nittala"
  },
  {
    id: "QR-ARCH",
    title: "Forensic QR System",
    category: "Security",
    gridState: "standard",
    description: "A secure protocol for physical evidence tagging using QR technology. Every tag is cryptographically linked to a blockchain record to prevent tampering.",
    tech: "Python, OpenCV, Blockchain",
    link: "https://nphaneendhar.github.io/P.H.A.N.I.X-FORENSIC-QR-ARCHITECT/",
    image: "images/project_qr.png",
    alt: "Forensic QR System project preview by Phaneendhar Nittala"
  }
];

const futureArchive = [
    { id: "NODE-07", title: "Upcoming projects", tag: "Analyzing", link: "https://nitala-forensi-suite.vercel.app/" },
    { id: "NODE-09", title: "Upcoming projects", tag: "Queued", link: "https://nitala-forensic-suite.verel.app/" },
    { id: "NODE-12", title: "Upcoming projects", tag: "Trace_Init", link: "https://nitala-forensic-suite.vercl.app/" },
    { id: "NODE-15", title: "Upcoming projects", tag: "Staging", link: "https://nitala-forensic-suite.vercel.pp/" }
];

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const chk = () => setIsMobile(window.innerWidth < 1024);
    chk(); window.addEventListener("resize", chk);
    return () => window.removeEventListener("resize", chk);
  }, []);

  return (
    <section id="projects" style={{ 
      padding: "160px 8% 120px", 
      background: "#05070a",
      position: "relative",
      overflow: "hidden" 
    }}>
      {/* HUD & Technical Background Grid */}
      <div style={{ 
        position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(109, 124, 255, 0.1) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        zIndex: 0
      }} />
      <div style={{ position: "absolute", top: "10%", right: "5%", opacity: 0.05, pointerEvents: "none", zIndex: 0 }}>
        <FiActivity size={400} />
      </div>
      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <ScrollReveal>
          <div style={{ marginBottom: "100px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <span style={{ height: "1px", width: "40px", background: "#6d7cff" }}></span>
                <span style={{ color: "#6d7cff", letterSpacing: "4px", fontSize: "11px", fontWeight: "900" }}>PROJECT_DIRECTORY</span>
            </div>
            <h2 style={{ fontSize: "clamp(42px, 6vw, 84px)", color: "white", fontWeight: "900", letterSpacing: "-4px", lineHeight: "1" }}>
               Featured <br />
               <span style={{ 
                 background: "linear-gradient(90deg, #6d7cff, #be94ff)", 
                 WebkitBackgroundClip: "text", 
                 WebkitTextFillColor: "transparent"
               }}>Projects.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* The Mosaic Bento Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(12, 1fr)",
          gridAutoRows: isMobile ? "auto" : "minmax(200px, auto)",
          gap: "30px",
          position: "relative",
          marginBottom: "120px"
        }}>
          {/* Main Feature - 8/12 Columns */}
          {!isMobile && (
            <div style={{ gridColumn: "span 8", gridRow: "span 3" }}>
               <ScrollReveal duration={1}><ModernProjectCard project={projects[0]} feature /></ScrollReveal>
            </div>
          )}

          {/* Second Project - 4/12 Columns, Tall */}
          {!isMobile && (
            <div style={{ gridColumn: "span 4", gridRow: "span 4" }}>
               <ScrollReveal delay={0.2} duration={1.2}><ModernProjectCard project={projects[1]} /></ScrollReveal>
            </div>
          )}

          {/* Third Project - Below the feature */}
          {!isMobile && (
            <div style={{ gridColumn: "span 4", gridRow: "span 2" }}>
               <ScrollReveal delay={0.4} duration={1.4}><ModernProjectCard project={projects[2]} /></ScrollReveal>
            </div>
          )}

          {/* Mobile View - Fallback to simple stack */}
          {isMobile && projects.map((p, i) => (
             <ScrollReveal key={i} delay={i * 0.1}><ModernProjectCard project={p} /></ScrollReveal>
          ))}
          
          {/* Dashboard Information Panel - Extra UI piece */}
          {!isMobile && (
            <div style={{ 
              gridColumn: "span 4", 
              gridRow: "span 1",
              background: "rgba(109,124,255,0.03)",
              border: "1px solid rgba(109,124,255,0.1)",
              borderRadius: "20px",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backdropFilter: "blur(10px)"
            }}>
               <div>
                  <div style={{ fontSize: "10px", color: "#6d7cff", fontWeight: "900", marginBottom: "12px", letterSpacing: "1px" }}>SYSTEM_TERMINAL</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "white", fontWeight: "700", fontSize: "14px" }}>
                      <motion.span 
                        animate={{ opacity: [1, 0.4, 1] }} 
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{ width: "8px", height: "8px", background: "#be94ff", borderRadius: "50%", boxShadow: "0 0 10px #be94ff" }} 
                      />
                      WORK_IN_PROGRESS
                  </div>
               </div>
               <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", fontFamily: "monospace", lineClamp: 2, display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  Initializing system nodes... compiling latest forensic evidence modules.
               </div>
            </div>
          )}
        </div>

        {/* --- UPCOMING PROJECTS SECTION --- */}
        <ScrollReveal>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "40px" }}>
            <span style={{ color: "white", fontSize: "14px", fontWeight: "900", letterSpacing: "3px" }}>FORENSIC_ARCHIVE</span>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(109,124,255,0.3), transparent)" }}></div>
          </div>
        </ScrollReveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px"
        }}>
          {futureArchive.map((item, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <motion.a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, backgroundColor: "rgba(109, 124, 255, 0.05)", borderColor: "rgba(109,124,255,0.4)" }}
                style={{
                  background: "rgba(13, 17, 23, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  padding: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{ 
                  width: "40px", height: "40px", borderRadius: "8px", background: "rgba(109,124,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#6d7cff", fontSize: "18px"
                }}>
                  <FiFileText />
                </div>
                
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "10px", color: "#6d7cff", fontWeight: "800", letterSpacing: "1px", marginBottom: "4px" }}>{item.id}</div>
                    <h4 style={{ color: "white", fontSize: "16px", fontWeight: "700", margin: 0 }}>{item.title}</h4>
                </div>

                <div style={{ textAlign: "right" }}>
                   <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", fontWeight: "700" }}>STATUS</div>
                   <div style={{ fontSize: "11px", color: "#6d7cff", fontWeight: "800" }}>{item.tag}</div>
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const ModernProjectCard = ({ project, feature }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mx = useSpring(x, { stiffness: 150, damping: 20 });
  const my = useSpring(y, { stiffness: 150, damping: 20 });
  const rx = useTransform(my, [-0.5, 0.5], ["8deg", "-8deg"]);
  const ry = useTransform(mx, [-0.5, 0.5], ["-8deg", "8deg"]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={(e) => {
        const r = cardRef.current.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { x.set(0); y.set(0); setIsHovered(false); }}
      onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
      style={{
        rotateX: rx, rotateY: ry,
        height: "100%", minHeight: feature ? "460px" : "340px",
        background: "rgb(13, 17, 23)",
        borderRadius: "20px",
        border: "1px solid rgba(109, 124, 255, 0.1)",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        zIndex: isHovered ? 10 : 1,
        boxShadow: isHovered ? "0 30px 60px -12px rgba(0,0,0,0.5), 0 18px 36px -18px rgba(109,124,255,0.3)" : "none",
        transition: "border 0.4s ease, box-shadow 0.4s ease"
      }}
      whileHover={{ scale: 1.015 }}
    >
      {/* Project Image Aspect - Depth Reveal */}
      <div style={{ 
        position: "absolute", top: 0, left: 0, width: "100%", height: "100%", 
        zIndex: 1, 
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: isHovered ? 0.4 : 0.25
      }}>
        <img src={project.image} alt={project.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ 
          position: "absolute", top: 0, left: 0, width: "100%", height: "100%", 
          background: "linear-gradient(to top, #05070a 15%, transparent 100%)" 
        }} />
      </div>

      {/* Hover Static Noise Texture */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity: isHovered ? 0.03 : 0,
        pointerEvents: "none",
        zIndex: 2,
        transition: "opacity 0.4s"
      }} />

      {/* Tactical Corner Info - Revealed on Hover */}
      <div style={{ 
        position: "absolute", top: "24px", left: "24px", zIndex: 5,
        opacity: isHovered ? 1 : 0, transform: isHovered ? "translateY(0)" : "translateY(-10px)",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
      }}>
         <div style={{ fontSize: "9px", fontFamily: "monospace", color: "rgba(109, 124, 255, 0.8)", letterSpacing: "1px" }}>
           COORDS: {feature ? "X-77.4 / Y-12.1" : "X-10.2 / Y-45.9"}
         </div>
      </div>

      <div style={{ 
        position: "absolute", top: "24px", right: "24px", zIndex: 5,
        display: "flex", gap: "8px", alignItems: "center"
      }}>
          <span style={{ 
            fontSize: "8px", fontWeight: "900", color: "#6d7cff", 
            background: "rgba(109, 124, 255, 0.1)",
            padding: "3px 8px", borderRadius: "100px",
            border: "1px solid rgba(109, 124, 255, 0.2)"
          }}>STATUS_OK</span>
          <div style={{ 
            width: "6px", height: "6px", borderRadius: "50%", 
            background: "#6d7cff", boxShadow: "0 0 8px #6d7cff" 
          }} />
      </div>

      {/* Content Area */}
      <div style={{ 
        position: "relative", zIndex: 4, padding: feature ? "60px" : "40px", 
        height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" 
      }}>
        <motion.div 
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
           <div style={{ fontSize: "11px", color: "rgba(109, 124, 255, 0.9)", letterSpacing: "3px", fontWeight: "900", marginBottom: "8px" }}>
             {project.id} // PROJECT_{project.category.toUpperCase().replace(' ', '_')}
           </div>
           <h3 style={{ 
             fontSize: feature ? "48px" : "28px", color: "white", fontWeight: "900", 
             marginTop: "0", letterSpacing: "-1.5px", lineHeight: "1.1",
             transition: "color 0.4s"
           }}>{project.title}</h3>
        </motion.div>
        
        <motion.p 
          initial={false}
          animate={{ 
            opacity: isHovered ? 0.7 : 0, 
            height: isHovered ? "auto" : "0px",
            marginTop: isHovered ? "20px" : "0px"
          }}
          style={{ 
            fontSize: "15px", color: "white", lineHeight: "1.6", 
            overflow: "hidden", fontWeight: "400"
          }}>
           {project.description}
        </motion.p>

        <div style={{ 
          marginTop: "25px", display: "flex", alignItems: "center", gap: "12px",
          opacity: isHovered ? 1 : 0.6, transition: "opacity 0.4s"
        }}>
           <div style={{ width: "30px", height: "1px", background: "#6d7cff" }}></div>
           <span style={{ fontSize: "11px", fontWeight: "900", color: "white", letterSpacing: "2px" }}>ACCESS_LIVE_SITE</span>
           <FiExternalLink size={12} color="#6d7cff" />
        </div>
      </div>

      {/* Technical Perimeter Markers */}
      <div style={{ position: "absolute", bottom: "24px", left: "24px", zIndex: 5, opacity: 0.3, fontSize: "8px", fontFamily: "monospace", color: "white" }}>
        SYS.PX_{project.id.split('-')[0]}
      </div>
      
      {/* Subtle Inner Glow */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
        background: isHovered ? "radial-gradient(circle at 50% 100%, rgba(109, 124, 255, 0.08) 0%, transparent 70%)" : "none",
        zIndex: 2, pointerEvents: "none", transition: "opacity 0.6s"
      }} />
    </motion.div>
  );
}
