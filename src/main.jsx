import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import TransportProvider from "./context/transportContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TransportProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </TransportProvider>
);
