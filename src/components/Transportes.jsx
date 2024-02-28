import React, { useContext } from "react";

// Context
import { transportContext } from "../context/transportContext";

// Components
import Transporte from "./Transporte";

const Transportes = () => {
  const { transport } = useContext(transportContext);

  return (
    <section id="#transportes" className="py-24">
      <div className="container mx-auto lg:px-0 bg-slate-500">
        <div className="text-center">
          <div className="font-primary uppercase tracking-[6px] text-[15px]">
            Necoruta S.A.
          </div>
          <div className="font-primary text-[45px] mb-4">Transportes</div>
        </div>
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {transport.map((transporte) => {
            return <Transporte transporte={transporte} key={transporte.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Transportes;
