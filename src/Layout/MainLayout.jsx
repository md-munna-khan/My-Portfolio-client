import { Outlet } from "react-router-dom";



const MainLayout = () => {
    return (
        <div className="container mx-auto px-2 md:px-5 rounded-md bg-gray-800  my-4">
         
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;