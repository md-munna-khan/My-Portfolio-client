import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import CodeDisplay from "./CodeDisplay";
import { MdContactPhone } from "react-icons/md";
import { FaDownLong } from "react-icons/fa6";


const Banner = () => {
    return (
        <div className="grid  grid-cols-4 ">

        <div  className=" md:col-span-2  col-span-4    mt-20 "> 
        <div className="text-2xl   md:text-5xl ">
       <span className="text-green-400"> Hello! I'm</span> MUNNA, I'm a Professional Software Developer
        </div>
      <div className="flex gap-4  md:text-4xl mt-4 text-2xl">
      <FaGithub></FaGithub> <FaLinkedin></FaLinkedin> <FaFacebook></FaFacebook> <FaTwitter></FaTwitter>
      </div>
      <div className=" flex gap-2 mt-4 ">
       <button className="flex items-center border p-2 rounded-full  ">CONTACT ME<MdContactPhone className="ml-2" /> </button>   
       <button className="flex items-center  border p-2 rounded-full">GET RESUME<FaDownload className="ml-2"></FaDownload> 
       </button>
      </div>
          </div>
       <div className="md:col-span-2 col-span-4  "> <CodeDisplay></CodeDisplay></div>
        </div>


    );
};

export default Banner;




