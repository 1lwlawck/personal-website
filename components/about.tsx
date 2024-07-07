"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently a student at Politeknik Harapan Bersama, pursuing a
        degree in <span className="font-medium">Informatics</span>. I have
        developed a strong passion for programming and web development. To
        improve my skills, I joined a coding bootcamp where I learned{" "}
        <span className="font-medium">full web development</span>.{" "}
        <span className="italic">My favorite aspect of programming</span> is the
        problem-solving part, and I <span className="underline">love</span> the
        satisfaction in finding solutions to complex problems. My core stack
        includes{" "}
        <span className="font-medium">
          React.js, Next.js, Python, and Laravel
        </span>
        . I am proficient in these technologies and constantly strive to improve
        my skills and learn new ones. Although I am still finishing my degree, I
        am actively looking for opportunities to apply my programming knowledge
        and gain more experience in the field.
      </p>

      <p>
        <span className="italic">When I'm not learning or coding</span>, I enjoy
        playing video games, watching movies, and spending time analyzing crypto
        markets. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
