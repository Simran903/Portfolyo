import React from 'react';
import ServicesCard from '../../components/servicesCard/ServicesCard';
import UseUserData from "../../components/customHook/UseUserData";

const hues = [
  [340, 10],
  [20, 40],
  [60, 90],
  [80, 120],
  [100, 140],
  [120, 160]
];

const Services = () => {
  const { userData, error } = UseUserData();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return false;
  }

  return (
    <div id='services' className="py-10">
      <div className="flex flex-col gap-2 justify-center items-center mb-14">
        <h1 className='text-[5rem] md:text-6xl font-bold bg-gradient-to-tr from-lime-400 to-white text-transparent inline-block bg-clip-text'>
          Services
        </h1>
        <span className='italic text-3xl md:text-lg'>What I do</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
        {userData.user.services.map((service, index) => (
          <div key={index}>
            <ServicesCard
              image={service.image.url}
              name={service.name}
              hueA={hues[index % hues.length][0]}
              hueB={hues[index % hues.length][1]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
