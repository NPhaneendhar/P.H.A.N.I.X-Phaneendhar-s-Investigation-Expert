import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { 
  BiSearchAlt, 
  BiShieldQuarter, 
  BiCodeAlt, 
  BiTestTube 
} from "react-icons/bi";

const skillGroups = [
  {
    category: "DIGITAL TOOLS",
    icon: <BiSearchAlt />,
    color: "#6d7cff",
    description: "Comprehensive digital evidence recovery, analysis, and chain-of-custody preservation.",
    skills: [
      { name: "Burp Suite", link: "https://portswigger.net/burp" },
      { name: "Wireshark", link: "https://www.wireshark.org/" },
      { name: "Autopsy", link: "https://www.autopsy.com/" },
      { name: "FTK Imager", link: "https://www.exterro.com/ftk-imager" },
      { name: "Volatility", link: "https://volatilityfoundation.org/" },
      { name: "Steganography", link: "https://en.wikipedia.org/wiki/Steganography" }
    ]
  },
  {
    category: "SECURITY",
    icon: <BiShieldQuarter />,
    color: "#00f0ff",
    description: "Offensive and defensive security operations, vulnerability assessment, and system hardening.",
    skills: [
      { name: "Network Analysis", link: "https://nmap.org/" },
      { name: "Password Auditing", link: "https://www.openwall.com/john/" },
      { name: "Integrity Scanning", link: "https://www.tripwire.com/state-of-security/file-integrity-monitoring-best-practices" },
      { name: "Metadata Analysis", link: "https://exiftool.org/" }
    ]
  },
  {
    category: "FOR TOOLS DEVELOPMENT",
    icon: <BiCodeAlt />,
    color: "#be94ff",
    description: "Full-stack engineering focused on building forensic tools and secure architectures.",
    skills: [
      { name: "Python", link: "https://www.python.org/" },
      { name: "HTML5/CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Flutter", link: "https://flutter.dev/" },
      { name: "Firebase", link: "https://firebase.google.com/" },
      { name: "MongoDB", link: "https://www.mongodb.com/" }
    ]
  },
  {
    category: "FORENSIC SCIENCE",
    icon: <BiTestTube />,
    color: "#00ff88",
    description: "Application of scientific principles to physical evidence analysis and identification.",
    skills: [
      { name: "Fingerprinting", link: "https://en.wikipedia.org/wiki/Fingerprint" },
      { name: "Ballistics", link: "https://en.wikipedia.org/wiki/Forensic_ballistics" },
      { name: "Fiber Analysis", link: "https://en.wikipedia.org/wiki/Trace_evidence" },
      { name: "Document Exam", link: "https://en.wikipedia.org/wiki/Questioned_document_examination" },
      { name: "DNA Profiling", link: "https://en.wikipedia.org/wiki/DNA_profiling" },
      { name: "Toxicology", link: "https://en.wikipedia.org/wiki/Forensic_toxicology" }
    ]
  }
];

export default function ForensicSkills() {
  const [selectedGroup, setSelectedGroup] = useState(null);

  return (
    <section 
      id="skills"
      style={{
        padding: "120px 8%",
        background: "#080c10",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Decoration */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "radial-gradient(circle at 18% 18%, rgba(109, 124, 255, 0.05) 0%, transparent 40%)",
        pointerEvents: "none"
      }}></div>

      <ScrollReveal direction="up" duration={1} delay={0.1}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span style={{ color: "#6d7cff", letterSpacing: "3px", fontWeight: "800", fontSize: "12px", textTransform: "uppercase" }}>My learning aspects & u can </span>
          <h2 style={{ 
            fontSize: "clamp(32px, 5vw, 48px)", 
            color: "white", 
            textTransform: "uppercase", 
            letterSpacing: "4px",
            marginTop: "10px",
            fontWeight: "800"
          }}>
            Technical Arsenal
          </h2>
          <div style={{ width: "20px", height: "2px", background: "#6d7cff", fontSize:"1px", margin: "20px auto" }}></div>
        </div>
      </ScrollReveal>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "40px"
      }}>
        {skillGroups.map((group, idx) => (
          <ScrollReveal direction="up" delay={idx * 0.1} duration={0.8} key={idx}>
            <SkillCard group={group} index={idx} onClick={() => setSelectedGroup(group)} />
          </ScrollReveal>
        ))}
      </div>

      <AnimatePresence>
        {selectedGroup && (
          <SkillModal group={selectedGroup} onClose={() => setSelectedGroup(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function SkillCard({ group, index, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5, borderColor: group.color, boxShadow: `0 10px 30px -10px ${group.color}44` }}
      style={{
        background: "rgba(255, 255, 255, 0.02)",
        backdropFilter: "blur(10px)",
        padding: "30px",
        borderRadius: "20px",
        border: `1px solid ${group.color}22`,
        position: "relative",
        transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        overflow: "hidden",
        cursor: "pointer",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {/* Glow Effect */}
      <div style={{
        position: "absolute",
        top: "-10%",
        right: "-10%",
        width: "60px",
        height: "60px",
        background: group.color,
        filter: "blur(40px)",
        opacity: 0.1,
        transition: "0.4s"
      }}></div>

      <div style={{ 
        fontSize: "42px", 
        color: group.color, 
        marginBottom: "16px",
        transition: "transform 0.3s ease",
        transform: isHovered ? "scale(1.1)" : "scale(1)"
      }}>
        {group.icon}
      </div>

      <div style={{ 
        fontSize: "14px", 
        fontWeight: "900", 
        letterSpacing: "3px", 
        color: "white",
        textAlign: "center"
      }}>
        {group.category}
      </div>

      {/* Cyber Brackets */}
      <div style={{ position: "absolute", top: "15px", left: "15px", width: "10px", height: "10px", borderTop: `2px solid ${group.color}`, borderLeft: `2px solid ${group.color}`, opacity: 0.5 }}></div>
      <div style={{ position: "absolute", bottom: "15px", right: "15px", width: "10px", height: "10px", borderBottom: `2px solid ${group.color}`, borderRight: `2px solid ${group.color}`, opacity: 0.5 }}></div>
    
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        style={{ 
          position: "absolute",
          bottom: "25px",
          display: "flex", 
          alignItems: "center", 
          gap: "8px", 
          fontSize: "11px", 
          fontWeight: "700", 
          color: group.color, 
          letterSpacing: "1px" 
        }}
      >
        EXPLORE <span style={{ fontSize: "16px" }}>→</span>
      </motion.div>
    </motion.div>
  );
}

function SkillModal({ group, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(15px)", zIndex: 2000,
        display: "flex", alignItems: "center", justifyContent: "center", padding: "20px"
      }}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0a0a0a", border: `1px solid ${group.color}44`,
          borderRadius: "24px", padding: "40px", maxWidth: "500px", width: "100%",
          position: "relative", boxShadow: `0 0 60px ${group.color}11`
        }}
      >
        <button onClick={onClose} style={{ position: "absolute", top: "24px", right: "24px", background: "rgba(255,255,255,0.05)", border: "none", color: "white", width: "32px", height: "32px", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
        
        <div style={{ color: group.color, fontSize: "48px", marginBottom: "24px" }}>{group.icon}</div>
        <h3 style={{ color: "white", fontSize: "32px", fontWeight: "800", marginBottom: "12px", letterSpacing: "-1px" }}>{group.category}</h3>
        <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "32px", lineHeight: "1.6", fontSize: "16px" }}>{group.description}</p>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {group.skills.map((skill, i) => (
            <motion.a 
              key={i} 
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, background: `${group.color}33` }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                background: `${group.color}11`, color: group.color, 
                padding: "10px 20px", borderRadius: "8px", fontSize: "14px", 
                fontWeight: "600", border: `1px solid ${group.color}33`,
                textDecoration: "none", display: "inline-block"
              }}
            >
              {skill.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
