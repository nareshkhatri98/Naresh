import Link from "next/link";
import { LuDownload } from "react-icons/lu";
import LinkButton from "../LinkButton";
import { navLinks } from "./Navbar";

interface MobileNavbarProps {
    navOpen?: boolean;

}
const MobileNavbar = ({ navOpen }: MobileNavbarProps) => {
    const showMobileNav = navOpen ? "translate-x-0" :"translate-x-[100%]"
  return (
    <>
    {/* inset-background */}
    <div className={`fixed inset-0 transform right-0 z-80 bg-black/30 w-full h-screen
        transition-all duration-500 ${showMobileNav}`}>

    {/* nav-links */}
    <ul className={`fixed flex items-center justify-center text-white flex-col h-full transform transition-all duration-500 delay-300
        w-[80%] sm:w-[60%] bg-slate-800 space-y-1 z-80 right-0 top-0`}>
            {navLinks.map((link)=>{
                return(
                    
                    <li key={link.url}>
                        <Link href={link.url} className="flex items-center justify-center text-xl font-medium text-white px-6 py-4
                        rounded-lg hover:bg-slate-700 hover:text-cyan-300 transition-all duration-300 border-b border-slate-700/30 w-full
                        text-center">{link.label}</Link>
          
                    </li>
                )
            })}
            <LinkButton href="/documents/Nareshkhatri_resume.pdf" text="Download CV"  download icon={LuDownload} iconPosition="left" />
        </ul>
    </div>
    </>
  )
}

export default MobileNavbar