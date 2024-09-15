import React from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon'; // Adjust the path to your Icon component

const buttonVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1 },
  hover: { scale: 1.01 }
};

const glowVariants = {
  hover: {
    opacity: 0.3,
    scale: 1.15,
    transition: { duration: 0.5, ease: "easeInOut" }
  },
  initial: {
    opacity: 0.1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  }
};

function SocialModal({ buttons }) {
  const buttonConfigs = {
    discord: {
      iconName: 'AiFillDiscord',
      text: 'Discord Sunucumuza Katılın',
      subText: 'Bize anlatmak istediğin şeyleri seste anlat.',
      bgColor: 'bg-[#7289DA]',
      borderColor: 'border-[#7289DA]',
      iconColor: 'text-[#FFFFFF]',
      url: 'https://discord.gg/ygrZVrhFvX'
    },
    linkedin: {
      iconName: 'AiFillLinkedin',
      text: "LinkedIn'de bizimle bağlantıda kalın",
      subText: 'Profesyonel ağımıza katıl.',
      bgColor: 'bg-sky-700',
      borderColor: 'border-sky-700',
      iconColor: 'text-sky-300',
      url: 'https://www.linkedin.com/groups/14523221/'
    },
    github: {
      iconName: 'AiFillGithub',
      text: "Github'ta bizi takip edin!",
      subText: 'Projelerimize göz at.',
      bgColor: 'bg-neutral-700',
      borderColor: 'border-neutral-700',
      iconColor: 'text-black',
      url: 'https://github.com/Turkish-Developer'
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full my-12 md:my-36">
      {buttons.map((button) => {
        const { iconName, text, subText, bgColor, borderColor, iconColor, url } = buttonConfigs[button];

        return (
          <motion.a
            key={button}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative w-full py-8 px-6 flex flex-col gap-2 items-start justify-start rounded-md border ${bgColor} ${borderColor} overflow-hidden bg-opacity-20`}
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            transition={{ type: 'spring', stiffness: 200, damping: 20 }} // Daha yumuşak geçiş için eklendi
          >
            {/* Glowing Effect */}
            <motion.div
              className={`absolute left-0 -z-10 pointer-events-none inset-0 bg-gradient-to-r from-neutral-200 via-${bgColor.split('-')[1]}-300 to-transparent`}
              variants={glowVariants}
              transition={{ duration: 0.4, ease: "easeInOut" }} // Hover geçişini yumuşatmak için eklendi
            />
            <div className="flex flex-row items-center gap-2">
              <Icon iconType="ai" iconName={iconName} classname={`text-xl md:text-3xl ${iconColor}`} />
              <span className="font-bold text-base md:text-xl">{text}</span>
            </div>
            <div className="font-light text-sm md:text-lg">{subText}</div>
          </motion.a>

        );
      })}
    </div>
  );
}

export default SocialModal;
