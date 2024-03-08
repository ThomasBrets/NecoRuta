import { createContext, useState } from "react";

// Data
import {transportData, officeData} from "../../data";

// Create context
export const transportContext = createContext();

const transportProvider = ({ children }) => {
  const [transport, setTransport] = useState(transportData);
  const [office, setOffice] = useState(officeData)

  return (
    <transportContext.Provider value={{ transport, office }}>
      {children}
    </transportContext.Provider>
  );
};

export default transportProvider;
