

import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

import { IoMdDownload } from "react-icons/io";
import myimage from '../assets/my_img-removebg-preview.png'
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div className="grid items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 ">

      {/* Left Section - Text and Social Media Links */}
      <div className="col-span-4 md:col-span-2 w-full  lg:space-y-12 space-y-6 mt-20 text-center md:text-left">
      <h1 className=" text-2xl md:text-4xl"> Hello I'm Munna</h1>
  <div className="text-green-500">
  
  <TypeAnimation 
  className="text-2xl md:text-4xl font-bold"
  sequence={[
    
    "A Frontend Web Developer", 1000,
    "A MERN Stack Developer", 1000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
/>
  </div>
      

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-4 text-2xl md:text-4xl">
          <a
            href="https://www.facebook.com/md.munna.362879/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/md-munna-khan/Md.munna-mia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/munna-mia-9b43422b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/munnaKhan140695"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Contact and Resume Button */}
        <div className=" inline-flex justify-center md:justify-center   gap-4 mt-6">
          <a
            href="#contact"
            className=" items-center border  border-green-500 lg:p-3 inline-flex 
             rounded-full text-sm px-3 py-2 hover:bg-green-500 transition duration-300"
          >
            CONTACT ME <MdContactPhone className="ml-2" />
          </a>
          {/* <p className="inline-flex text-sm px-3 py-2  items-center  bg-green-500 border md:p-2 lg:p-3  rounded-full hover:bg-green-600 transition duration-300">
            GET RESUME <FaDownload className="ml-2" />
          </p> */}
             <a
            href="/munna-resume1.pdf"
            download="/munna-resume1.pdf"
             className=" items-center border  border-green-500 lg:p-3 inline-flex 
             rounded-full text-sm px-3 py-2 hover:bg-green-500 transition duration-300"
          >
            RESUME <IoMdDownload />
          </a>
        </div>
      </div>

      {/* Right Section - Code Display */}
      <div className="md:col-span-2 lg:col-span-2 col-span-4 pt-8">
{/* Animated Border Circle */}
                  <div className="relative md:w-[600px] md:h-[600px] h-[300px] w-[300px] rounded-full shadow-2xl mx-auto flex justify-center items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute w-full h-full border-t-4 border-b-4 border-green-500 rounded-full"
                    ></motion.div>
                    <img
                      className="md:w-[400px] md:h-[400px] h-[200px] relative z-10"
                      src={myimage}
                      alt="html"
                    />
                  </div>  
                  
      </div>
    </div>
  );
};

export default Banner;


