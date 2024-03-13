import React, { useContext, useState, useRef, useEffect } from "react";

// framer-motion
import { motion } from "framer-motion";

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

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("hablemos");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(sectionTop < windowHeight * 0.75);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ? Email.js
  // service_98g7c4h    service
  // template_7g4ytv7   template
  // I0HKJXCi0LUCo0WFS  key

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_98g7c4h",
        "template_7g4ytv7",
        {
          from_name: form.name,
          to_name: "Necoruta",
          affair: form.affair,
          from_email: form.email,
          to_email: "transportes@necoruta.com.ar",
          message: form.message,
        },
        "I0HKJXCi0LUCo0WFS"
      )
      .then(() => {
        setLoading(false);
        alert(
          "¡Gracias por tu mensaje! Nos pondremos en contacto contigo lo antes posible."
        );

        setForm({
          name: "",
          affair: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log("ERROR => ", err);
        alert("Ups! Hubo un problema al enviar el mensaje");
      });
  };

  const { office } = useContext(transportContext);
  // console.log("OFFICE", office);

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
        <div
          id="hablemos"
          className="flex flex-col lg:flex-row h-[full] py-24 gap-8"
        >
          {/* left (Flota)*/}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: isVisible ? 0 : "-100%", opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-full h-full lg:w-[50%] text-justify px-6 border-2 border-primary rounded-2xl p-8"
          >
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
          </motion.div>
          {/* right (Contacto) */}
          <div className="w-full h-full lg:w-[50%] overflow-hidden flex-col">
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: isVisible ? 0 : "100%",
                opacity: isVisible ? 1 : 0,
              }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="p-8 flex-[0.75]  rounded-2xl bg-navHover text-primary"
            >
              <p className="font-primary uppercase tracking-[6px] text-[18px]">
                Póngase en contacto
              </p>
              <h3 className="h2">Hablemos.</h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-10 flex flex-col gap-8"
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
                    className="bg-white rounded-lg py-2 px-4 placeholder:font-primary placeholder:font-semibold outline-none border-none font-primary font-medium"
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
                    className="bg-white rounded-lg py-2 px-4 placeholder:font-primary placeholder:font-semibold outline-none border-none font-primary font-medium"
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
                    className="bg-white rounded-lg py-2 px-4 placeholder:font-primary placeholder:font-semibold outline-none border-none font-primary font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-primary font-primary font-semibold mb-2">
                    Tu Mensaje
                  </span>
                  <textarea
                    rows="8"
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

export default Contacts;
