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

// Components
import Header from "../components/Header"

const TransporteDetails = () => {
  const formRef = useRef();
  const { transport } = useContext(transportContext);
  // console.log("Transporte", transport);

  const { id } = useParams();
  // console.log("ID", id);

  const transporte = transport.find((transporte) => {
    return transporte.id === Number(id);
  });

  // console.log("TRANSPORTE", transporte);

  const { name, description, img } = transporte;

  const [form, setForm] = useState({
    name: "",
    affair: name,
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
          affair: name,
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
          affair: name,
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


  return (
    <>
    <Header/>
    <section>
      <ScrollToTop />
      {/* banner */}
      <div className="bg-camiones bg-cover bg-center h-[560px] relative flex justify-center items-center">
        {/* overlay */}
        <div className="bg-black/70 absolute h-full w-full" />
        <div className="text-white flex lg:mt-0 pt-[110px] lg:pt-0 flex-col justify-center items-center z-20">
          <h1 className="lg:text-[75px] text-[63px] font-primary  uppercase tracking-[4px]">{name}</h1>
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
            <h2 className="font-primary text-[45px] text-primary text-center tracking-[2px] font-semibold">
              {name}
            </h2>
            <div className="font-primary text-[20px] my-4">
              {description}
            </div>
            <img className="mb-6 rounded-xl" alt="flota" src={img} />
            <ul className="flex flex-col gap-y-6 text-[22px] font-semibold">
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
    </>
  );
};

export default TransporteDetails;
