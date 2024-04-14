import React, { useState } from 'react';
import ForEducation from '../../components/timeline/ForEducation';
import ForExperience from '../../components/timeline/ForExperience';

const Timeline = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='my-20 py-10'>
      <div className="flex flex-col justify-center items-center gap-2 mb-14">
        <h1 className='text-[4.5rem] md:text-6xl font-bold bg-gradient-to-tr from-lime-400 to-white text-transparent inline-block bg-clip-text'>
          Education & Experience
        </h1>
        <span className='italic text-3xl md:text-lg'>My Resume</span>
      </div>
      <div className="flex justify-center items-center mb-10">
        <button
          className={`px-4 py-2 mx-2 rounded-lg focus:outline-none ${activeTab === 'education' ? 'bg-lime-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('education')}
        >
          Education
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-lg focus:outline-none ${activeTab === 'experience' ? 'bg-lime-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('experience')}
        >
          Experience
        </button>
      </div>
      <div className="">
        {activeTab === 'education' && <ForEducation />}
        {activeTab === 'experience' && <ForExperience />}
      </div>
    </div>
  );
};

export default Timeline;
