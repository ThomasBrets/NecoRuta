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
      
     </div>
    </section>
  )
}

export default Contacts