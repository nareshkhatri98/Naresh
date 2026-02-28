import Typewriter from "typewriter-effect";
const AnimatedIntro = () => {
  return (
    <div data-aos ="fade-up" data-aos-delay="400" className="text-lg sm:text-2xl h-30 px-8 text-center font-medium text-gray-400 ">Hi, I&apos;m Naresh - A passionate
       <span className="text-indigo-400 font-bold">
        <Typewriter options={{
            strings:[
                "Fullstack Developer",
                "Nextjs Developer",
                "React Export",
                "Data Analyst"
            ],
            autoStart:true,
            loop:true,
            delay:75,
            deleteSpeed:50,
            wrapperClassName:"inline-block py-6"
        }}/>
       </span>
    </div>
  )
}

export default AnimatedIntro