import React, { useContext, useEffect, useState } from "react";

// Context
import { transportContext } from "../context/transportContext";


// Components
import Transporte from "./Transporte";

const Transportes = () => {
  const { transport } = useContext(transportContext);

  return (
    <section id="#transportes" className="py-24">
      <div className="container mx-auto lg:px-0" >
        <div className="text-center">
          <div className="font-primary uppercase tracking-[6px] text-[18px]">
            Necoruta S.A.
          </div>
          <div className="font-primary text-[45px] mb-4">Transportes</div>
        </div>
        <div className="grid grid-cols-1 max-w-sm mt-[120px] mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {transport.map((transporte, index) => {
            return <Transporte transporte={transporte} key={transporte.id} index={transporte.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Transportes;
