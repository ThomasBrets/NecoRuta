import { createContext, useState } from "react";

// Data
import transportData from "../../data";

// Create context
export const transportContext = createContext();

const transportProvider = ({ children }) => {
  const [transport, setTransport] = useState(transportData);

  return (
    <transportContext.Provider value={{ transport }}>
      {children}
    </transportContext.Provider>
  );
};

export default transportProvider;
