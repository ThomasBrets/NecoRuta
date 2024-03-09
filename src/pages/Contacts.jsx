import React, { useContext, useState, useRef } from "react";

// framer-motion
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// email.js
import emailjs from "emailjs-com";

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
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    affair: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

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
        <div className="flex flex-col lg:flex-row h-[full] py-24 gap-x-8">
          {/* left (Flota)*/}
          <div className="w-full h-full lg:w-[50%] text-justify px-6 border-2 border-primary rounded-2xl p-8">
            <h2 className="h2 text-center tracking-[2px] font-semibold">
              Nuestra Flota
            </h2>
            <img className="mb-8" alt="flota" src={Flota} />
            <ul className="flex flex-col gap-y-4 text-[21px] font-semibold">
              <li className="flex items-center gap-x-4 font-primary tracking-[1px]">
                <FaCheck className="text-primary w-[24px] h-[24px]" />5 Camiones
                propios.
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
          {/* right (Contacto) */}
          <div className="w-full h-full lg:w-[50%] overflow-hidden flex-col">
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className="p-8 flex-[0.75]  rounded-2xl bg-navHover text-primary"
            >
              <p className="font-primary uppercase tracking-[6px] text-[18px]">
                Póngase en contacto
              </p>
              <h3 className="h2">Hablemos.</h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-12 flex flex-col gap-8"
              >
                <label className="flex flex-col">
                  <span className="text-primary font-primary font-semibold mb-2">
                    Tu Nombre
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Como es tu nombre?"
                    className="bg-white rounded-lg py-2 px-4 placeholder:font-primary placeholder:font-semibold outlined-none border-none font-primary font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-primary font-primary font-semibold mb-2">
                    Asunto
                  </span>
                  <input
                    type="text"
                    name="affair"
                    value={form.affair}
                    onChange={handleChange}
                    placeholder="Motivo de contacto"
                    className="bg-white rounded-lg py-2 px-4 placeholder:font-primary placeholder:font-semibold outlined-none border-none font-primary font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-primary font-primary font-semibold mb-2">
                    Tu Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Como es tu email?"
                    className="bg-white rounded-lg py-2 px-4 placeholder:font-primary placeholder:font-semibold outlined-none border-none font-primary font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-primary font-primary font-semibold mb-2">
                    Tu Mensaje
                  </span>
                  <textarea
                    rows="10"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Escribenos tu mensaje"
                    className="bg-white rounded-lg py-2 px-4 placeholder:font-primary placeholder:font-semibold outline-none border-none font-primary font-medium"
                  />
                </label>
              {/* button */}
              <button
              type="submit"
              className="font-primary font-bold outline-none w-fit py-2 px-5 shadow-lg  bg-primary text-secondHover rounded-xl"
              >
                {loading ? "Sending..." : "Send"} 
              </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contacts, "");
