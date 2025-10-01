import React, { useState, useEffect } from "react";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Hide navbar on scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Detect active section using Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close mobile menu after click
    }
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`navbar fixed top-0 left-0 w-full flex items-center justify-between bg-black/60 backdrop-blur-2xl text-white border-b-[1px] border-zinc-900 shadow-md transition-transform duration-300 p-1 md:px-6 z-50 select-none ${showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        {/* Logo */}
        <div className="logo">
          <img
            src="sportech.png"
            className="md:h-7 md:w-28 h-5 w-20 pointer-events-none select-none"
            alt="logo"
          />
        </div>

        {/* Desktop Menu */}
        <div className="details md:flex hidden md:gap-10   gap-3 items-center">
          <ul className="flex md:gap-5 gap-3 md:text-base text-[12px]">
            {["home", "about", "work", "contact"].map((item) => (
              <li
                key={item}
                className={`cursor-pointer transition-all ${activeSection === item
                    ? "border-b-2 border-white"
                    : "hover:border-b-2 hover:border-gray-400"
                  }`}
                onClick={() => handleScrollTo(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ))}
          </ul>

          <a
             href="https://wa.me/919899729915" 
            target="_blank"
            rel="noopener noreferrer"
          >

            <img
              src="whattsapp.png"
              alt="whatsapp"
              className="md:w-14 md:h-14 h-9 w-9 cursor-pointer"
            />

          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="phone flex items-center px-1 gap-3 md:hidden cursor-pointer">
          <a
             href="https://wa.me/919899729915" 
            target="_blank"
            rel="noopener noreferrer"
          >

            <img src="whattsapp.png" alt="whatsapp" className="h-9 w-9" />

          </a>
          <div
            className="menu flex flex-col gap-1"
            onClick={() => setMenuOpen(true)}
          >
            <div className="h-[1px] w-5 rounded-full bg-white"></div>
            <div className="h-[1px] w-5 rounded-full bg-white"></div>
            <div className="h-[1px] w-5 rounded-full bg-white"></div>
          </div>
        </div>
      </div>

      {/* Transparent Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-1/2 bg-black/80 backdrop-blur-2xl text-white flex flex-col items-start p-6 gap-6 transition-transform duration-300 z-40 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="self-end text-xl font-bold mt-6"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        {/* Menu Links */}
        <ul className="flex flex-col gap-6 text-lg">
          {["home", "about", "work", "contact"].map((item) => (
            <li
              key={item}
              className={`cursor-pointer transition-all ${activeSection === item
                  ? "border-b-2 border-white"
                  : "hover:border-b-2 hover:border-gray-400"
                }`}
              onClick={() => handleScrollTo(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
