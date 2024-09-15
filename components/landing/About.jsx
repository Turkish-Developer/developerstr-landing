import { useState, useEffect } from "react";
import { sections } from "../../aboutSections";
import { motion } from "framer-motion";
import Icon from "../Icon"; // Icon bileşenini doğru yoluyla import edin.

const techStack = [
  { iconName: "IoLogoJavascript", iconType: "ionic5", color: "text-yellow-400" },
  { iconName: "FaReact", iconType: "fa", color: "text-sky-400" },
  { iconName: "SiNextdotjs", iconType: "si", color: "text-black" },
  { iconName: "IoLogoNodejs", iconType: "ionic5", color: "text-green-600" },
  { iconName: "SiTailwindcss", iconType: "si", color: "text-teal-400" },
  { iconName: "FaGitAlt", iconType: "fa", color: "text-orange-600" },
  { iconName: "SiTypescript", iconType: "si", color: "text-blue-500" },
  { iconName: "DiMongodb", iconType: "di", color: "text-green-500" },
  { iconName: "AiFillGithub", iconType: "ai", color: "text-gray-700" },
  { iconName: "FaDocker", iconType: "fa", color: "text-sky-500" },
  { iconName: "IoLogoHtml5", iconType: "ionic5", color: "text-orange-500" },
  { iconName: "FaCss3Alt", iconType: "fa", color: "text-blue-600" },
  { iconName: "SiGraphql", iconType: "si", color: "text-pink-500" },
  { iconName: "FaPython", iconType: "fa", color: "text-yellow-500" },
  { iconName: "FaSass", iconType: "fa", color: "text-pink-400" },
  { iconName: "SiFirebase", iconType: "si", color: "text-yellow-500" },
  { iconName: "SiRedux", iconType: "si", color: "text-purple-600" },
  { iconName: "FaAws", iconType: "fa", color: "text-orange-500" },
  { iconName: "DiPostgresql", iconType: "di", color: "text-blue-500" },
  { iconName: "SiKubernetes", iconType: "si", color: "text-blue-400" },
  { iconName: "SiJest", iconType: "si", color: "text-red-500" },
  { iconName: "FaNpm", iconType: "fa", color: "text-red-600" },
  { iconName: "FaYarn", iconType: "fa", color: "text-blue-400" },
  { iconName: "SiSvelte", iconType: "si", color: "text-orange-500" },
  { iconName: "FaJava", iconType: "fa", color: "text-red-600" },
  { iconName: "DiMysql", iconType: "di", color: "text-blue-600" },
  { iconName: "FaPhp", iconType: "fa", color: "text-indigo-600" },
  { iconName: "FaLaravel", iconType: "fa", color: "text-red-600" },
  { iconName: "SiCsharp", iconType: "si", color: "text-purple-600" },
  { iconName: "FaRust", iconType: "fa", color: "text-orange-500" },
  { iconName: "FaSwift", iconType: "fa", color: "text-orange-400" },
  { iconName: "SiDjango", iconType: "si", color: "text-green-600" },
  { iconName: "SiRuby", iconType: "si", color: "text-red-600" },
  { iconName: "FaAndroid", iconType: "fa", color: "text-green-500" },
  { iconName: "IoLogoApple", iconType: "ionic5", color: "text-gray-800" }
];

const randomPosition = () => ({
  top: `${Math.random() * 70}%`,
  left: `${Math.random() * 70}%`,
});

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleIcons, setVisibleIcons] = useState([0, 1, 2, 3, 4, 5, 6]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sections.length) % sections.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIcons((prevVisibleIcons) =>
        prevVisibleIcons.map((index) => (index + 1) % techStack.length)
      );
    }, 10000); // Change icons every 3 seconds
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex justify-between items-center py-36 md:py-12">
      {/* Left Section */}
      <div className="w-fit flex flex-col items-start justify-center gap-6 md:w-1/2">

        {/* Başlık ve paragrafı sabitleyen kapsayıcı */}
        <div className="flex flex-col justify-between" style={{ minHeight: '250px' }}>
          <div className="flex items-end gap-3">
            <motion.h1
              className="text-2xl md:text-5xl text-neutral-50 uppercase font-semibold pb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {sections[currentIndex].header}
            </motion.h1>
          </div>

          <motion.p
            className="font-medium text-sm md:text-base text-neutral-300"
            key={sections[currentIndex].header}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            {sections[currentIndex].paragraph}
          </motion.p>
        </div>

        {/* Butonlar */}
        <div className="flex items-center gap-4">
          <button
            className="inline-flex relative items-center px-6 py-3 bg-red-900 text-white font-medium rounded-lg shadow-md group"
            onClick={handlePrev}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-950 to-red-800 transition-transform transform group-hover:translate-x-1 group-hover:translate-y-1 rounded-lg"></span>
            <span className="absolute inset-0 w-full h-full border-2 border-red-500 rounded-lg"></span>
            <span className="relative flex items-center uppercase">Önceki</span>
          </button>

          <button
            className="inline-flex relative items-center px-6 py-3 bg-red-900 text-white font-medium rounded-lg shadow-md group"
            onClick={handleNext}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-950 to-red-800 transition-transform transform group-hover:translate-x-1 group-hover:translate-y-1 rounded-lg"></span>
            <span className="absolute inset-0 w-full h-full border-2 border-red-500 rounded-lg"></span>
            <span className="relative flex items-center uppercase">Sonraki</span>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative hidden md:block w-1/2 h-96 bg-transparent overflow-hidden">
        {visibleIcons.map((index) => (
          <motion.div
            key={index}
            className="absolute w-32 h-32 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, ...randomPosition() }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Icon
              iconName={techStack[index].iconName}
              iconType={techStack[index].iconType}
              iconColor={techStack[index].color}  // Pass color here
              classname="text-6xl"
            />
          </motion.div>
        ))}
      </div>
    </div>

  );
};

export default About;
