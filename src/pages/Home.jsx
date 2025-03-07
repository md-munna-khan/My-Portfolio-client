import { Helmet } from "react-helmet";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import MyLatestProjects from "../components/MyLatestProjects";


import SkillsAnimation from "../skills/SkillsAnimation";




const Home = () => {
    return (
        <div>
               <Helmet>
        <title>Munna||Web devoloper</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
        
       <Banner></Banner>
       <AboutMe></AboutMe>
     
   <SkillsAnimation></SkillsAnimation>
       <MyLatestProjects></MyLatestProjects>
       <Contact></Contact>
     
        </div>
    );
};

export default Home;