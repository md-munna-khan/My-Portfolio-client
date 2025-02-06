
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import { useLoaderData, useNavigate, useParams } from "react-router-dom";
// import { useState, useEffect } from "react";


// const ProjectsDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate()
//   const loaderData = useLoaderData();
//   const [myProject, setMyProject] = useState(null);

//   useEffect(() => {
//     const singleData = loaderData.find(data => data.id === id);
//     setMyProject(singleData);
//   }, [id, loaderData]);

//   if (!myProject) {
//     return <div>Loading...</div>;
//   }
// const handleBackToHome= ()=>{
//     navigate('/')
// }
//   return (
//     <div className="my-10 text-white">
     
//       <h1 className="uppercase text-4xl pb-8 text-center">My Project Details</h1>
//       <div>
//         <div className="grid mx-auto gap-5 grid-cols-4 border p-4 rounded-lg" key={myProject.id}>
//         <div className=" col-span-4 md:col-span-2 ">
//             <img
//               className="w-full h-full object-cover"
//               src={myProject.image}
//               alt={`Image for ${myProject.title}`}
//             />
//           </div>
//           <div className="col-span-4 md:col-span-2">
//             <h1 className="text-2xl">{myProject.title}</h1>
//             <p>Description: {myProject.description}</p>
//             <div className=" rounded-lg">
//               <a
//                 href={myProject.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center p-2 bg-green-500 rounded  mt-2"
//               >
//                 Live Site Link <FaExternalLinkAlt className="ml-2" />
//               </a>
//             </div>
//             <div className="mt-4">
//               <h2 className="text-xl">Technologies Used:</h2>
//               <ul className="list-disc pl-5">
//                 {myProject.technologiesUsed.map((tech, index) => (
//                   <li key={index}>{tech}</li>
//                 ))}
//               </ul>
//             </div>
//             <div className="mt-4">
//               <h2 className="text-xl">Key Learnings & Improvements:</h2>
//               <p>{myProject.keyLearningsImprovements}</p>
//             </div>
//             <div className="mt-4 flex justify-evenly">
//              <div> <a
//                 href={myProject.githubRepo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center bg-green-500 text-white px-1 py-1 md:p-2 rounded-lg mt-2"
//               >
//                 GitHub Repo <FaGithub className="ml-2" />
//               </a></div>
//            <div>   <button onClick={handleBackToHome} className="bg-green-500 rounded mt-2 px-1 py-1 md:p-2">Back to Home</button></div>
//             </div>
      
     
//           </div>
        
//         </div>
//       </div>
//     </div>
//   );
// };



import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProjectsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const [myProject, setMyProject] = useState(null);

  useEffect(() => {
    const singleData = loaderData.find(data => data.id === id);
    setMyProject(singleData);
  }, [id, loaderData]);

  if (!myProject) {
    return <div>Loading...</div>;
  }

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="my-10 text-white">
      <h1 className="uppercase text-4xl pb-8 text-center">My Project Details</h1>
      <div>
        <div className="grid mx-auto gap-5 grid-cols-4 border p-4 rounded-lg" key={myProject.id}>
          <div className="col-span-4 md:col-span-2">
            <img
              className="w-full h-full object-cover"
              src={myProject.image}
              alt={`Image for ${myProject.title}`}
            />
          </div>
          <div className="col-span-4 md:col-span-2">
            <h1 className="text-2xl">{myProject.title}</h1>
            <p>Description: {myProject.description}</p>
            <div className="rounded-lg">
              <a
                href={myProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center p-2 bg-green-500 rounded mt-2"
              >
                Live Site Link <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
            <div className="mt-4">
              <h2 className="text-xl">Technologies Used:</h2>
              <ul className="list-disc pl-5">
                {myProject.technologiesUsed.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h2 className="text-xl">Challenges Faced:</h2>
              <p>{myProject.challengesFaced}</p>
            </div>
            <div className="mt-4">
              <h2 className="text-xl">Future Plans:</h2>
              <p>{myProject.futurePlans}</p>
            </div>
            <div className="mt-4 flex justify-evenly">
              <div>
                <a
                  href={myProject.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-1 py-1 md:p-2 rounded-lg mt-2"
                >
                  GitHub Repo <FaGithub className="ml-2" />
                </a>
              </div>
              <div>
                <button onClick={handleBackToHome} className="bg-green-500 rounded mt-2 px-1 py-1 md:p-2">
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;

