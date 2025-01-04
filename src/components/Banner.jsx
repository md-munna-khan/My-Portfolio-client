import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import CodeDisplay from "./CodeDisplay";
import { MdContactPhone } from "react-icons/md";
import { FaDownLong } from "react-icons/fa6";


const Banner = () => {
    return (
        <div className="grid  grid-cols-4 ">

        <div  className=" md:col-span-2  col-span-4    mt-20 "> 
        <div className="text-2xl lg:text-4xl">
        Hello This is MUNNA, I'm a Professional software Developer
        </div>
      <div className="flex gap-4 mt-4 text-2xl">
      <FaGithub></FaGithub> <FaLinkedin></FaLinkedin> <FaFacebook></FaFacebook> <FaTwitter></FaTwitter>
      </div>
      <div className="">
       <p className="flex items-center ">CONTACT ME<MdContactPhone className="ml-2" /> </p>   
       <p className="flex items-center">GET RESUME<FaDownload className="ml-2"></FaDownload> 
       </p>
      </div>
          </div>
       <div className="md:col-span-2 col-span-4  "> <CodeDisplay></CodeDisplay></div>
        </div>


    );
};

export default Banner;




