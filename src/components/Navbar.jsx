import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between">
          {/* logo */}
          <div><h1 className="text-3xl">MUNNA</h1></div>
    <div className="gap-4 flex text-lg">
            <p>ABOUT</p>
          <p>EXPERIENCE</p>
          <p>SKILLS</p>
          <p>EDUCATION</p>
          <Link to='/projects'>PROJECTS</Link>
    </div>

        </div>
    );
};

export default Navbar;