import React from "react";
import UseUserData from "../../components/customHook/UseUserData";
import { motion } from 'framer-motion'

const SkillsCircle = () => {
  const { userData, error } = UseUserData();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return false;
  }

  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
      {userData?.user?.skills?.map((skill, index) => (
        <motion.div key={index} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="flex justify-center items-center">
          <div className="w-44 h-44 lg:w-24 lg:h-24 bg-[#1c281c] rounded-full flex items-center justify-center border-[5px] border-lime-200">
            <img src={skill?.image?.url} alt="" width='60%' />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsCircle;
