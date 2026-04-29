import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

const directionVariants = {
  up:    { hidden: { opacity: 0, y: 40 },   visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -40 },  visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -40 },  visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 },   visible: { opacity: 1, x: 0 } },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.65,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const variants = directionVariants[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
