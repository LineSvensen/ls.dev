import React from "react";
import typingGif from "../assets/typing-gif.gif";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="bg-black text-white py-12 px-6 flex flex-col items-center"
    >
      <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl">
        <img src={typingGif} alt="typing gif" className="w-32 md:w-40" />
        <div>
          <h2 className="text-2xl font-extrabold font-spartan text-center md:text-left mb-4">
            About me
          </h2>
          <p className="text-center md:text-left font-poppins max-w-xl">
            I just finished my front-end development education at Noroff in
            Oslo. I have a bachelors degree in business development and
            innovation from Høyskolen Kristiania. Combining my
            business-knowledge with my coding skills, makes me a developer who
            can see the bigger picture - not just the code at line 29. I love to
            lift up the people around me - and spread a little laugh.
          </p>
        </div>
      </div>
    </section>
  );
}
