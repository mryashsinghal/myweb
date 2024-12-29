// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="bg-gray-900">
      
      
      {/* Section 1: Home */}
      <section id="home" className="h-screen flex items-center justify-center bg-[#647376]">
        <Home/>
        <div className="absolute bottom-10 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Section 2: About */}
      <section id="about" className="h-screen flex items-center justify-center bg-primary">
        <About/>
      </section>

      {/* Section 3: Services */}
      <section id="project" className=" flex flex-col items-center justify-center bg-primary">
        <Projects/>
      </section>

      {/* Section 4: Contact */}
      <section id="contact" className="h-screen flex items-center justify-center bg-light">
        <Contact/>
      </section>
    </div>


     <Footer/> 
    </Router>
  );
}

export default App;
