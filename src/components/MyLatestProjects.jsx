



import React, { useEffect, useState } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { Link } from "react-router-dom";

const MyLatestProjects = () => {
  const [myProjects, setMyProjects] = useState([]);

  useEffect(() => {
    fetch("Projects.json")
      .then((res) => res.json())
      .then((data) => setMyProjects(data));
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms for animations
  }, []);

  return (
    <div id="projects" className="my-10 px-4 text-white">
      <h1 className="text-4xl font-bold uppercase text-green-500 pb-8 text-center">My Latest Projects</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {myProjects.map((project) => (
          <div
            className="border rounded-lg overflow-hidden bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            key={project.id}
            data-aos="fade-up" // Apply fade-up animation
          >
            <img
              className="w-full h-64 object-cover"
              src={project.image}
              alt={project.title}
              data-aos="zoom-in" // Apply zoom-in animation on image
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="dark:text-gray-400 text-sm mb-4">
                {project.description || "A brief description of the project."}
              </p>
              <Link to={`/details/${project.id}`}>
                <button className="w-full bg-green-500 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLatestProjects;
