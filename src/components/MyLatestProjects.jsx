import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const MyLatestProjects = () => {
    const [myProjects,setMyProjects]=useState([])
useEffect(()=>{
    fetch('Projects.json')
    .then(res=>res.json())
    .then(data=>setMyProjects(data))
},[])
console.log(myProjects)
    return (
        <div className="my-10 "> 
            <h1 className="uppercase text-4xl pb-8 text-center">my latest projects</h1>
            <div>
            {
                myProjects.map(project=> 
                <div className="grid max-w-[1000px] mx-auto grid-cols-4 border  p-4 rounded-lg" key={project.id}>
                    <div className="col-span-2">
                    <p className="text-5xl">{project.title}</p>
                    <a
                href={project.Live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-500 text-white rounded block mt-2"
              >
                Live Site Link
              </a>
                   <Link to={`/details/${project.id}`}>
                   <button className="p-4 mt-2 bg-slate-500">View Details</button>
                   </Link>
                 </div>
                 <div className="col-span-2">
                 <img className="w-[400px] h-[400px] object-cover" src={project.image} alt="" />
                 </div>
                 
                </div>  )
            }
            </div>
        </div>
    );
};

export default MyLatestProjects;
