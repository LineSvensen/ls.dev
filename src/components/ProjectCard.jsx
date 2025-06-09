import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-md shadow-md p-4 max-w-xs w-full">
      <h3 className="text-xl font-bold text-black font-spartan">
        {project.title}
      </h3>
      <img
        src={project.image}
        alt={project.title}
        className="my-4 mx-auto max-h-64 object-contain rounded"
      />
      <p className="text-black font-poppins">{project.description}</p>
      <div className="mt-4 flex justify-center gap-6 text-pink-500 font-poppins font-semibold uppercase text-sm">
        <a href={project.website} target="_blank" rel="noopener noreferrer">
          Go to Website <i className="fa-solid fa-arrow-pointer" />
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub Repo <i className="fa-brands fa-github" />
        </a>
      </div>
      <Link
        to={`/projects/${project.id}`}
        className="block mt-4 text-pink-600 font-bold underline text-sm hover:text-pink-400"
      >
        Read more
      </Link>
    </div>
  );
}
