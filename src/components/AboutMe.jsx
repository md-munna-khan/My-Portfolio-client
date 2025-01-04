
import  myimage from  '../assets/myimage.jpg'
const AboutMe = () => {
    return (
        <div className="grid grid-cols-4 space-y-4  my-10">
           <div className="md:col-span-2  col-span-4 ">
           <h1 className="text-2xl">WHO I AM?</h1>
         <p className="pt-4">
          "I’m Munna, a full-stack developer passionate about creating seamless web applications. With a solid foundation in JavaScript and a love for exploring new frameworks and tools, I work on both the front-end and back-end to deliver innovative and user-friendly solutions. I’m always open to new projects and job opportunities that help me grow as a developer."
         </p>
         </div>
         <div className="md:col-span-2 col-span-4">
<img className='w-[300px] mx-auto  md:w-[600px] md:h-[500px] h-[300px] justify-center items-center transform transition-transform duration-300 hover:scale-110 object-cover rounded' src={myimage} alt="" />
         </div>
          
        </div>
    );
};

export default AboutMe;