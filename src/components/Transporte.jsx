import React from "react";

// Link
import { Link } from "react-router-dom";

const Transporte = ({ transporte }) => {
  // console.log("TRANSPORTE", transporte);
  const { id, name, description, img } = transporte;
  return (
    <div className="min-h-[500px] bg-white shadow-2xl rounded-lg group">
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
      <div className="text-center">
        <p className="font-primary max-w-[300px] mx-auto mb-3 lg:mb-6">{description}</p>
      </div>

      {/* button */}
      <Link to="/contacts" className="btn btn-primary btn-sm max-w-[240px] mx-auto mb-3 lg:mb-6 rounded-lg">
        Hablemos
      </Link>
    </div>
  );
};

export default Transporte;
