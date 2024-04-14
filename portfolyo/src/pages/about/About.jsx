import React from 'react'
import UseUserData from "../../components/customHook/UseUserData";
import { motion } from 'framer-motion'

const About = () => {
    const { userData, error } = UseUserData();

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!userData) {
        return false;
    }

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
                                <span className="text-black lg:text-xl text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">{userData.user.about.exp_year}+ <span className='block lg:text-xs text-2xl'>Years of experience</span></span>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                            <div className="w-52 h-52 lg:w-32 lg:h-32 bg-lime-500 rounded-full flex items-center justify-center relative ml-10 lg:ml-40 border-[5px] border-lime-300 shadow-glow">
                                <span className="text-black lg:text-xl text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">{userData.user.about.some_total}<span className='block lg:text-xs text-2xl'>Projects</span></span>
                            </div>
                        </motion.div>
                    </div>
                    <div className='w-10/12 lg:w-9/12 leading-normal md:leading-loose text-5xl lg:text-lg tracking-wider mt-16 lg:mt-0'>
                        <p>{userData.user.about.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
