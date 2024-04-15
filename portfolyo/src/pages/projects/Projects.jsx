import React from "react";
import UseUserData from "../../components/customHook/UseUserData";

const Projects = () => {
  const { userData, error } = UseUserData();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return false;
  }

  return (
    <div id="projects" className="m-auto my-20 py-20">
      <div className="flex flex-col justify-center items-center gap-2 mb-14">
        <h1 className="text-[5rem] md:text-6xl font-bold bg-gradient-to-tr from-lime-400 to-white text-transparent inline-block bg-clip-text">Projects</h1>
        <span className='italic text-3xl md:text-lg'>My Work</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 cursor-pointer">
        {userData?.user?.projects?.slice().reverse().map((project, index) => (
          <div
            key={index}
            className="relative group p-10 md:p-3"
          >
            <div className="bg-lime-500 text-black rounded-xl overflow-hidden max-sm:flex">
              <div className="h-[20rem] md:h-48 rounded-t-xl bg-white flex justify-center items-center max-sm:w-1/2">
                <img
                  src={project?.image?.url}
                  alt=""
                  className="md:w-44 md:h-32 rounded-xl border-2 border-lime-300"
                />
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-6 p-4 max-sm:text-center max-sm:w-1/2">
                <span className="mx-auto font-bold md:text-lg text-5xl">
                  {project?.title}
                </span>
                <span className="text-2xl md:text-sm">{project?.techStack}</span>
              </div>
            </div>
            <div className="absolute rounded-xl inset-0 bg-black bg-opacity-90 opacity-0 transition-opacity duration-300 flex items-center justify-center pointer-events-none group-hover:opacity-100">
              <p className="text-white p-4 max-sm:w-10/12 max-sm:text-4xl">{project?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
