
import React, { useEffect } from 'react';
import myimage from '../assets/myimage.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div id='about'>
      <div className="col-span-1" data-aos="fade-up">
        <h1 className="text-center text-green-500 my-10  text-3xl lg:text-3xl">---ABOUT ME---</h1>
      </div>
      <div className="grid grid-cols-4 items-center  gap-4 text-white space-y-4 my-10">
        {/* Text Section with fade-up */}
        <div className="   md:col-span-2 text-center    md:text-left col-span-4" data-aos="fade-up">
          <h1 className="text-2xl text-green-500">WHO I AM?</h1>
          <p className="pt-4">
            "I’m Munna, a Frontend developer passionate about creating seamless web applications. With a solid foundation in JavaScript and a love for exploring new frameworks and tools, I work on both the front-end and back-end to deliver innovative and user-friendly solutions. I’m always open to new projects and job opportunities that help me grow as a developer."
          </p>
        </div>

        {/* Image Section with fade-down */}
        <div className="md:col-span-2 col-span-4" data-aos="fade-down">
          <img
            className="w-[300px] mx-auto md:w-[600px] md:h-[500px] h-[300px] justify-center items-center transform transition-transform duration-300 hover:scale-105 object-cover rounded"
            src={myimage}
            alt="My image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;


