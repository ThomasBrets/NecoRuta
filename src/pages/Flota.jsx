import React, { useContext, useState, useRef, useEffect } from "react";

// framer-motion
import { motion } from "framer-motion";
import { titleVariants } from "../utils/motion";

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
import { IoArrowForwardCircle } from "react-icons/io5";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Components
import FlotaSlider from "../components/FlotaSlider";

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
      const section = document.getElementById("info");
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
    <>
      <Header />
      <section>
        <ScrollToTop />
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="uppercase font-primary tracking-[6px] pt-12 pb-11"
        >
          <div className="text-center">
            <div className="font-primary uppercase tracking-[6px] text-[18px] pt-[150px]">
              Necoruta S.A.
            </div>
            <div className="font-primary text-[45px] mb-4">Nuestra Flota</div>
          </div>
        </motion.div>
        {/* Swiper */}
        <FlotaSlider />
        {/* Flota y Contacto */}
        <div className="container mx-auto">
          <div
            id="info"
            className="flex flex-col lg:flex-row h-[full] py-12 gap-8"
          >
            {/* left (Flota)*/}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{
                y: isVisible ? 0 : "100%",
                opacity: isVisible ? 1 : 0,
              }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="w-full h-full lg:w-[50%] text-justify px-6 border-2 border-primary rounded-2xl p-8"
            >
              <img className="mb-10 rounded-lg" alt="flota" src={Flota} />
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
                initial={{ y: "100%", opacity: 0 }}
                animate={{
                  y: isVisible ? 0 : "100%",
                  opacity: isVisible ? 1 : 0,
                }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="p-8  rounded-2xl bg-navHover text-primary font-primary"
              >
                <h3 className="h2">Nuestros Camiones.</h3>
                <ul className="flex flex-col gap-y-6 text-[22px] text-black">
                  <li className="flex justify-start  gap-x-4 font-primary tracking-[1px]">
                    <div className="flex items-center">
                      <FaCheck className="text-primary w-[23px] h-[23px]" />
                    </div>
                    Todos nuestros camiones están habilitados por SENASA (
                    Servicio Nacional de Sanidad y Calidad Agroalimentaria ).
                  </li>
                  <li className="flex items-center gap-x-4 font-primary tracking-[1px]">
                    <div className="flex items-start">
                      <FaCheck className="text-primary w-[24px] h-[24px]" />
                    </div>
                    Equipados con sistema de seguimiento satelital en tiempo
                    real.
                  </li>
                  <li className="flex items-center gap-x-4 font-primary tracking-[1px]">
                    <div className="flex items-start">
                      <FaCheck className="text-primary w-[24px] h-[24px]" />
                    </div>
                    Permisos correspondientes para circular :
                  </li>
                  <ul className="font-primary justify-start flex flex-col gap-y-3 pl-9">
                    <li className="flex gap-2 items-center">
                      <IoArrowForwardCircle className="text-primary" />
                      Licencia de conducir
                    </li>
                    <li className="flex gap-2 items-center">
                      <IoArrowForwardCircle className="text-primary" />
                      Seguro obligatorio
                    </li>
                    <li className="flex gap-2 items-center">
                      <IoArrowForwardCircle className="text-primary" />
                      VTV
                    </li>
                    <li className="flex gap-2 items-center">
                      <IoArrowForwardCircle className="text-primary" />
                      Registro único de transporte automotor ( RUTA)
                    </li>
                    <li className="flex gap-2 items-center">
                      <IoArrowForwardCircle className="text-primary" />
                      Cursos y Psicofisico.
                    </li>
                  </ul>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};


export default Contacts;
