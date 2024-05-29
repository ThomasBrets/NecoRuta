// React
import React, { useState, useEffect } from "react";

// Logo
import TransparentLogo from "../assets/logo/transparentLogo.png";
import Logo from "../assets/logo/logo.jpg";
import RoundLogo from "../assets/logo/roundLogo.png";

// Utils
import { scrollToSection } from "../utils/scrollToSection";
import { Link } from "react-router-dom";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-primary py-3 shadow-lg" : "bg-transparent py-6"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container m-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        {/* logo */}
        <Link to="/">
          {header ? (
            <img className="w-[70px] bg-white p-1 rounded-[100%]" src={RoundLogo} />
          ) : (
            <img className="w-[180px]" src={TransparentLogo} />
          )}
        </Link>
        <nav
          className={`text-white flex gap-x-4 font-primary tracking-3px text-[18px] items-center uppercase lg:gap-x-8`}
        >
          <Link
            to="/"
            className={`${
              header ? "hover:text-secondHover" : "hover:text-navHover"
            } transition-all tracking-[1px] duration-500`}
          >
            Inicio
          </Link>
          <Link
            to="/flota"
            className={`${
              header ? "hover:text-secondHover" : "hover:text-navHover"
            } transition-all tracking-[1px] duration-500`}
          >
            Flota
          </Link>
          <Link
            to="/map"
            className={`${
              header ? "hover:text-secondHover" : "hover:text-navHover"
            } transition-all tracking-[1px] duration-500`}
          >
            Mapa
          </Link>
          <Link
            to="/contacts"
            className={`${
              header ? "hover:text-secondHover" : "hover:text-navHover"
            } transition-all tracking-[1px] duration-500`}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
