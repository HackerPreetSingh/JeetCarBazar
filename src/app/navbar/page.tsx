"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8 py-4">
        <li>
          <a
            href="#home"
            className="text-blue-700 font-semibold hover:text-white hover:bg-blue-700 px-3 py-2 rounded transition-colors duration-200"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-green-700 font-semibold hover:text-white hover:bg-green-700 px-3 py-2 rounded transition-colors duration-200"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#cars"
            className="text-red-700 font-semibold hover:text-white hover:bg-red-700 px-3 py-2 rounded transition-colors duration-200"
          >
            Cars
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-purple-700 font-semibold hover:text-white hover:bg-purple-700 px-3 py-2 rounded transition-colors duration-200"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}