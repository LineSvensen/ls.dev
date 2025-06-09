import HeroBanner from "../components/HeroBanner";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import AboutMe from "../components/AboutMe";
import EducationAndSkills from "../components/EducationAndSkills";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <main>
      <HeroBanner />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutMe />
      <EducationAndSkills />
      <ContactSection />
      <Footer />


    </main>
  );
}

export default Home;
