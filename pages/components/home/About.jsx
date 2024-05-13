"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export default function About({ value }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 0.4"],
  });

  const words = value.split(" ");
  return (
    <div className="h-screen w-full flex items-center justify-center my-[0] lg:my-[80px] xl:my-[100px]">
      <p
        className="text-base md:text-2xl lg:text-4xl max-w-[1000px] flex flex-wrap justify-center"
        ref={element}
        style={{ opacity: scrollYProgress }}
      >
        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={index} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-2 mt-1">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity }}>
      {children}
    </motion.span>
    </span>
  );
};
