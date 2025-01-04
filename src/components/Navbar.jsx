

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
          <p>PROJECTS</p>
    </div>

        </div>
    );
};

export default Navbar;