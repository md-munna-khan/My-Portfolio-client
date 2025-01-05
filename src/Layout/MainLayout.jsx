import { Outlet } from "react-router-dom";



const MainLayout = () => {
    return (
        <div className="container mx-auto p-8 rounded-md bg-gray-800  my-4">
         
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;