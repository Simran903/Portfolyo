import React from 'react'
import { motion } from 'framer-motion'
import { GoCode } from "react-icons/go";
import { GoCodespaces } from "react-icons/go";

const About = () => {
    
    return (
        <div id='about' className="my-24">
            <div className="flex justify-center items-center mb-14">
                <h1 className='text-[5rem] md:text-6xl font-bold bg-gradient-to-tr from-lime-400 to-white text-transparent inline-block bg-clip-text'>
                    About
                </h1>
            </div>
            <div className="flex py-10">
                <div className="flex flex-col justify-center items-center text-center lg:grid lg:grid-cols-2">
                    <div className="flex lg:flex-col justify-center items-center relative">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                            <div className="w-52 h-52 lg:w-36 lg:h-36 bg-lime-500 rounded-full flex items-center justify-center relative border-[5px] border-lime-300 shadow-glow">
                                <span className="text-black text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                    <GoCode />
                                    </span>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                            <div className="w-52 h-52 lg:w-32 lg:h-32 bg-lime-500 rounded-full flex items-center justify-center relative ml-10 lg:ml-40 border-[5px] border-lime-300 shadow-glow">
                                <span className="text-black lg:text-5xl text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                    <GoCodespaces />
                                    </span>
                            </div>
                        </motion.div>
                    </div>
                    <div className='w-10/12 lg:w-9/12 leading-normal md:leading-loose text-5xl lg:text-lg tracking-wider mt-16 lg:mt-0'>
                        <p>As a passionate and driven frontend developer currently pursuing a Bachelor's in Computer Applications with a specialization in Data Analytics from Amity University Online, I am dedicated to leveraging my skills and knowledge to make meaningful contributions to the digital landscape. Eager to embark on my professional journey, I am committed to continuous learning and growth, striving to stay at the forefront of emerging technologies and industry trends.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
