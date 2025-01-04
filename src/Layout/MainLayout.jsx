import { Outlet } from "react-router-dom";



const MainLayout = () => {
    return (
        <div className="container mx-auto   my-4">
         
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;