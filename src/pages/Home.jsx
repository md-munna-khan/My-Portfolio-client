import { Helmet } from "react-helmet";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import MyLatestProjects from "../components/MyLatestProjects";
import Navbar from "../components/Navbar";
import SkillsAnimated from "../components/SkillsAnimated";


const Home = () => {
    return (
        <div>
               <Helmet>
        <title>Munna||Web devoloper</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
         <Navbar></Navbar>
       <Banner></Banner>
       <AboutMe></AboutMe>
       <SkillsAnimated></SkillsAnimated>
       <MyLatestProjects></MyLatestProjects>
       <Contact></Contact>
        </div>
    );
};

export default Home;