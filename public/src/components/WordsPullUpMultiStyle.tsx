import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Segment {
  text: string;
  className: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
}

export const WordsPullUpMultiStyle = ({ segments, className }: WordsPullUpMultiStyleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`flex flex-wrap justify-center ${className}`}
    >
      {segments.map((segment, sIndex) => {
        const words = segment.text.split(" ");
        return (
          <div key={sIndex} className={`${segment.className} flex flex-wrap`}>
            {words.map((word, wIndex) => (
              <motion.span
                variants={child}
                key={`${sIndex}-${wIndex}`}
                className="mr-[0.25em] mb-[0.1em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
        );
      })}
    </motion.div>
  );
};
