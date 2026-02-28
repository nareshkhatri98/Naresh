import Header from "../general/Header"
import ServiceCard from "./ServiceCard"

const ServiceSection = () => {
  return (
    <section id="services">
        {/* header section */}
        <Header title="What I Offer"/>
        <div className=" w-[90% ] sm:mx-20 sm:w-[80%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 mx-auto">
           <div data-aos="fade-right">
             <ServiceCard name="Frontend Development" icon={"/images/s1.png"} description="Creating responsive and interactive user interfaces using modern web technologies like React, Next.js, and Tailwind CSS."/>
           </div>
           <div data-aos="fade-right" data-aos-delay="200">
             <ServiceCard name="Backend Development" icon={"/images/s2.png"} description="Developing robust and scalable backend systems and APIs using Node.js, Express.js, and databases like MongoDB or PostgreSQL."/>
           </div>
            <div data-aos="fade-right" data-aos-delay="300">
              <ServiceCard name="Responsive Design" icon={"/images/s4.png"} description="Designing intuitive interfaces and user experiences that work seamlessly across all devices and screen sizes."/>
            </div>
            <div data-aos="fade-right" data-aos-delay="400">
              <ServiceCard name="Web Applications" icon={"/images/s3.png"} description="Building full-stack web applications with integrated frontend and backend functionality for seamless user experiences."/>
            </div>
        </div>

    </section>
  )
}

export default ServiceSection