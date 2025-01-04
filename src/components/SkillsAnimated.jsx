
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
const SkillsAnimated = () => {
   

    const skills = [
        { name: "React", icon: <FaReact className="text-blue-500 text-6xl" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-700 text-6xl" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-6xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-6xl" /> },
        { name: "Express", icon: <SiExpress className="text-gray-500 text-6xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-red-500 text-6xl" /> },
        { name: "Figma", icon: <FaFigma className="text-purple-500 text-6xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-6xl" /> },
    ];

    return (
        <div className="py-10 bg-slate-800 ">
            <h2 className="text-4xl text-white font-bold text-center  ">My Skills</h2>
            <Marquee pauseOnHover={true} speed={80}>  <div className="
            flex gap-8   p-4">
           {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex border rounded-lg px-8 py-4  flex-col items-center"
                     
                    >
                        {skill.icon}
                        <p className="text-xl font-medium  text-white ">{skill.name}</p>
                    </div>
                ))}
            </div>
            </Marquee> 
        </div>
    );
};

export default SkillsAnimated;
