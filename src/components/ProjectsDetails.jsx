import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ProjectsDetails = () => {
   const {id}=useParams()
   
const loaderData=useLoaderData()
const singleData=loaderData.find(data=>data.id=== id)
const [myProject,setMyProjects]=useState(singleData)
console.log(myProject)
    return (
        <div className="my-10 "> 
            <h1 className="uppercase text-4xl pb-8 text-center">My  project Details</h1>
            <div>
           
                <div className="grid  mx-auto grid-cols-4 border  p-4 rounded-lg" key={myProject.id}>
                    <div className="col-span-2">
                    <h1 className="text-2xl">{myProject.title}</h1>
                <p>{myProject.description}</p>
                 </div>
                 <div className="col-span-2">
                 <img className="w-full h-full object-cover" src={myProject.image} alt="" />
                 </div>
                 
                </div>  
            
            </div>
        </div>
    );
};

export default ProjectsDetails;
