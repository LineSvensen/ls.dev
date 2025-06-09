import { useParams } from "react-router-dom";
import { useProjectStore } from "../store/projectStore";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = useProjectStore((state) =>
    state.projects.find((p) => p.id === id)
  );

  if (!project) return <p className="text-white p-8">Project not found.</p>;

  return (
    <section className="text-white p-8 bg-black min-h-screen">
      <h1 className="text-3xl font-spartan font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="mb-6 max-w-md mx-auto rounded shadow-lg"
      />
      <p className="font-poppins max-w-2xl mx-auto">{project.description}</p>
      <div className="mt-6 flex justify-center gap-6 text-pink-500 font-semibold">
        <a href={project.website} target="_blank" rel="noreferrer">
          Go to Website ↗
        </a>
        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub Repo 🐙
        </a>
      </div>
    </section>
  );
}
