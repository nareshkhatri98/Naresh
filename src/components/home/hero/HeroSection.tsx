"use client";
import LinkButton from "@/components/general/LinkButton";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import AnimatedIntro from "./AnimatedIntro";
import Particles from "./Particles";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen relative flex justify-center items-center overflow-hidden flex-col"
    >
      {/* background particles */}
      <div style={{ width: "100%", height: "600px", position: "absolute" }}>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <div className="relative w-37.5 h-37.5" data-aos ="fade-up">
        {/* Glow background */}
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-600 blur-xl animate-pulse opacity-60" />

        {/* Optional blurred image */}
        <Image
          src="/images/naresh.jpeg"
          alt="blur"
          fill
          className="rounded-full object-cover blur-md scale-110 opacity-60"
        />

        {/* Clear image */}
        <Image
          src="/images/naresh.jpeg"
          alt="clear"
          fill
          className="rounded-full object-cover relative z-10"
        />
      </div>
      <h1
      data-aos ="fade-up" data-aos-delay="200"
        className=" text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl
      my-6 font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-gray-300 "
      >
        Hi, I&apos;m a BCA Student{" "}
      </h1>
      <AnimatedIntro />
      <LinkButton
        href="#project"
        text="See my work"
        icon={LuArrowRight}
        rounded={true}
        animation={true}
        animationType="fade-up"
        animationDelay={600}
        
      />
    </section>
  );
};

export default HeroSection;
