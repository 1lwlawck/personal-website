import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sppt1Img from "@/public/sppt1.png";
import smksakamedikaImg from "@/public/smksakamedika.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Community Service at SMK Saka Medika",
    location: "Dukuhwaru, Tegal",
    description: "I contributed to the community by providing IT support and developing educational resources for SMK Saka Medika for 6 months.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2024 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Indonesia , Asia",
    description: "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, and PHP. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Profile Website",
    description: "I created and managed the official website profile for SMK Saka Medika, a vocational high school specializing in healthcare education. The website serves as a comprehensive platform providing information about the school's programs, faculty, achievements, and admission process.",
    tags: ["WordPress", "Elementor", "PHP"],
    imageUrl: smksakamedikaImg,
    link: "https://smksakamedika.sch.id",
  },
  {
    title: "SPK Product Popularity App",
    description: "I developed an application for determining the most popular products using Laravel, Livewire, and Tailwind. The app features real-time updates and a user-friendly interface.",
    tags: ["Laravel", "Livewire", "Tailwind"],
    imageUrl: sppt1Img,
    link: "https://22090116.phb2025.com",
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python",
  "Java",
  "PHP",
  "Laravel",
  "MySQL",
  "Framer Motion",
] as const;
