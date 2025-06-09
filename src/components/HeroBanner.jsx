import React from "react";
import heroImage from "../assets/img_me.png";

export default function HeroBanner() {
  return (
    <section className="w-full bg-black text-white flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12">
      {/* Text section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-4xl font-extrabold font-spartan">Hi!</h1>
        <div className="flex gap-2 text-3xl font-semibold font-poppins items-center">
          <h2>I'm</h2>
          <h2 className="relative inline-block animated-text">
            <span></span>
          </h2>
        </div>
        <h2 className="text-3xl font-semibold font-poppins">
          Welcome to my portfolio!
        </h2>
      </div>

      {/* Image section */}
      <div className="w-full md:w-1/2 flex justify-center items-center py-6 float-animation">
        <div className="bg-gradient-to-br from-pink-500 via-yellow-400 to-blue-400 bg-[length:400%_400%] animate-gradient rounded-full overflow-hidden shadow-[0_0_80px_0_rgba(145,145,145,1)] max-w-[300px] md:max-w-[400px]">
          <img
            src={heroImage}
            alt="Line Svensen"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
