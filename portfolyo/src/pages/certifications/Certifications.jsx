import React from 'react';
import ServicesCard from '../../components/certificationsCard/CertificationsCard';

const hues = [
  [340, 10],
  [20, 40],
  [60, 90],
  [80, 120],
  [100, 140],
  [120, 160]
];

const certifications = () => {

  const certifications = [
    {
      certificate: "The Complete 2024 Web Development Bootcamp"
    },
    {
      certificate: "Programming in C++"
    },
    {
      certificate: "Certificate in Advanced Excel"
    },
    {
      certificate: "Crash Course on Python"
    }
  ]

  return (
    <div id='services' className="py-10">
      <div className="flex flex-col gap-2 justify-center items-center mb-14">
        <h1 className='text-[5rem] md:text-6xl font-bold bg-gradient-to-tr from-lime-400 to-white text-transparent inline-block bg-clip-text'>
          Certifications
        </h1>
        <span className='italic text-3xl md:text-lg'>What I have</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
        {certifications.map((element, index) => (
          <div key={index}>
            <ServicesCard
              name={element?.certificate}
              hueA={hues[index % hues.length][0]}
              hueB={hues[index % hues.length][1]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default certifications;
