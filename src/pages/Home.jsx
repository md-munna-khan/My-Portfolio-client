import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import MyLatestProjects from "../components/MyLatestProjects";
import Navbar from "../components/Navbar";
import SkillsAnimated from "../components/SkillsAnimated";


const Home = () => {
    return (
        <div>
         <Navbar></Navbar>
       <Banner></Banner>
       <AboutMe></AboutMe>
       <SkillsAnimated></SkillsAnimated>
       <MyLatestProjects></MyLatestProjects>
        </div>
    );
};

export default Home;