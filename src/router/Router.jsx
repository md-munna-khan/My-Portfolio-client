import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import MyLatestProjects from "../components/MyLatestProjects";
import ProjectsDetails from "../components/ProjectsDetails";
import { param } from "framer-motion/client";


const router = createBrowserRouter([
{
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/projects',
            element:<MyLatestProjects></MyLatestProjects>
        },
        {
            path:'/details/:id',
            element:<ProjectsDetails></ProjectsDetails>,
            loader:()=> fetch('/Projects.json')
        }
    ]

}
])

export default router;