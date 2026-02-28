import { DiJava, DiJavascript, DiMysql, DiNodejs, DiPhp, DiPython, DiReact } from "react-icons/di"
import { RiTailwindCssFill } from "react-icons/ri"
import Header from "../general/Header"

const skills =[
    {
        name: "JavaScript",
        icon: <DiJavascript/>,
        skillLevel: 60,
    },
    {
        name:"React Js",
        icon:<DiReact/>,
        skillLevel:70
    },
    {
        name:"Node Js",
        icon:<DiNodejs/>,
        skillLevel:50
    },
    {
        name:"Python",
        icon:<DiPython/>,
        skillLevel:50
    },
    {
        name:"Java",
        icon:<DiJava/>,
        skillLevel:70
    },
   
    {
        name:"MySQL",
        icon:<DiMysql/>,
        skillLevel:70
    },
    {
        name:"PHP",
        icon:<DiPhp/>,
        skillLevel:70
    },
    {
        name:"Tailwind CSS",
        icon:<RiTailwindCssFill/>,
        skillLevel:90
    }

]
const SkillSection = () => {
  return ( 
    <section id="skill" className="py-16">
        <Header title="My Skills"/>
        <div className="flex flex-wrap justify-center gap-6">
            {
                skills.map((skill, index)=>{
                    return(
                        <div data-aos="flip-right" 
                        data-aos-delay={index * 100} key={index} className="bg-slate-900 text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg
                        transition:hover:scale-110">
                            <div className="text-5xl  text-gray-300">
                                {
                                skill.icon
                                }

                            </div>
                            <p className="text-2xl font-semibold my-4 text-gray-200">{skill.skillLevel}%</p>
                            <p className="text-indigo-500 font-semibold">{skill.name}</p>

                        </div>
                    )
                })
            }

        </div>

    </section>
  )
}

export default SkillSection