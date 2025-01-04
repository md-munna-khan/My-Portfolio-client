

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from "react-icons/fa";

const SkillsAnimated = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // AOS কনফিগারেশন
    }, []);

    const skills = [
        { name: "React", icon: <FaReact className="text-blue-500 text-6xl" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-700 text-6xl" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-6xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
    ];

    return (
        <div className="py-10 bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-5 md:px-20">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center"
                        data-aos="fade-up"
                    >
                        {skill.icon}
                        <p className="text-xl font-medium mt-2">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsAnimated;
