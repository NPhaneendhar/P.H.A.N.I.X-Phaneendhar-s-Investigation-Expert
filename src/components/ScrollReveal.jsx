import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * ScrollReveal Component
 * Wraps content and reveals it with smooth animations when scrolled into view
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.direction - Animation direction: 'up', 'down', 'left', 'right'
 * @param {number} props.delay - Delay before animation starts (seconds)
 * @param {number} props.duration - Animation duration (seconds)
 */
export default function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0,
  duration = 0.8
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, // Only animate once
    margin: "-100px" // Trigger 100px before element enters viewport
  });

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  };

  const offset = directions[direction] || directions.up;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: offset.y,
        x: offset.x,
        scale: 0.95,
        filter: "blur(10px)"
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: "blur(0px)"
      } : {}}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] // Premium easing curve
      }}
    >
      {children}
    </motion.div>
  );
}
