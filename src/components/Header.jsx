// React
import React, { useState, useEffect } from "react";

// Logo
import TransparentLogo from "../assets/logo/transparentLogo.png";
import Logo from "../assets/logo/logo.jpg";
import RoundLogo from "../assets/logo/roundLogo.png";

// Utils
import { scrollToSection } from "../utils/scrollToSection";

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
        <a href="/">
          {header ? (
            <img className="w-[100px] bg-white p-1 rounded-[100%]" src={RoundLogo} />
          ) : (
            <img className="w-[180px]" src={TransparentLogo} />
          )}
        </a>
        <nav
          className={`text-white flex gap-x-4 font-primary tracking-3px text-[18px] items-center uppercase lg:gap-x-8`}
        >
          <a
            href="/"
            className={`${
              header ? "hover:text-secondHover" : "hover:text-navHover"
            } transition-all tracking-[1px] duration-500`}
          >
            Inicio
          </a>
          <a
            href="/contacts"
            className={`${
              header ? "hover:text-secondHover" : "hover:text-navHover"
            } transition-all tracking-[1px] duration-500`}
          >
            Contacto
          </a>
          <a
            href="/map"
            className={`${
              header ? "hover:text-secondHover" : "hover:text-navHover"
            } transition-all tracking-[1px] duration-500`}
          >
            Mapa
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
