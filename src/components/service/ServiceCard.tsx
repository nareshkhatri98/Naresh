import Image from "next/image"

interface ServiceCardProps {
    icon:string
    name:string,
    description:string,

}   
const ServiceCard = ({icon,name,description}:ServiceCardProps) => {
  return (
<div className="sm:mx-5  w-[90%] sm:w-full mx-auto"> 
    <div >
      <Image src={icon} alt="service" width={60} height={60}/>
    <h3 className="my-4 text-xl md:text-2xl font-bold text-gray-200">{name}</h3>
    <p className="text-gray-300">{description}</p>
    </div>
</div>
  )
}

export default ServiceCard