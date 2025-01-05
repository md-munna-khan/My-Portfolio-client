// import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import CodeDisplay from "./CodeDisplay";
// import { MdContactPhone } from "react-icons/md";



// const Banner = () => {
//     return (
//         <div className="grid  text-white grid-cols-4 ">

//         <div  className=" md:col-span-2 lg:space-y-12 w-2/3  col-span-4    mt-20 "> 
//         <div className="text-2xl   md:text-5xl ">Hello!
//        <span className="text-green-400">  I'm MUNNA, </span>  I'm a Professional Software Developer
//         </div>
//       <div className="flex gap-4  md:text-4xl mt-4 text-2xl">
//       <FaGithub></FaGithub> <FaLinkedin></FaLinkedin> <FaFacebook></FaFacebook> <FaTwitter></FaTwitter>
//       </div>
//       <div className=" flex gap-2 mt-4 ">
//        <a href="#contact" className="flex items-center border lg:p-2 rounded-full  ">CONTACT ME<MdContactPhone className="ml-2" /> </a>   
//        <button className="flex items-center  bg-green-500 border  lg:p-2 rounded-full">GET RESUME<FaDownload className="ml-2"></FaDownload> 
//        </button>
//       </div>
//           </div>
//        <div className="md:col-span-2 col-span-4  "> <CodeDisplay></CodeDisplay></div>
//         </div>


//     );
// };

// export default Banner;




import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import CodeDisplay from "./CodeDisplay";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 text-white">

      {/* Left Section - Text and Social Media Links */}
      <div className="md:col-span-2 lg:space-y-12 space-y-6 mt-20 text-center md:text-left">
        <div className="text-2xl md:text-5xl">
          Hello! <span className="text-green-400">I'm MUNNA,</span> I'm a Professional Software Developer
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
        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <a
            href="#contact"
            className="flex items-center border border-green-500 lg:p-3 p-2 rounded-full hover:bg-green-500 transition duration-300"
          >
            CONTACT ME <MdContactPhone className="ml-2" />
          </a>
          <button className="flex items-center bg-green-500 border lg:p-3 p-2 rounded-full hover:bg-green-600 transition duration-300">
            GET RESUME <FaDownload className="ml-2" />
          </button>
        </div>
      </div>

      {/* Right Section - Code Display */}
      <div className="md:col-span-2 lg:col-span-2 col-span-4">
        <CodeDisplay />
      </div>
    </div>
  );
};

export default Banner;
