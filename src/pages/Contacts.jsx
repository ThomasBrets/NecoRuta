import React, { useContext } from "react";

// useParams
import { useParams } from "react-router-dom";

//ScrollToTop component
import ScrollToTop from "../components/ScrollToTop";

// Context
import { transportContext } from "../context/transportContext";

// College image
import Flota from "../assets/college/Flota.jpg";

// Icons
import { FaCheck } from "react-icons/fa";

const Contacts = () => {
  const { office } = useContext(transportContext);
  console.log("OFFICE", office);

  const { direccion, ciudad, provincia, email, logistica, administracion } =
    office;

  return (
    <section>
      <ScrollToTop />
      {/* banner */}
      <div className="bg-oficina bg-cover bg-center h-[560px] relative flex justify-center items-center">
        {/* overlay */}
        <div className="bg-black/70 absolute h-full w-full" />
        <div className="text-white flex lg:mt-0 pt-[110px] lg:pt-0 flex-col justify-center items-center z-20">
          <h1 className="lg:text-[75px] text-[63px] font-primary  uppercase tracking-[4px]">
            Oficina
          </h1>
          <div className="flex lg:flex-row flex-col items-center lg:justify-between lg:text-[25px] tracking-[2px] text-[20px] lg:gap-20 gap-8 font-primary min-w-[80%] text-justify lg:mt-4">
            {/* datos de contacto */}
            <div className="font-bold">
              <h2>{direccion}</h2>
              <h2>{ciudad}</h2>
              <h2>{provincia}</h2>
            </div>
            <div>
              <h2>{email}</h2>
              <h2>{logistica}</h2>
              <h2>{administracion}</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Flota y Contacto */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* left */}
          <div className="w-full h-full lg:w-[40%] text-justify px-6">
            <h2 className="h2 text-center tracking-[2px] font-semibold">Nuestra Flota</h2>
            <img className="mb-8" alt="flota" src={Flota} />
            <ul className="flex flex-col gap-y-4 text-[21px] font-semibold">
              <li className="flex items-center gap-x-4 font-primary tracking-[1px]">
                <FaCheck className="text-primary w-[24px] h-[24px]" />5 Camiones propios.
              </li>
              <li className="flex items-center gap-x-4 font-primary tracking-[1px]">
                <FaCheck className="text-primary w-[24px] h-[24px]" />
                Equipos Autodescargables.
              </li>
              <li className="flex items-center gap-x-4 font-primary tracking-[1px]">
                <FaCheck className="text-primary w-[24px] h-[24px]" />
                Equipos Cerealeros.
              </li>
              <li className="flex items-center gap-x-4 font-primary tracking-[1px]">
                <FaCheck className="text-primary w-[24px] h-[24px]" />
                Tolvón para Alimento Balanceado.
              </li>
              <li className="flex items-center gap-x-4 font-primary tracking-[1px]">
                <FaCheck className="text-primary w-[24px] h-[24px]" />
                Tanque y Bateas.
              </li>
            </ul>
          </div>
          {/* right */}
          <div className="w-full h-full lg:w-[60%] bg-slate-500">
            hola
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
