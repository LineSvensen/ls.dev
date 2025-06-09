import React from "react";
import bulbIcon from "../assets/icon-bulb.png";
import devIcon from "../assets/icon-dev.png";
import designIcon from "../assets/icon-design.png";

const skills = [
  {
    icon: bulbIcon,
    label: "Tech business advice and ideas",
  },
  {
    icon: devIcon,
    label: "Developing website or App",
  },
  {
    icon: designIcon,
    label: "Design, user experience and creativity",
  },
];

export default function SkillsSection() {
  return (
    <section className="bg-black text-white py-12 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold font-spartan mb-10">
        Let me help you with your next project!
      </h2>
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-8">
        {skills.map(({ icon, label }, idx) => (
          <div
            key={idx}
            className="max-w-xs flex flex-col items-center text-center px-4"
          >
            <img
              src={icon}
              alt={label}
              className="w-16 h-16 rounded-full p-3 bg-gradient-to-br from-pink-500 to-yellow-400 shadow-[0_0_80px_0_rgba(145,145,145,1)] animate-pulse"
            />
            <p className="mt-4 text-base font-semibold font-poppins">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
