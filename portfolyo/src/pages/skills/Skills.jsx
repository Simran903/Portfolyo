import React from 'react'
import SkillsCircle from './SkillsCircle';

const Skills = () => {

    return (
        <div id='skills' className="my-24 p-6 bg-lime-500 text-black">
            <div className="mb-10">
                <div className="flex flex-col gap-2 justify-center items-center py-14">
                    <h1 className='text-[5rem] md:text-6xl font-bold'>
                        Skills
                    </h1>
                    <span className='italic opacity-50 font-bold text-3xl md:text-lg'>High Knowledge on Skills</span>
                </div>
                <SkillsCircle />
            </div>
        </div>
    )
}

export default Skills