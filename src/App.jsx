import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Certifications from "./Components/Certifications/Certifications";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div className="max-w-[100vw]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
