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
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{
              position: "relative",
              borderRadius: "32px",
              padding: "12px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "0.5px solid rgba(255, 255, 255, 0.15)", // Lite, thin border
              backdropFilter: "blur(20px)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              overflow: "hidden" // Ensure crop works
            }}>
              <motion.img 
                src="/phanix-lab-founder.png?v=3" 
                alt="Nittala Phaneendhar"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "/phanix-lab-founder.png?v=3"; 
                }}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  aspectRatio: "4/5", // Taller aspect ratio to allow cropping
                  objectFit: "cover", // Professional crop
                  objectPosition: "top", // Keep the face, crop the shirt from bottom
                  borderRadius: "20px",
                  display: "block",
                  // Lite aesthetic filter
                  filter: "brightness(1.04) contrast(1.02) saturate(1.02)", 
                  opacity: 1
                }}
              />
              
              {/* Premium Glass Effect Overlay - Lite Aesthetic */}
              <div style={{
                position: "absolute",
                inset: 0,
                borderRadius: "32px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, rgba(255,255,255,0.02) 100%)",
                pointerEvents: "none"
              }} />
            </div>
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  );
}
