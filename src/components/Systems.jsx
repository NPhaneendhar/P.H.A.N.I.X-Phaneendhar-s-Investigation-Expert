import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Systems() {
  return (
    <section
      id="systems"
      style={{
        padding: "160px 8% 140px",
        background: "linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Ambient gradient orbs - Windows 11 "Bloom" style */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "-5%",
        width: "700px",
        height: "700px",
        background: "radial-gradient(circle, rgba(0, 188, 242, 0.08) 0%, transparent 70%)",
        filter: "blur(100px)",
        pointerEvents: "none",
        opacity: 0.5
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "-5%",
        width: "800px",
        height: "800px",
        background: "radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, transparent 70%)",
        filter: "blur(100px)",
        pointerEvents: "none",
        opacity: 0.4
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <ScrollReveal direction="up" duration={0.8}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span style={{
                color: "#86868b",
                fontSize: "13px",
                fontWeight: "600",
                letterSpacing: "3px",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "20px"
              }}>
                Core Systems
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                color: "white",
                marginTop: "0",
                fontWeight: "700",
                letterSpacing: "-2px",
                lineHeight: "1.1",
                marginBottom: "24px"
              }}
            >
              Built with{" "}
              <span style={{
                background: "linear-gradient(135deg, #0078d4 0%, #00bcf2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                Precision & Purpose
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                color: "#a1a1a6",
                fontSize: "17px",
                lineHeight: "1.7",
                maxWidth: "800px",
                margin: "0 auto 32px",
                fontWeight: "400"
              }}
            >
              Independently designed, developed, and maintained as a long-term personal initiative. Each system represents direct ownership of architecture, logic, and evolution — with responsibility carried across its full lifecycle.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              style={{
                color: "#667eea",
                fontSize: "15px",
                fontWeight: "600",
                fontStyle: "italic",
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              Ownership is not symbolic; it is structural.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "24px",
          }}
        >
          {cards.map((c, i) => (
            <ScrollReveal direction="up" delay={i * 0.1} duration={0.7} key={i}>
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 24px 60px rgba(109, 124, 255, 0.2)"
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                style={{
                  background: "rgba(32, 32, 32, 0.4)",
                  backdropFilter: "blur(30px) saturate(120%)",
                  WebkitBackdropFilter: "blur(30px) saturate(120%)",
                  padding: "36px 32px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "12px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Shine effect */}
                <motion.div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)",
                    pointerEvents: "none"
                  }}
                  whileHover={{
                    left: "100%",
                    transition: { duration: 0.6 }
                  }}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  style={{
                    fontSize: "32px",
                    marginBottom: "20px",
                    display: "inline-block"
                  }}
                >
                  {c.icon}
                </motion.div>

                {/* Title */}
                <h3 style={{
                  fontSize: "20px",
                  color: "white",
                  fontWeight: "700",
                  marginBottom: "16px",
                  letterSpacing: "-0.5px"
                }}>
                  {c.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: "15px",
                  color: "#a1a1a6",
                  lineHeight: "1.7",
                  margin: 0,
                  fontWeight: "400"
                }}>
                  {c.text}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


const cards = [
  {
    icon: "🔗",
    title: "Evidence Handling Logic",
    text: "Workflows are modeled on established forensic chain-of-custody principles, ensuring that every action leaves a traceable, reviewable path.",
    gradient: "linear-gradient(135deg, rgba(0, 120, 212, 0.1) 0%, rgba(0, 120, 212, 0.05) 100%)"
  },
  {
    icon: "🧪",
    title: "Digital Artifact Analysis",
    text: "Systematic approaches to examine digital files, structures, and metadata for investigative relevance.",
    gradient: "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(147, 51, 234, 0.05) 100%)"
  },
  {
    icon: "🧬",
    title: "Steganography Indicators",
    text: "Exploratory detection logic designed to surface statistical, structural, and behavioral indicators of concealed data.",
    gradient: "linear-gradient(135deg, rgba(0, 188, 242, 0.1) 0%, rgba(0, 188, 242, 0.05) 100%)"
  },
  {
    icon: "🧠",
    title: "Cyber Intelligence Thinking",
    text: "Investigation-oriented reasoning that blends threat-actor perspective, OSINT concepts, and forensic methodology.",
    gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)"
  },
];

