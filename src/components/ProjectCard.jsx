import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-md shadow-md p-4 w-full max-w-xs flex flex-col h-[450px]">
      {/* TOP SECTION: Title, image, description */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-black font-spartan">
          {project.title}
        </h3>

        <img
          src={project.image}
          alt={project.title}
          className="my-3 mx-auto h-52 object-contain rounded shadow-lg border border-gray-200"
        />

        <p className="text-black font-poppins text-sm mb-2">
          {project.description}
        </p>
      </div>

      {/* BOTTOM SECTION: Links and button */}
      <div>
        <div className="flex justify-center gap-6 text-pink-500 font-poppins font-semibold uppercase text-sm">
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            Go to Website <i className="fa-solid fa-arrow-pointer" />
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub Repo <i className="fa-brands fa-github" />
          </a>
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="mt-3 block text-center bg-pink-600 text-white font-bold py-2 rounded hover:bg-pink-500 transition"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
