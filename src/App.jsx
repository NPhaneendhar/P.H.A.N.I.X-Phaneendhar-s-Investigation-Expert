import { useState, useEffect, lazy, Suspense } from "react";
import Lenis from "lenis";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";

// Lazy load non-critical sections
const About = lazy(() => import("./components/About"));
const Systems = lazy(() => import("./components/Systems"));
const ForensicSkills = lazy(() => import("./components/ForensicSkills"));
const Projects = lazy(() => import("./components/Projects"));
const Philosophy = lazy(() => import("./components/Philosophy"));
const Contact = lazy(() => import("./components/Contact"));

export default function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isHeroReady, setIsHeroReady] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBox, setShowInstallBox] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBox(true);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstallBox(false);
    }
    setDeferredPrompt(null);
  };

  // Lenis Smooth Scroll Setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app-wrapper">
      <motion.div
        className="scroll-progress"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #6d7cff, #be94ff)",
          transformOrigin: "0%",
          zIndex: 4000
        }}
      />
      
      <Navbar 
        onAboutClick={() => setIsAboutOpen(true)} 
        isVisible={isHeroReady}
      />

      <AnimatePresence>
        {showInstallBox && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="install-box-container"
            style={{
              position: "fixed",
              top: "90px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3000,
              width: "min(90%, 500px)",
              background: "rgba(13, 17, 23, 0.85)",
              backdropFilter: "blur(24px) saturate(160%)",
              border: "1px solid rgba(109, 124, 255, 0.25)",
              borderRadius: "20px",
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.6), inset 0 0 20px rgba(109,124,255,0.05)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div style={{ 
                width: "48px", height: "48px", background: "rgba(109, 124, 255, 0.1)", 
                borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid rgba(109, 124, 255, 0.2)"
              }}>
                <img src="phanix-logo.png" alt="" style={{ width: "24px", height: "24px" }} />
              </div>
              <div>
                <div style={{ fontSize: "14px", color: "white", fontWeight: "800", letterSpacing: "-0.5px" }}>Install Phanix Lab</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", fontWeight: "500" }}>Access your forensic workspace directly from the home screen.</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button 
                onClick={() => setShowInstallBox(false)}
                style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", fontSize: "12px", cursor: "pointer", fontWeight: "600" }}
              >Later</button>
              <button 
                onClick={handleInstall}
                style={{ 
                  background: "linear-gradient(135deg, #6d7cff 0%, #be94ff 100%)", 
                  color: "white", border: "none", borderRadius: "10px", padding: "10px 18px",
                  fontSize: "12px", fontWeight: "800", cursor: "pointer", 
                  boxShadow: "0 4px 15px rgba(109, 124, 255, 0.3)"
                }}
              >Install</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero3D 
          onReady={() => setIsHeroReady(true)} 
          onAboutClick={() => setIsAboutOpen(true)}
        />
        <Suspense fallback={<SectionLoader />}>
          <About isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
          <Systems />
          <ForensicSkills />
          <Projects />
          <Philosophy />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

function SectionLoader() {
  return (
    <div style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "20px", height: "2px", background: "rgba(109, 124, 255, 0.3)" }} />
    </div>
  );
}
