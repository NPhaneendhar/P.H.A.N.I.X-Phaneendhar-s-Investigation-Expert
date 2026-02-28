import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function Navbar({ onAboutClick, isVisible }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
      className="navbar"
      style={{
        pointerEvents: isVisible ? "auto" : "none" 
      }}
    >
      <div className="nav-container">
        <a href="#hero" className="logo-link" onClick={closeMobileMenu}>
          <img 
            src="phanix-logo.png" 
            alt="Phanix Logo" 
            className="logo-img"
          />
          <div className="logo-text">
            <div className="logo-title">
              P.H.A.N.I.X<span style={{ color: "#6d7cff" }}>.</span>
            </div>
            <div className="logo-subtitle">
              Phaneendhar's Investigation Expert
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="desktop-links">
          <button 
            onClick={() => { onAboutClick(); closeMobileMenu(); }} 
            className="nav-btn"
          >
            About
          </button>
          <NavHashLink href="#systems" label="Systems" onClick={closeMobileMenu} />
          <NavHashLink href="#skills" label="Skills" onClick={closeMobileMenu} />
          <NavHashLink href="#projects" label="Projects" onClick={closeMobileMenu} />
          <NavHashLink href="#philosophy" label="Ownership" onClick={closeMobileMenu} />
          <NavHashLink href="#contact" label="Contact" onClick={closeMobileMenu} />
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: "auto",
              transition: { 
                height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.3 },
                staggerChildren: 0.05,
                delayChildren: 0.1
              } 
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: { 
                height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.2 }
              } 
            }}
            className="mobile-menu"
          >
            <motion.button 
              variants={mobileItemVariants}
              onClick={() => { onAboutClick(); closeMobileMenu(); }} 
              className="mobile-nav-link"
              whileTap={{ scale: 0.98 }}
            >
              About
            </motion.button>
            <MobileNavLink href="#systems" label="Systems" onClick={closeMobileMenu} />
            <MobileNavLink href="#skills" label="Skills" onClick={closeMobileMenu} />
            <MobileNavLink href="#projects" label="Projects" onClick={closeMobileMenu} />
            <MobileNavLink href="#philosophy" label="Ownership" onClick={closeMobileMenu} />
            <MobileNavLink href="#contact" label="Contact" onClick={closeMobileMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavHashLink({ href, label, onClick }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ color: "white" }}
      className="nav-link"
    >
      {label}
    </motion.a>
  );
}

function MobileNavLink({ href, label, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    
    // Close the menu immediately for better UX
    onClick();

    // Use Lenis for professional smooth scrolling if available
    if (window.lenis) {
      window.lenis.scrollTo(href, {
        offset: -60,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      const elem = document.getElementById(targetId);
      if (elem) {
        window.scrollTo({
          top: elem.offsetTop - 60,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <motion.a 
      variants={mobileItemVariants}
      href={href} 
      className="mobile-nav-link" 
      onClick={handleClick}
      whileTap={{ scale: 0.98 }}
    >
      {label}
    </motion.a>
  );
}

const mobileItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  }
};

const linkStyle = {
  color: "#86868b",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: "500",
  letterSpacing: "-0.1px"
};

const buttonLinkStyle = {
  ...linkStyle,
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  fontFamily: "inherit",
  transition: "color 0.2s ease"
};
