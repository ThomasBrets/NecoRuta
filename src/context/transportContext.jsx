import { createContext, useState } from "react";

// Data
import {transportData, officeData, markersData, necorutaData} from "../../data";

// Create context
export const transportContext = createContext();

const transportProvider = ({ children }) => {
  const [transport, setTransport] = useState(transportData);
  const [office, setOffice] = useState(officeData)
  const [markers, setMarkers] = useState(markersData)
  const [necoruta, setNecoruta] = useState(necorutaData)

  return (
    <transportContext.Provider value={{ transport, office, markers, necoruta }}>
      {children}
    </transportContext.Provider>
  );
};

export default transportProvider;
