import React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/register/Register";
import PersonalInfo from "./pages/register/PersonalInfo";
import ContactInfo from "./pages/register/ContactInfo";
import Confirmation from "./pages/register/Confirmation";

export default function App() {
  return (
    <div className="app">
      <nav style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "15px" }}>
          Inicio
        </Link>
        <Link to="/register/personal">Registrarse</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />}>
          <Route path="personal" element={<PersonalInfo />} />
          <Route path="contact" element={<ContactInfo />} />
          <Route path="confirmation" element={<Confirmation />} />
        </Route>
      </Routes>
    </div>
  );
}
