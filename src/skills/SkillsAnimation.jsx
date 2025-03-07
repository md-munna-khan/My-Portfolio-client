import React from "react";
import htmlImg from "../assets/html-xOPJe49P.png";
import cssImg from '../assets/css-Pniht-vu.png';
import reactImg from "../assets/react-banner-CupmICav.png";
import tailwindImg from "../assets/tailwind-yinQr7RX.png";
import jsImg from "../assets/js-CBwhynXw.png";
import mongoImg from "../assets/mongo-BrtJqHnc.png";
import nodejsImg from "../assets/nodejs-DBANtqNM.png";
import expressImg from "../assets/exjs-Bg2AmqCK.png";
import firebaseImg from "../assets/firebase-8S4UMftt.png";
import jwtImg from "../assets/jwt-D4KyWAoS.png";
import nextjs from "../assets/nextjs.png";
import vercel from "../assets/vercel.png";

import { motion } from "framer-motion";


const Skill = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div
        className="mt-6 lg:w-[20%] md:w-[40%] sm:w-[80%] mx-auto p-6 relative overflow-hidden group"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(229,231,235,0.9))",
          boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.2)",
          borderLeft: "4px solid rgba(59, 130, 246, 0.8)",
          borderRight: "4px solid rgba(59, 130, 246, 0.8)",
          borderRadius: "9999px",
          transform: "perspective(1000px)",
        }}
      >
        {/* Glow Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(circle at center, rgba(59, 130, 246, 0.2), transparent 70%)",
          }}
        ></div>

        {/* Animated Border */}
        <div
          className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-green-400 transition-all duration-500"
          style={{
            animation: "spin 5s linear infinite",
          }}
        ></div>

        {/* Title */}
        <h2
          className="font-bold text-4xl text-center text-black relative z-10"
          style={{
            background:
              "linear-gradient(45deg, rgba(59, 130, 246, 1), rgba(147, 51, 234, 1))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          My Skills
        </h2>
      </div>
      <div className="py-20">
        <div className=" ">
          <div className="grid  lg:grid-cols-2 grid-cols-1 gap-20">
            <div className="">
              <h2 className="text-4xl pb-10 font-bold text-center">
                Frontend Skills
              </h2>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-10  rounded-xl  text-center relative overflow-hidden"
                >


                  
                  {/* Animated Border Circle */}
                  <div className="relative w-32 h-32 rounded-full mx-auto flex justify-center  items-center">
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
                      className="w-16 relative z-10"
                      src={htmlImg}
                      alt="html"
                    />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-10  rounded-xl  text-center relative overflow-hidden"
                >
                  {/* Animated Border Circle */}
                  <div className="relative w-32 h-32 rounded-full shadow-2xl mx-auto flex justify-center items-center">
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
                      className="w-16 relative z-10"
                      src={cssImg}
                      alt="html"
                    />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-10  rounded-xl  text-center relative overflow-hidden"
                >
                  {/* Animated Border Circle */}
                  <div className="relative w-32 h-32 rounded-full shadow-2xl mx-auto flex justify-center items-center">
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
                      className="w-16 relative z-10"
                      src={tailwindImg}
                      alt="html"
                    />
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-10  rounded-xl  text-center relative overflow-hidden"
                >
                  {/* Animated Border Circle */}
                  <div className="relative w-32 h-32 rounded-full shadow-2xl mx-auto flex justify-center items-center">
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
                      className="w-16 relative z-10"
                      src={jsImg}
                      alt="html"
                    />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-10  rounded-xl  text-center relative overflow-hidden"
                >
                  {/* Animated Border Circle */}
                  <div className="relative w-32 h-32 rounded-full shadow-2xl mx-auto flex justify-center items-center">
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
                      className="w-16 relative z-10"
                      src={reactImg}
                      alt="html"
                    />
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-10  rounded-xl  text-center relative overflow-hidden"
                >
                  {/* Animated Border Circle */}
                  <div className="relative w-32 h-32 rounded-full shadow-2xl mx-auto flex justify-center items-center">
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
                      className="w-16 relative z-10"
                      src="https://ih1.redbubble.net/image.2488807847.3267/st,small,507x507-pad,600x600,f8f8f8.jpg"
                      alt="html"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="">
              <h2 className="text-4xl pb-10 font-bold text-center">
                Backend Skills
              </h2>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-10  rounded-xl  text-center relative overflow-hidden"
                >
                  {/* Animated Border Circle */}
                  <div className="relative w-32 h-32 rounded-full shadow-2xl mx-auto flex justify-center items-center">
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
                      className="w-16 relative z-10"
                      src={mongoImg}
                      alt="html"
                    />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-10  rounded-xl  text-center relative overflow-hidden"
                >
                  {/* Animated Border Circle */}
                  <div className="relative w-32 h-32 rounded-full shadow-2xl mx-auto flex justify-center items-center">
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
                      className="w-16 relative z-10"
                      src={nodejsImg}
                      alt="html"
                    />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-10  rounded-xl  text-center relative overflow-hidden"
                >
                  {/* Animated Border Circle */}
                  <div className="relative w-32 h-32 rounded-full shadow-2xl mx-auto flex justify-center items-center">
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
                      className="w-16 relative z-10"
                      src={firebaseImg}
                      alt="html"
                    />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-10  rounded-xl  text-center relative overflow-hidden"
                >
                  {/* Animated Border Circle */}
                  <div className="relative w-32 h-32 rounded-full shadow-2xl mx-auto flex justify-center items-center">
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
                      className="w-40 relative z-10"
                      src={expressImg}
                      alt="html"
                    />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-10  rounded-xl  text-center relative overflow-hidden"
                >


                  {/* Animated Border Circle */}
                  <div className="relative w-32 h-32 rounded-full shadow-2xl mx-auto flex justify-center items-center">
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
                      className="w-40 relative z-10"
                      src={nextjs}
                      alt="html"
                    />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-10  rounded-xl  text-center relative overflow-hidden"
                >




                  {/* Animated Border Circle */}
                  <div className="relative w-32 h-32 rounded-full shadow-2xl mx-auto flex justify-center items-center">
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
                      className="w-40 relative z-10"
                      src={jwtImg}
                      alt="html"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="">
          <h2 className="text-4xl pb-10 font-bold text-center">
            Tools
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="p-10  rounded-xl  text-center relative overflow-hidden"
            >
              {/* Animated Border Circle */}
              <div className="relative w-32 h-32 rounded-full shadow-2xl mx-auto flex justify-center items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-full h-full border-t-4 border-b-4 border-green-500 rounded-full"
                ></motion.div>
                <img className="w-16 relative z-10" src="https://cdn3d.iconscout.com/3d/free/thumb/free-git-3d-icon-download-in-png-blend-fbx-gltf-file-formats--github-logo-version-control-system-vcs-coding-lang-pack-logos-icons-7578021.png?f=webp" alt="html" />
              </div>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="p-10  rounded-xl  text-center relative overflow-hidden"
            >
              {/* Animated Border Circle */}
              <div className="relative w-32 h-32 rounded-full shadow-2xl mx-auto flex justify-center items-center">
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
                  className="w-16 relative z-10"
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-github-3d-icon-download-in-png-blend-fbx-gltf-file-formats--twitter-logo-social-media-pack-logos-icons-7516837.png?f=webp"
                  alt="html"
                />
              </div>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="p-10  rounded-xl  text-center relative overflow-hidden"
            >
              {/* Animated Border Circle */}
              <div className="relative w-32 h-32 rounded-full shadow-2xl mx-auto flex justify-center items-center">
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
                  className="w-16 relative z-10"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0zbUROVF8IH-i4uqbYTUJcaUvhXr9qBjvQ&s"
                  alt="html"
                />
              </div>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="p-10  rounded-xl  text-center relative overflow-hidden"
            >
              {/* Animated Border Circle */}
              <div className="relative w-32 h-32 rounded-full shadow-2xl mx-auto flex justify-center items-center">
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
                  className="w-16 relative z-10"
                  src={vercel}
                  alt="html"
                />
              </div>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="p-10  rounded-xl  text-center relative overflow-hidden"
            >




              {/* Animated Border Circle */}
              <div className="relative w-32 h-32 rounded-full shadow-2xl mx-auto flex justify-center items-center">
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
                  className="w-16 relative z-10"
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-visual-studio-code-3d-icon-download-in-png-blend-fbx-gltf-file-formats--microsoft-logo-python-java-c-coding-lang-pack-logos-icons-7578027.png"
                  alt="html"
                />
              </div>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="p-10  rounded-xl  text-center relative overflow-hidden"
            >
              {/* Animated Border Circle */}
              <div className="relative w-32 h-32 rounded-full shadow-2xl mx-auto flex justify-center items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-full h-full border-t-4 border-b-4 border-green-500 rounded-full"
                ></motion.div>
                <img className="w-16 relative z-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEl-1NwtTGDJ5RnK_ntcpb6xft4yceU31uuedAVfvG4M2pQF5BQsoI79VZsNR91irX3U&usqp=CAU" alt="html" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Skill;