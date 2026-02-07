import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../assets/Phani.pdf";

/**
 * About Component - Windows 11 Mica Edition
 * Features modern Windows 11 aesthetics, Mica translucency, and Fluent UI interactions.
 * Desktop: Centered, high-fidelity window with modern title bar.
 */
export default function About({ isOpen, onClose }) {
  const [isMobile, setIsMobile] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="apple-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 3000,
            display: "flex",
            alignItems: isMobile ? "flex-end" : "center",
            justifyContent: "center",
            pointerEvents: "none"
          }}
        >
          {/* Subtle Apple Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              pointerEvents: "auto"
            }}
          />

          {/* Apple-Style Modal / Sheet */}
          <motion.div
            initial={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.95, y: 10 }}
            animate={isMobile ? { y: 0 } : { opacity: 1, scale: 1, y: 0 }}
            exit={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.95, y: 10 }}
            drag={isMobile ? "y" : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ bottom: 0.5, top: 0.1 }}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.y > 100 || velocity.y > 500) {
                onClose();
              }
            }}
            transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
            style={{
              position: "relative",
              background: "rgba(32, 32, 32, 0.75)",
              backdropFilter: "blur(60px) saturate(150%)",
              WebkitBackdropFilter: "blur(60px) saturate(150%)",
              borderRadius: isMobile ? "20px 20px 0 0" : "12px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              maxWidth: isMobile ? "100%" : "850px",
              width: "100%",
              maxHeight: isMobile ? "90vh" : "85vh",
              boxShadow: "0 40px 80px rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              pointerEvents: "auto",
              touchAction: "none",
              willChange: "transform, opacity, scale",
              fontFamily: "'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Windows 11 Title Bar */}
            {!isMobile && (
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
                  <span style={{ fontSize: "16px", opacity: 0.8 }}>👤</span>
                  <span style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.9)", fontWeight: "400" }}>About Me</span>
                </div>
                <div style={{ display: "flex", height: "100%" }}>
                  <div style={{ width: "46px", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "default", opacity: 0.6 }}>─</div>
                  <div style={{ width: "46px", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "default", opacity: 0.6 }}>▢</div>
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
                      fontSize: "14px",
                      transition: "background 0.2s"
                    }}
                    onMouseEnter={(e) => e.target.style.background = "#e81123"}
                    onMouseLeave={(e) => e.target.style.background = "transparent"}
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
            {/* iOS-Style Drag Handle */}
            {isMobile && (
              <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "12px 0 8px",
                background: "rgba(255, 255, 255, 0.02)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                flexShrink: 0
              }}>
                <div style={{
                  width: "36px",
                  height: "5px",
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "3px",
                  marginBottom: "12px"
                }} />
                <button 
                  onClick={onClose}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "none",
                    color: "white",
                    padding: "6px 20px",
                    borderRadius: "100px",
                    fontSize: "13px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <span style={{ fontSize: "16px" }}>↓</span> Back to Site
                </button>
              </div>
            )}


            {/* Content Container */}
            <div 
              className="apple-content-scroll"
              style={{ 
                overflowY: "auto", 
                padding: isMobile ? "40px 30px 60px" : "60px 80px",
                flex: 1,
                touchAction: "pan-y"
              }}
            >
            {/* Compact Header */}
            <div style={{
              padding: isMobile ? "24px 20px 0" : "40px 60px 0",
              flexShrink: 0
            }}>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ 
                  fontSize: isMobile ? "28px" : "42px", 
                  color: "white", 
                  fontWeight: "700", 
                  margin: 0,
                  letterSpacing: "-1.5px",
                }}
              >
                Phaneendhar Nittala
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{ 
                  fontSize: "14px", 
                  color: "rgba(255, 255, 255, 0.4)", 
                  fontWeight: "500",
                  marginBottom: "20px",
                }}
              >
                Forensic Digital Investigator
              </motion.div>
            </div>

            {/* High-Density Content Grid */}
            <div 
              className="apple-content-scroll"
              style={{ 
                overflowY: "auto", 
                padding: isMobile ? "0 20px 40px" : "0 60px 40px",
                flex: 1,
              }}
            >
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: "24px",
                alignItems: "stretch"
              }}>
                {/* Left Column */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <AppleSection 
                    title="EDUCATION" 
                    content={
                      <div style={{ fontSize: "14px", lineHeight: "1.4" }}>
                        <div style={{ color: "white", fontWeight: "600" }}>
                          Centurion University of Technology and Management
                        </div>
                        <div style={{ opacity: 0.8 }}>B.Sc. Forensic Science</div>
                      </div>
                    }
                    delay={0.2}
                  />
                  <AppleSection 
                    title="OBJECTIVE" 
                    content="Bridging physical evidence principles with digital forensic investigation. Building reliable, legally defensible systems for forensic readiness."
                    delay={0.3}
                  />
                  
                  {/* Action Row - Integrated into left col for compactness */}
                  <div style={{ 
                    marginTop: "10px", 
                    display: "flex", 
                    gap: "12px" 
                  }}>
                    <AppleButton onClick={() => setShowPreview(true)} style={{ padding: "10px 24px", fontSize: "12px" }}>View Resume</AppleButton>
                    <AppleButton 
                      as="a" 
                      href={resume} 
                      download="Phaneendhar_Nittala_Forensic.pdf"
                      secondary
                      style={{ padding: "10px 24px", fontSize: "12px" }}
                    >
                      Download
                    </AppleButton>
                  </div>
                </div>

                {/* Right Column */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <AppleSection 
                    title="OWNERSHIP" 
                    content="Systems built with accountability and evidentiary integrity. Decisions guided by chain-of-custody practices and repeatable forensic procedures."
                    delay={0.4}
                  />
                  
                  {/* Quote inside a compact card */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ 
                      padding: "16px",
                      background: "rgba(255, 255, 255, 0.03)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <p style={{ 
                      fontSize: "13px", 
                      color: "rgba(255, 255, 255, 0.6)", 
                      fontStyle: "italic",
                      margin: 0,
                      lineHeight: "1.4",
                      textAlign: "center"
                    }}>
                      &ldquo;Combining a mind of science to code can change the world&rdquo;
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
              </div>
            </motion.div>

          {/* Quick PDF Viewer - Apple Style */}
          <AnimatePresence>
            {showPreview && (
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
                  zIndex: 3001,
                  background: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(30px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: isMobile ? "10px" : "40px",
                  pointerEvents: "auto"
                }}
                onClick={() => setShowPreview(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    maxWidth: "1100px", 
                    background: "rgba(30, 30, 30, 0.9)", 
                    borderRadius: "20px", 
                    overflow: "hidden", 
                    position: "relative",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                   <div style={{
                     height: "60px",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "flex-end",
                     padding: "0 24px"
                   }}>
                     <button
                        onClick={() => setShowPreview(false)}
                        style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            color: "white",
                            border: "none",
                            borderRadius: "50%",
                            width: "32px",
                            height: "32px",
                            cursor: "pointer",
                            fontSize: "14px"
                        }}
                     >
                        ✕
                     </button>
                   </div>
                   <iframe src={resume} style={{ width: "100%", height: "calc(100% - 60px)", border: "none" }} title="Resume" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
}

function AppleSection({ title, content, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <div style={{ 
        fontSize: "11px", 
        fontWeight: "700", 
        color: "rgba(255, 255, 255, 0.3)", 
        letterSpacing: "1px", 
        marginBottom: "12px" 
      }}>
        {title}
      </div>
      <p style={{ 
        color: "rgba(255, 255, 255, 0.6)", 
        lineHeight: "1.6", 
        fontSize: "16px", 
        margin: 0,
        fontWeight: "400"
      }}>
        {content}
      </p>
    </motion.div>
  );
}

function AppleButton({ children, secondary, onClick, as = "button", ...rest }) {
  const Component = as;
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }}>
      <Component
        onClick={onClick}
        style={{
          padding: "12px 32px",
          background: secondary ? "rgba(255, 255, 255, 0.05)" : "white",
          color: secondary ? "white" : "black",
          border: "none",
          borderRadius: "100px",
          fontSize: "14px",
          fontWeight: "600",
          cursor: "pointer",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
        {...rest}
      >
        {children}
      </Component>
    </motion.div>
  );
}
