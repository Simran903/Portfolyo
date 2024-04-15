import React from "react";
import UseUserData from "../../components/customHook/UseUserData";
import line from "../../assets/line.png";
import { motion } from "framer-motion";

const Home = () => {
    const { userData, error } = UseUserData();

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!userData) {
        return false;
    }

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
            const delay = 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
                    opacity: { delay, duration: 0.01 },
                },
            };
        },
    };


    const imageX = 150; // Center of the rectangle horizontally
    const imageY = 75; // Center of the rectangle vertically

    return (
        <div id="home" className="xl:mx-40 my-10 flex flex-col lg:grid lg:grid-cols-2 max-sm:h-full max-sm:mt-40">
            <div className="flex flex-col text-center xl:text-left justify-center items-center xl:items-start tracking-wider mt-20">
                <div className="">
                    <h1 className="text-2xl xl:text-xl ">Hello, My name is</h1>
                    <h1 className="bg-gradient-to-tr from-lime-400 to-white text-transparent inline-block bg-clip-text xl:text-5xl text-[6rem] font-bold">{userData.user.about.name}</h1>
                    <img src={line} alt="" width='200%' />
                </div>
                <div className="flex flex-col justify-center text-center xl:text-left">
                    <h1 className="">
                        <span className="text-2xl xl:text-lg">I am a </span>
                        <span className="text-4xl xl:text-2xl italic text-lime-500">
                            {userData?.user.about.title}
                        </span>
                    </h1>
                    <p className="opacity-50 text-xl xl:text-md">{userData?.user.about.subTitle}</p>
                </div>
            </div>
            <div className="flex items-center justify-center mt-20 xl:mt-0">
                <span className="">
                    <motion.svg
                        width="600"
                        height="600"
                        viewBox="0 0 600 600"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.rect
                            width="400"
                            height="500"
                            x="100"
                            y="50"
                            rx="20"
                            stroke="#84cc16"
                            strokeWidth="4"
                            fill="transparent"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                            custom={3}
                        />
                        <motion.image
                            href={userData?.user.about.avatar.url}
                            width="50%"
                            x={imageX}
                            y={imageY}
                            className="rounded-lg border-2 border-lime-200"
                            style={{ transformOrigin: "center", transformBox: "fill-box" }}
                        />
                    </motion.svg>
                </span>
            </div>
        </div>
    );
};

export default Home;

