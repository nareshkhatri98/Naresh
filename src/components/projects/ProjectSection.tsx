import Header from "../general/Header"
import ProjectCard from "./ProjectCard"

const ProjectSection = () => {
  return (
    <section id="project">
        <Header title="My Projects"/>
        <div className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden">
         <div data-aos = "fade-right">
            <ProjectCard title=" Learning Management System" imagePath="/images/image.png" description="An LMS developed using the MERAN algorithm (Map, Explore, Recommend, Analyze, Navigate) personalizes learning by analyzing user behavior and delivering adaptive course recommendations.
It enhances student engagement and learning outcomes through intelligent content "/>
         </div>
         <div data-aos="fade-left">
           <ProjectCard title=" HR Analytics Dashboard" imagePath="/images/p7.png" description="An HR Analytics Dashboard built using Microsoft Power BI visualizes key HR metrics like employee performance, attrition, and recruitment trends."/> 
         </div>
         <div data-aos="fade-right">
            <ProjectCard title=" Modern Dashboard UI" imagePath="/images/p3.webp" description="A modern dashboard UI built with React and Tailwind CSS."/>
         </div>
         <div data-aos="fade-left">
            <ProjectCard title=" Modern Dashboard UI" imagePath="/images/p4.webp" description="A modern dashboard UI built with React and Tailwind CSS."/>
        </div>
         </div>
    </section>
  )
}

export default ProjectSection