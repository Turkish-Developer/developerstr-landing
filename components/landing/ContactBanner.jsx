import React from "react";
import { motion } from "framer-motion";
import Icon from "../Icon";

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

const glowVariants = {
  hover: {
    opacity: [0.2, 0.6, 0.2],
    x: ["-100%", "0%", "100%"],
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

function ContactBanner() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between my-24 md:my-48">
      {/* Sol Taraf - Form ve Get in Touch Yazısı */}
      <div className="flex flex-col w-full md:w-1/2">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          İletişim
        </motion.h2>

        {/* Form */}
        <div className="flex flex-col gap-6">
          <motion.div
            className="gap-2 flex flex-col"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <label htmlFor="name">İsminiz</label>
            <div className="bg-opacity-20 bg-neutral-700 rounded-md border border-neutral-700 h-10 outline-none flex flex-row items-center gap-2 px-2 text-neutral-400">
              <Icon
                iconType="fa"
                iconName="FaRegUser"
                classname="bg-opacity-20 text-neutral-700"
              />
              <input
                id="name"
                type="text"
                placeholder="İsim Soyisim"
                className="bg-opacity-0 bg-neutral-700 outline-none placeholder:text-neutral-700 w-full"
              />
            </div>
          </motion.div>

          <motion.div
            className="gap-2 flex flex-col"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label htmlFor="email">Email</label>
            <div className="bg-opacity-20 bg-neutral-700 rounded-md border border-neutral-700 h-10 outline-none flex flex-row items-center gap-2 px-2 text-neutral-400">
              <Icon
                iconType="fi"
                iconName="FiMail"
                classname="bg-opacity-20 text-neutral-700"
              />
              <input
                id="email"
                type="email"
                placeholder="example@developers.tr"
                className="bg-opacity-0 bg-neutral-700 outline-none placeholder:text-neutral-700 w-full"
              />
            </div>
          </motion.div>

          <motion.div
            className="gap-2 flex flex-col"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label htmlFor="message">Mesajınız</label>
            <textarea
              id="message"
              placeholder="Merhaba!..."
              className="bg-opacity-20 bg-neutral-700 rounded-md border border-neutral-700 outline-none text-neutral-400 px-2 h-40 placeholder:text-neutral-700"
            />
          </motion.div>

          <motion.button
            className="bg-gradient-to-r from-neutral-950 to-red-700 py-2 hover:text-red-200 hover:to-red-500 transition-all w-full text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Send
          </motion.button>
        </div>
      </div>

      {/* Sağ Taraf - Sosyal Medya Butonları */}
      <div className="flex flex-col gap-4 w-full md:w-96 md:gap-6 md:pl-8 md:mt-0 mt-8">
        <motion.a
          target="_blank"
          href="https://discord.gg/ygrZVrhFvX"
          className="relative bg-opacity-20 bg-slate-600 rounded-md border border-slate-700 py-4 px-5 flex flex-col items-start justify-center gap-2 overflow-hidden"
          variants={buttonVariants}
          whileHover="hover"
        >
          {/* Parıltı Efekti */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent"
            variants={glowVariants}
            style={{
              zIndex: -1,
              opacity: 0.2,
              pointerEvents: "none",
            }}
          />
          <div className="flex flex-row gap-1 items-left">
            <Icon iconType="ai" iconName="AiFillDiscord" classname="text-2xl text-[#7289DA]" />
            <span className="font-bold">Discord sunucumuza katıl</span>
          </div>
          <p className="font-light">
            Topluluğumuza katıl!
          </p>
        </motion.a>

        <motion.a
          target="_blank"
          href="https://www.linkedin.com/groups/14523221/"
          className="relative bg-opacity-20 bg-sky-700 rounded-md border border-sky-700 py-4 px-5 flex flex-col items-start justify-center gap-2 overflow-hidden"
          variants={buttonVariants}
          whileHover="hover"
        >
          {/* Parıltı Efekti */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-300 to-transparent"
            variants={glowVariants}
            style={{
              zIndex: -1,
              opacity: 0.2,
              pointerEvents: "none",
            }}
          />
          <div className="flex flex-row items-center gap-1">
            <Icon iconType="ai" iconName="AiFillLinkedin" classname="text-2xl text-sky-300" />
            <span className="font-bold">Bizimle bağlantıda kalın!</span>
          </div>
          <div className="font-light">Profesyonel ağımıza katıl!</div>
        </motion.a>

        <motion.a
          href="https://github.com/Turkish-Developer"
          target='_blank'
          className="relative bg-opacity-20 bg-neutral-700 rounded-md border border-neutral-700 py-4 px-5 flex flex-col items-start justify-center gap-2 overflow-hidden"
          variants={buttonVariants}
          whileHover="hover"
        >
          {/* Parıltı Efekti */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent"
            variants={glowVariants}
            style={{
              zIndex: -1,
              opacity: 0.2,
              pointerEvents: "none",
            }}
          />
          <div className="flex flex-row items-center gap-1">
            <Icon iconType="ai" iconName="AiFillGithub" classname="text-2xl text-black" />
            <span className="font-bold">Projelerimize göz at!</span>
          </div>
          <div className="font-light">Projelerimize destek ver!</div>
        </motion.a>
      </div>
    </div>
  );
}

export default ContactBanner;
