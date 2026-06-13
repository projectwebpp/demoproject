import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface AnimatedLetterProps {
  character: string;
  index: number;
  totalChars: number;
  progress: MotionValue<number>;
}

const AnimatedLetter = ({ character, index, totalChars, progress }: AnimatedLetterProps) => {
  const start = index / totalChars;
  const end = start + (1 / totalChars) * 5; // Slight overlap
  
  // Custom range mapping from prompt: range [charProgress - 0.1, charProgress + 0.05]
  const charProgress = index / totalChars;
  const rangeStart = Math.max(0, charProgress - 0.1);
  const rangeEnd = Math.min(1, charProgress + 0.05);

  const opacity = useTransform(progress, [rangeStart, rangeEnd], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {character === " " ? "\u00A0" : character}
    </motion.span>
  );
};

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export const ScrollRevealText = ({ text, className }: ScrollRevealTextProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");

  return (
    <p ref={containerRef} className={className}>
      {characters.map((char, i) => (
        <AnimatedLetter
          key={i}
          character={char}
          index={i}
          totalChars={characters.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
};
