import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProjectStore } from "../store/projectStore";

export default function ProjectDetail() {
  const { id } = useParams();
  const projects = useProjectStore((state) => state.projects);
  const project = projects.find((proj) => proj.id === id);

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!project) {
    return (
      <div className="text-center text-white p-10">
        <h2 className="text-2xl font-bold">Project not found</h2>
      </div>
    );
  }

  return (
    <section className="text-white bg-black min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <img
          src={project.image}
          alt={project.title}
          className="w-full mb-6 rounded-lg shadow-lg"
        />
        <p className="text-lg mb-6">{project.description}</p>

        {project.details && (
          <p className="text-base text-gray-300 whitespace-pre-line mb-6">
            {project.details}
          </p>
        )}

        <div className="flex flex-wrap gap-4 mb-6">
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-500 px-4 py-2 rounded text-white font-semibold"
          >
            Visit Website
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-200 px-4 py-2 rounded text-black font-semibold"
          >
            GitHub Repo
          </a>
          <button
            onClick={handleCopy}
            className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-white font-semibold"
          >
            {copied ? "URL Copied!" : "Copy Link "}
          </button>
        </div>
      </div>
    </section>
  );
}
