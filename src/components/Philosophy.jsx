import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      style={{
        padding: "120px 5%",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <ScrollReveal direction="up" duration={1.2}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "60px",
          alignItems: "center"
        }}>
          {/* Text Content */}
          <div>
            <h2 style={{ fontSize: "32px", color: "#6d7cff", marginBottom: "24px" }}>
              Ownership & Responsibility
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                opacity: 0.9,
                color: "#e5e5e7"
              }}
            >
              This system is designed with the assumption that it may be examined,
              challenged, or relied upon in real investigative and legal contexts.
              <br /><br />
              Accuracy, clarity, and responsibility take priority over shortcuts.
              Every feature is built to be explainable, repeatable, and defensible —
              not merely functional.
              <br /><br />
              The goal is not to impress with complexity, but to earn trust through
              structure, discipline, and long-term thinking.
            </p>

            <div style={{ marginTop: "40px", borderLeft: "3px solid #6d7cff", paddingLeft: "20px" }}>
              <div style={{ fontSize: "13px", opacity: 0.6, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
                Designed, maintained, and owned by:
              </div>
              <div style={{ fontSize: "20px", fontWeight: "700", color: "white" }}>
                Nittala Phaneendhar
              </div>
              <div style={{ fontSize: "14px", color: "#6d7cff", marginTop: "4px", opacity: 0.9 }}>
                Forensic Systems & Digital Evidence Integrity
              </div>
            </div>
          </div>

          {/* Image Content - Apple Style */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: "flex", justifyContent: "center", position: "relative" }}
          >
            {/* Soft Ambient Light Behind */}
            <div style={{
              position: "absolute",
              width: "120%",
              height: "120%",
              top: "-10%",
              left: "-10%",
              background: "radial-gradient(circle at center, rgba(109, 124, 255, 0.15) 0%, transparent 70%)",
              zIndex: 0,
              pointerEvents: "none"
            }} />

            <div style={{
              position: "relative",
              zIndex: 1,
              borderRadius: "32px",
              padding: "16px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(30px) saturate(160%)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.05)",
              overflow: "hidden"
            }}>
              <motion.img 
                src="/phanix-lab-founder.png?v=3" 
                alt="Nittala Phaneendhar"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  objectPosition: "top",
                  borderRadius: "20px",
                  display: "block",
                  filter: "brightness(1.05) contrast(1.05)",
                }}
              />
              
              {/* Premium Glass Flare */}
              <div style={{
                position: "absolute",
                top: "-50%",
                left: "-50%",
                width: "200%",
                height: "200%",
                background: "linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.1) 50%, transparent 55%)",
                transform: "rotate(30deg)",
                pointerEvents: "none"
              }} />

              {/* Glowing Corner Accents */}
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
                <div style={{ position: "absolute", top: "10px", left: "10px", width: "40px", height: "1px", background: "rgba(255,255,255,0.3)" }} />
                <div style={{ position: "absolute", top: "10px", left: "10px", width: "1px", height: "40px", background: "rgba(255,255,255,0.3)" }} />
              </div>
            </div>
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  );
}
