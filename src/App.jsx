import "./App.css";

// Pages
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import TransporteDetails from "./pages/TransporteDetails";
import Map from "./pages/Map";

// Components
import Footer from "./components/Footer";

// React Router
import { Routes, Route } from "react-router-dom";

// Framer Motion
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <div className="bg-gray-300">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/:id" element={<TransporteDetails />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </motion.div>
    </div>
  );
}

export default App;
