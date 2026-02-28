import { LuGraduationCap } from "react-icons/lu"
import { RiNextjsFill, RiNodejsFill } from "react-icons/ri"
import Header from "../general/Header"
import ResumeCard from "./ResumeCard"

const ResumeSection = () => {
  return (
    <section id="resume" className="my-12">
        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-col-1 xl:grid-cols-2 gap-10 ">
            {/* education section */}

            <div >
                <Header title="My Education" />
                <div data-aos="zoom-out" className="space-y-6">
                    <ResumeCard icon={LuGraduationCap} role="BCA Student"
                    description="Bachelor in Computer Application | SouthWester State College | Focus on Algorithm, Data Structure, Software Engineering principles and, web technologies " date="Feb 2021 - April 2026 "/>
                    <ResumeCard icon={LuGraduationCap} role="+2 Science Student"
                    description="Bachelor in Computer Application | AdreshRaj Memorial Secondary School | Focus on Mathematics, Physics and Chemistry" date="Feb 2018 - April 2020 "/>
                    <ResumeCard icon={LuGraduationCap} role="SLC Student"
                    description="School level certificate | Chandra Surya Mavi | Focus on basic mathematics and science concepts" date="Feb 2008 - April 2017 "/>
                </div>
            </div>
             {/* work experience section */}
             <div>
                <Header title="Work Experience" as="h2"/>
                <div data-aos="zoom-out" data-aos-delay="200" className="space-y-6">
                    <ResumeCard icon={RiNextjsFill} role="Frontend Developer" description="Developed responsive web applications using React and Next.js, focusing on performance and user experience." />
                    <ResumeCard icon={RiNodejsFill} role="Backend Developer" description="Developed RESTful APIs and microservices using Node.js and Express.js, ensuring scalability and maintainability." />
                    <ResumeCard icon={RiNextjsFill} role="Full Stack Developer" description="Designed and implemented full-stack web applications, integrating frontend and backend technologies for seamless user experiences." />
                </div>
             </div>
        </div>
    </section>
  )
}

export default ResumeSection