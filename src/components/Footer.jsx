import React, { useContext } from "react";

// Context
import { transportContext } from "../context/transportContext";

// Logo
import TransparentLogo from "../assets/logo/transparentLogo.png";
import Logo from "../assets/logo/logo.jpg";
import RoundLogo from "../assets/logo/roundLogo.jpg";

const Footer = () => {
  const { office } = useContext(transportContext);
  // console.log("OFFICE", office);

  const { direccion, ciudad, provincia, email, logistica, administracion } =
    office;
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-4 lg:justify-between">
        <a href="/">
          <img
            className="w-[100px] bg-white p-1 rounded-[100%]"
            src={RoundLogo}
          />
        </a>
        <div className="flex flex-col items-center lg:flex-row gap-5 font-primary text-white text-[18px]">
          <div>
            <p>{direccion}</p>
            <p>{ciudad}</p>
            <p>{provincia}</p>
          </div>
          <div>
            <p>{email}</p>
            <p>{logistica}</p>
            <p>{administracion}</p>
          </div>
        </div>

        <div className="items-center font-primary text-white">
          Copyright &copy; 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
