import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAndroid,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiTypescript,
  SiExpo,
  SiFlutter,
  SiKubernetes,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiFirebase,
  SiGo,
  SiRust,
  SiCplusplus
} from "react-icons/si";
import { DiJava } from "react-icons/di";

export const stack = [
    {
      category: "Frontend",
      techs: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      ],
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-indigo-600" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      ],
    },
    {
      category: "Mobile",
      techs: [
        { name: "Android", icon: <FaAndroid className="text-green-700" /> },
        { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
        { name: "Expo", icon: <SiExpo className="text-black" /> },
        { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
      ],
    },
    {
      category: "DevOps",
      techs: [
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
        { name: "AWS", icon: <FaAws className="text-orange-400" /> },
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      ],
    },
    {
      category: "Database",
      techs: [
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Supabase", icon: <SiSupabase className="text-emerald-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      ],
    },
    {
      category: "Other",
      techs: [
        { name: "Go", icon: <SiGo className="text-cyan-500" /> },
        { name: "Rust", icon: <SiRust className="text-orange-500" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
        { name: "Java", icon: <DiJava className="text-red-500 w-40 h-12" /> },
      ],
    },
  ];