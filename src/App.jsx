import "./App.css";

// Pages
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import TransporteDetails from "./pages/TransporteDetails";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// React Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-300">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/:name" element={<TransporteDetails />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
