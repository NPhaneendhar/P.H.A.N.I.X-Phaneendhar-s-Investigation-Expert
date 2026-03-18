import { useState, useEffect, lazy, Suspense } from "react";
import Lenis from "lenis";
import { motion, useScroll, useSpring } from "framer-motion";
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
