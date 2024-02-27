import "./App.css";

// Pages
import Home from "./pages/Home";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// React Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
