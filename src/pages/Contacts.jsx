import React, { useContext } from 'react'

// useParams
import { useParams } from 'react-router-dom'

//ScrollToTop component
import ScrollToTop from '../components/ScrollToTop'

// Context
import { transportContext } from '../context/transportContext'

// Icons
import {FaCheck} from "react-icons/fa"

const Contacts = () => {
  const {transport} = useContext(transportContext)
  // console.log("TRANSPORT", transport);

  return (
    <section>
      <ScrollToTop/>
      {/* banner */}
     <div className="bg-oficina bg-cover bg-center h-[560px] relative flex justify-center items-center">
      {/* overlay */}
      <div className="bg-black/70 absolute h-full w-full" />
      <div className="text-white flex  flex-col z-20">
      <h1 className="text-[65px] font-primary justify-center items-center uppercase tracking-[4px]">
        Oficina
      </h1>
      <div className="flex justify-between font-primary text-[25px]">
      <div>
        <h2>hola</h2>
        <h2>hola</h2>
        <h2>hola</h2>
      </div>
      <div>
        <h2>chau</h2>
        <h2>chau</h2>
        <h2>chau</h2>
      </div>
      </div>
      </div>
     </div>
    </section>
  )
}

export default Contacts