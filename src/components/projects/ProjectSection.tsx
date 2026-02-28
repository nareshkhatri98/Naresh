import Header from "../general/Header"
import ProjectCard from "./ProjectCard"

const ProjectSection = () => {
  return (
    <section id="project">
        <Header title="My Projects"/>
        <div className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden">
         <div data-aos = "fade-right">
            <ProjectCard title=" Modern Dashboard UI" imagePath="/images/image.png" description="A modern dashboard UI built with React and Tailwind CSS."/>
         </div>
         <div data-aos="fade-left">
           <ProjectCard title=" Modern Dashboard UI" imagePath="/images/p2.webp" description="A modern dashboard UI built with React and Tailwind CSS."/> 
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