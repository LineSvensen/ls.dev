import React from "react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Over a year",
      description: "of hands-on experience in web development",
    },
    {
      title: "Bachelors degree",
      description: "in business development and innovation",
    },
    {
      title: "7+ years",
      description: "work experience across various industries",
    },
  ];

  return (
    <section className="bg-black text-white border-y border-white shadow-[0_0_25px_white] py-8">
      <div className="flex flex-col md:flex-row justify-evenly items-center text-center gap-10 md:gap-0">
        {experiences.map((exp, index) => (
          <div key={index} className="max-w-sm px-4">
            <h3 className="text-pink-500 font-bold text-xl font-spartan">
              {exp.title}
            </h3>
            <p className="text-base font-poppins mt-1">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
