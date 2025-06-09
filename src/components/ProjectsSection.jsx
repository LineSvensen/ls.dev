import React from "react";
import { useProjectStore } from "../store/projectStore";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = useProjectStore((state) => state.projects);

  return (
    <section id="projects" className="bg-black py-12 px-6">
      <h2 className="text-center text-white text-3xl font-extrabold font-spartan mb-10">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
