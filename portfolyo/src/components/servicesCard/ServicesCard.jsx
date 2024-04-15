import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { y: 300 },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function ServicesCard({ image, name, hueA, hueB }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="relative overflow-hidden flex items-center justify-center pt-20 sm:pt-24"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div
        className="absolute bottom-0 md:left-32 md:right-0 top-5 bg-lime-500 mt-10 w-[400px] sm:w-[450px] rounded-xl"
      />
      <motion.div
        className="text-black text-xl font-semibold flex items-center justify-center bg-white rounded-2xl w-[300px] sm:w-[350px] h-[150px] sm:h-[175px] gap-5 border-[5px] border-lime-300"
        variants={cardVariants}
      >
        <img
          src={image}
          alt="service"
          className="rounded-full w-[15%] sm:w-[17%]"
        />
        <span className="truncate">{name}</span>
      </motion.div>
    </motion.div>
  );
}

export default ServicesCard;