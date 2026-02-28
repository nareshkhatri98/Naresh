import Link from "next/link";
import { DiGithub } from "react-icons/di";
import { FaEnvelope, FaLinkedinIn, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { LuSend } from "react-icons/lu";

const contactInfo=[
    {
        icon:<FaEnvelope className="w-6 h-6"/>,
        title:'Email',
        value:'nareshksee12@gmail.com',
        link:'https://mail.google.com/mail/u/2/#inbox'
    },
    
    {
        icon:<DiGithub className="w-6 h-6"/>,
        title:'GitHub',
        value:'naresh9810',
        link:'https://github.com/nareshkhatri98'
    },
   
     {
        icon:<FaLinkedinIn className="w-6 h-6"/>,
        title:'LinkedIn',
        value:'Naresh Khatri',
        link:'https://www.linkedin.com/in/naresh9810/'
    },
    {
        icon:<FaPhone className="w-6 h-6"/>,
        title:'Phone',
        value:'9844703217',
        link:'tel:+919844703217'
    },
    {
        icon:<FaMapMarkedAlt className="w-6 h-6"/>,
        title:'Location',
        value:'remote',
        link:'#'
    },

]
const ContactSection = () => {
    const insputStyle ="px-4 py-3.5 my-4 bg-slate-800 outline-none w-full rounded-md text-gray-200 placeholder-gray-400";
  return (
    <section id="contact" className=" py-16 lg:py-30">
        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            <div>
                <h2 className=" py-3 text-3xl md:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-indigo-500
        to-gray-300">Ready to Collaborate?</h2>
        <p className="text-gray-400 mb-10 text-base lg:text-lg leading-relaxed "> I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

        <div data-aos="fade-right" className="space-y-5 mb-12 ">
            {
                contactInfo.map((item, index)=>{
                    return(
                        <Link key={index} href={item.link} className="flex group items-center gap-4 text-gray-300 py-1 px-2 hover:bg-white/5 rounded-lg ">
                            <div className="h-15 w-15 rounded-full grid place-items-center bg-white/5 text-white
                             transition-transform group-hover:scale-105">{item.icon}</div>
                             <div>
                                <h4 className="text-md  font-medium  text-white">{item.title}</h4>
                                <p>{item.value}</p>
                             </div>
                            
                        </Link>
                    )
                })
            }

        </div>
            </div>
        {/* form */}
        <div data-aos="fade-left">
            <form className=" rounded-lg bg-slate-900 px-4 py-8">
                <input type="text"  placeholder="Your name" className={insputStyle} required/>
                <input type="text"  placeholder="Email" className={insputStyle} required/>
                <input type="text"  placeholder="Subject of Message" className={insputStyle} required/>
                <textarea placeholder="Your Message" className={`${insputStyle} resize-none`}   rows={5}  required></textarea>
                <button className="w-full bg-linear-to-r from-blue-900 to bg-purple-800 hover:from-blue-800 hover:to-purple-700 text-white
                font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70">
                    <LuSend size={20}/>
                    Send Message

                </button>
            </form>
        </div>
        </div>
    </section>
  )
}

export default ContactSection