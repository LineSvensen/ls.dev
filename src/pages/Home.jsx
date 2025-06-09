import HeroBanner from "../components/HeroBanner";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";

function Home() {
  return (
    <main>
      <HeroBanner />
      <ExperienceSection />
      <ProjectsSection />
      {/* Other sections go here */}
    </main>
  );
}

export default Home;
