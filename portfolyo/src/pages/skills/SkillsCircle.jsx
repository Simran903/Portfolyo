import React from "react";
import { motion } from "framer-motion";
import react from "../../assets/skillsImages/react.png";
import js from "../../assets/skillsImages/js.png";
import ts from "../../assets/skillsImages/typescript.png";
import html from "../../assets/skillsImages/html.png";
import css from "../../assets/skillsImages/css.png";
import scss from "../../assets/skillsImages/sass.png";
import cpp from "../../assets/skillsImages/cpp.png";
import python from "../../assets/skillsImages/python.png";
import bootstrap from "../../assets/skillsImages/bootstrap.png";
import appwrite from "../../assets/skillsImages/appwrite.png";
import firebase from "../../assets/skillsImages/firebase.png";
import framerMotion from "../../assets/skillsImages/framer-motion.png";
import github from "../../assets/skillsImages/github.png";
import jquery from "../../assets/skillsImages/jquery.png";
import sql from "../../assets/skillsImages/sql.png";
import tailwind from "../../assets/skillsImages/tailwind.png";
import matplotlib from "../../assets/skillsImages/Matplotlib.png";
import vs from "../../assets/skillsImages/visual-studio.png";
import redux from "../../assets/skillsImages/redux.png";
import wordpress from "../../assets/skillsImages/WordPress.png";

const SkillsCircle = () => {
  const skills = [
    {
      image: cpp,
    },
    {
      image: python,
    },
    {
      image: js,
    },
    {
      image: ts,
    },
    {
      image: react,
    },
    {
      image: redux,
    },
    {
      image: html,
    },
    {
      image: css,
    },
    {
      image: scss,
    },
    {
      image: tailwind,
    },
    {
      image: bootstrap,
    },
    {
      image: jquery,
    },
    {
      image: framerMotion,
    },
    {
      image: matplotlib,
    },
    {
      image: wordpress,
    },
    {
      image: appwrite,
    },
    {
      image: firebase,
    },
    {
      image: sql,
    },
    {
      image: github,
    },
    {
      image: vs,
    },
  ];

  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
      {skills?.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="flex justify-center items-center"
        >
          <div className="w-44 h-44 lg:w-24 lg:h-24 bg-[#1c281c] rounded-full flex items-center justify-center border-[5px] border-lime-200">
            <img
              src={skill?.image}
              alt=""
              width="60%"
              className="rounded-full"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsCircle;
