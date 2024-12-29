import React from 'react';

// About Component
const About = () => {
  return (
    <div className=" h-full  bg-black overflow-hidden relative w-[92vw]">
      {/* Left Side: Bigger Half Circles */}
      <div className="flex flex-col items-center">
        <div className="h-[1400px] w-[1400px]  bg-[#b1c9cd] relative   animate-rotate1 ">
          <div className="h-[1400px] w-[1400px]  bg-[#222b2d] absolute   transform -translate-x-1/2">
              <div className="h-[1400px] w-[1400px]  bg-white  absolute  transform -translate-x-1/2">
              <div className="h-[1400px] w-[1400px] bg-[#4f6065] bg-[animated-text] absolute   transform -translate-x-1/2"></div>
              </div>
          </div>
        </div>
      </div>

      
      <div className="text-center text-white z-10 absolute top-10">
        <h2 className="text-4xl sm:text-6xl font-extrabold sm:mb-28 mt-8 text-dark ">About Me</h2>
        <h1 className=" sm:mb-4 z-1  leading-10 text-xl sm:text-2xl p-9">
        I’m<span className=' ml-2 animated-text'>Yash Singhal</span>, a passionate Full-stack developer and competitive programmer pursuing a Bachelor's in Computer Science at Ajay Kumar Garg Engineering College (Graduating 2026). With a knack for building user-friendly and scalable web applications, I thrive on solving complex problems and crafting innovative. <span className='hidden sm:block'> My expertise spans MERN stack development, real-time applications, and hackathon projects that showcase my creativity and technical skills. I’m always eager to learn, collaborate, and push the boundaries of what technology can achieve.</span>
        </h1>
       
      </div>
    </div>
  );
};

export default About;
