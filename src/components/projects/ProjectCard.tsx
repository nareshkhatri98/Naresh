import Image from "next/image"

interface ProjectCardProps {
    imagePath:string,
    title:string,
    description:string,

}
const ProjectCard = ({imagePath,title,description}:ProjectCardProps) => {
  return (
    <div>
        <Image src={imagePath} alt="image" width={800} height={600} className="rounded-lg"/>
        <p className="text-xl my-4 sm:text-2xl font-semibold text-gray-200">{title}</p>
        <p className="text-gray-400 font-medium">{description}</p>
    </div>
  )
}

export default ProjectCard