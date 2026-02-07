import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        padding: "140px 5% 60px",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "40px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ flex: "1 1 500px" }}
      >
        <h1 style={{ fontSize: "clamp(40px, 8vw, 56px)", lineHeight: "1.1" }}>
          Digital Forensics<br />
          <span style={{ color: "#6d7cff" }}>
            Hub
          </span>
        </h1>

        <p
          style={{
            maxWidth: "650px",
            marginTop: "30px",
            fontSize: "clamp(16px, 4vw, 18px)",
            opacity: 0.85,
          }}
        >
          A forensic science student and developer focused on building
          investigation-grade digital systems where evidence, integrity,
          and technology intersect.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
          maxWidth: "250px",
          margin: "0 auto",
        }}
      >
        {/* Social Links Box */}
        <HoverBox title="Connect">
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <motion.a 
              whileHover={{ scale: 1.02, x: 5, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              href="https://www.linkedin.com/in/phaneendhar-nittala-a2a3443a1/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={linkStyle}
            >
              LinkedIn ↗
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02, x: 5, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={linkStyle}
            >
              GitHub ↗
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02, x: 5, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              href="https://www.instagram.com/phani.49" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={linkStyle}
            >
              Instagram ↗
            </motion.a>
          </div>
        </HoverBox>
      </motion.div>
    </section>
  );
}

const boxStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "30px",
  padding: "12px 24px",
  backdropFilter: "blur(10px)",
};

const boxTitleStyle = {
  fontSize: "12px",
  color: "#6d7cff",
  marginBottom: "16px",
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontWeight: 700,
};

const buttonStyle = {
  flex: 1,
  padding: "10px 0",
  textAlign: "center",
  background: "#6d7cff",
  color: "white",
  textDecoration: "none",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: 600,
  transition: "opacity 0.2s",
};

const linkStyle = {
  color: "rgba(255,255,255,0.8)",
  textDecoration: "none",
  fontSize: "15px",
  padding: "8px 12px",
  background: "rgba(255,255,255,0.03)",
  borderRadius: "6px",
  transition: "background 0.2s",
};

function HoverBox({ title, children }) {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  return (
    <motion.div
      style={{
        ...boxStyle,
        cursor: "pointer",
        overflow: "hidden",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        backgroundColor: isHovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)",
        borderColor: isHovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ ...boxTitleStyle, marginBottom: 0 }}>{title}</h3>
        <motion.div
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: "#6d7cff", fontSize: "12px" }}
        >
          ▼
        </motion.div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
