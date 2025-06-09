export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-16 px-6 text-center flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold font-spartan mb-12">
        Contact me
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Email */}
        <a
          href="mailto:line.sven@live.no"
          className="flex flex-col items-center text-pink-500 hover:text-pink-300"
        >
          <i className="fa-solid fa-envelope text-3xl mb-2"></i>
          <p className="uppercase tracking-wide text-sm">Email:</p>
          <p className="text-sm font-poppins">line.sven@live.no</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/line-svensen-967131122/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-pink-500 hover:text-pink-300"
        >
          <i className="fa-brands fa-linkedin text-3xl mb-2"></i>
          <p className="uppercase tracking-wide text-sm">LinkedIn Profile</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/LineSvensen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-pink-500 hover:text-pink-300"
        >
          <i className="fa-brands fa-github text-3xl mb-2"></i>
          <p className="uppercase tracking-wide text-sm">GitHub Profile</p>
        </a>
      </div>
    </section>
  );
}
