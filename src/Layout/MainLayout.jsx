import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



const MainLayout = () => {
    return (
        <div className="">
          <header className="bg-gray-900">
          <Navbar></Navbar>
          </header>
      
         <main className="container mx-auto px-2 md:px-5 rounded-md my-4">
         <Outlet></Outlet>
         </main>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;