import ContactSection from "@/components/contact/ContactSection";
import HeroSection from "@/components/home/hero/HeroSection";
import ProjectSection from "@/components/projects/ProjectSection";
import ResumeSection from "@/components/resume/ResumeSection";
import ServiceSection from "@/components/service/ServiceSection";
import SkillSection from "@/components/skills/SkillSection";
import AnimationLayout from "../../layouts/AnimationLayout";

export default function Home() {
  return (
    <AnimationLayout>
   <HeroSection/>
   <ServiceSection/>
   <ResumeSection/>
   <ProjectSection/>
   <SkillSection/>
   <ContactSection/>
    </AnimationLayout>
  );
}
