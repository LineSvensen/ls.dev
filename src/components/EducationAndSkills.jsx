import React from "react";
import noroffLogo from "../assets/noroff-logo-white.png";
import hkLogo from "../assets/hk-logo.png";

export default function EducationAndSkills() {
  const techIcons = [
    {
      src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png",
      alt: "React",
    },

    {
      src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png",
      alt: "Tailwind",
    },

    {
      src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mysql.png",
      alt: "MySQL",
    },

    {
      src: "https://user-images.githubusercontent.com/25181517/192108893-b1eed3c7-b2c4-4e1c-9e9f-c7e83637b33d.png",
      alt: "WebStorm",
    },
    {
      src: "https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png",
      alt: "VSCode",
    },
    {
      src: "https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png",
      alt: "Postman",
    },
    {
      src: "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png",
      alt: "HTML",
    },
    {
      src: "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png",
      alt: "CSS",
    },
    {
      src: "https://user-images.githubusercontent.com/25181517/192158957-b1256181-356c-46a3-beb9-487af08a6266.png",
      alt: "WordPress",
    },
    {
      src: "https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png",
      alt: "Figma",
    },
    {
      src: "https://github-production-user-asset-6210df.s3.amazonaws.com/136815194/253220886-02494c7c-de6a-43a6-9293-6369696842ed.png",
      alt: "Canva",
    },
    {
      src: "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
      alt: "JavaScript",
    },
    {
      src: "https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png",
      alt: "TypeScript",
    },
    {
      src: "https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png",
      alt: "Vite",
    },
  ];

  return (
    <section className="bg-black text-white px-6 py-12 flex flex-col items-center text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-20">
        <img src={noroffLogo} alt="Noroff" className="w-40 object-contain" />
        <img
          src={hkLogo}
          alt="Høyskolen Kristiania"
          className="w-48 object-contain"
        />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-4xl">
        {techIcons.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            title={icon.alt}
            className="w-12 h-12 mx-auto"
          />
        ))}
      </div>
    </section>
  );
}
