import React, { useContext, useEffect, useState } from "react";

// Link
import { Link } from "react-router-dom";

// Framer-motion
import { motion } from "framer-motion";

// Utils
import { cardVariants, fadeIn } from "../utils/motion";

const Transporte = ({ transporte, index }) => {
  // console.log("TRANSPORTE", transporte);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('transportCards');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(sectionTop < windowHeight * 0.75);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llama a handleScroll una vez al principio para inicializar isVisible
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const { id, name, description, img } = transporte;
  return (
    <motion.div 
    id="transportCards"
    variants={cardVariants(index * 0.4, isVisible)}
    initial="hidden"
    animate="show"
    className="min-h-[430px] bg-white shadow-2xl rounded-lg group">
      {/* img */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt="img"
          className="group-hover:scale-110 transition-all duration-300 w-full h-[300px] rounded-t-lg"
        />
      </div>
      {/* Title */}
      <div className="bg-white shadow-lg max-w-[300px] -translate-y-1/2 mx-auto h-[60px] upercase flex justify-center items-center font-primary tracking-[1px] font-semibold rounded-lg">
        <div className="flex justify-center w-[80%]">
          <h3 className="h3 uppercase">{name}</h3>
        </div>
      </div>

      {/* description */}
      <div className="text-justify">
        <p className="font-primary max-w-[300px] mx-auto mb-3 lg:mb-6">{description}</p>
      </div>

      {/* button */}
      <Link to={`/contacts/${name}`} className="btn btn-primary btn-sm max-w-[240px] mx-auto mb-3 lg:mb-6 rounded-lg">
        Hablemos
      </Link>
    </motion.div>
      
  );
};

export default Transporte;
