import React from 'react';
import ForEducation from '../../components/timeline/ForEducation';

const Timeline = () => {
  return (
    <div className='my-20 py-10'>
      <div className="flex flex-col justify-center items-center gap-2 mb-14">
        <h1 className='text-[4.5rem] md:text-6xl font-bold bg-gradient-to-tr from-lime-400 to-white text-transparent inline-block bg-clip-text'>
          Education & Experience
        </h1>
        <span className='italic text-3xl md:text-lg'>My Resume</span>
      </div>
      <div className="">
        <ForEducation />
      </div>
    </div>
  );
};

export default Timeline;
