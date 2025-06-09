export default function Footer() {
  return (
    <footer className="bg-pink-600 text-white text-sm font-poppins px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-center">
        &copy; {new Date().getFullYear()} Website developed by Line Svensen
      </p>

      <a
        href="https://www.linkedin.com/in/line-svensen-967131122/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-white hover:underline flex items-center gap-2"
      >
        <i className="fa-brands fa-linkedin-in text-lg"></i>
        <span className="uppercase tracking-wide text-sm">LinkedIn</span>
      </a>
    </footer>
  );
}
