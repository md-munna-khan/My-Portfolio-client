import { motion } from "framer-motion";

const skills = {
  frontend: [
    { name: "HTML", img: "your-html-icon.png" },
    { name: "CSS", img: "your-css-icon.png" },
    { name: "Tailwind", img: "your-tailwind-icon.png" },
    { name: "JavaScript", img: "your-js-icon.png" },
    { name: "React", img: "your-react-icon.png" },
  ],
  backend: [
    { name: "MongoDB", img: "your-mongodb-icon.png" },
    { name: "Node.js", img: "your-node-icon.png" },
    { name: "Firebase", img: "your-firebase-icon.png" },
    { name: "Express.js", img: "your-express-icon.png" },
    { name: "Next.js", img: "your-nextjs-icon.png" },
  ],
};

const SkillSection = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-bold mb-6">Frontend Skills</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {skills.frontend.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0, 0, 255, 0.3)" }}
            className="p-4 rounded-full border-2 border-blue-500 hover:shadow-lg"
          >
            <img src={skill.img} alt={skill.name} className="w-16 h-16" />
          </motion.div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-10 mb-6">Backend Skills</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {skills.backend.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0, 0, 255, 0.3)" }}
            className="p-4 rounded-full border-2 border-blue-500 hover:shadow-lg"
          >
            <img src={skill.img} alt={skill.name} className="w-16 h-16" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
