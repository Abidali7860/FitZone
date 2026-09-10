import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Exercises", path: "/exercises" },
    { name: "Membership", path: "/membership" },
    { name: "Contact", path: "/contact" },
    
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050807]/10 px-5 py-4 backdrop-blur-sm md:px-10 lg:px-16">

        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* LOGO */}

          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <h2 className="text-3xl text-white font-black uppercase tracking-tight">

                FIT
                <span className="text-[#9AF358]">
                  ZONE
                </span>

              </h2>
          </NavLink>


          {/* ================= DESKTOP NAV ================= */}

          <div className="hidden items-center gap-7 lg:flex">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `group relative py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#9AF358]"
                      : "text-gray-300 hover:text-[#9AF358]"
                  }`
                }
              >
                {link.name}

                {/* Underline */}

                <span
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#9AF358] transition-all duration-300 group-hover:w-full"
                ></span>
              </NavLink>
            ))}

          </div>


          {/* ================= JOIN BUTTON ================= */}

          <NavLink
            to="/contact"
            className="hidden animate-pulse items-center gap-2 rounded-full bg-[#9AF358] px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(154,243,88,0.4)] lg:flex"
          >
            Join Now
            <span className="text-lg">→</span>
          </NavLink>


          {/* ================= HAMBURGER ================= */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 lg:hidden"
          >
            <span
              className={`h-[2px] w-5 bg-white transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            ></span>

            <span
              className={`h-[2px] w-5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`h-[2px] w-5 bg-white transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </button>

        </div>
      </nav>


      {/* ================= OVERLAY ================= */}

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      ></div>


      {/* ================= MOBILE MENU ================= */}

      <aside
        className={`fixed top-0 left-0 z-[70] flex h-screen w-[290px] max-w-[85%] flex-col bg-[#080d0b] p-6 shadow-2xl transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        {/* MOBILE HEADER */}

        <div className="flex items-center justify-between border-b border-white/10 pb-6">

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/logo.png"
              alt="FitZone"
              className="w-32"
            />
          </NavLink>

          <button
            onClick={() => setIsOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-2xl text-white transition-all duration-300 hover:border-[#9AF358] hover:text-[#9AF358]"
          >
            ×
          </button>

        </div>


        {/* MOBILE LINKS */}

        <div className="mt-8 flex flex-col">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `group flex items-center justify-between border-b border-white/5 px-2 py-4 text-base transition-all duration-300 ${
                  isActive
                    ? "pl-4 text-[#9AF358]"
                    : "text-gray-300 hover:pl-4 hover:text-[#9AF358]"
                }`
              }
            >

              <span>{link.name}</span>

              <span className="translate-x-[-10px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>

            </NavLink>
          ))}

        </div>


        {/* MOBILE JOIN BUTTON */}

        <NavLink
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="mt-auto flex items-center justify-center gap-2 rounded-full bg-[#9AF358] px-6 py-3.5 font-bold text-black shadow-[0_0_20px_rgba(154,243,88,0.2)] transition-all duration-300 hover:scale-105 animate-pulse"
        >
          Join Now
          <span>→</span>
        </NavLink>

      </aside>
    </>
  );
};

export default Navbar;