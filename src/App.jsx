import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Intoduction from "./components/Introduction/Intoduction";

function App() {
  return (
    <>
      <Header />
      <Intoduction />
      <div className="container">
        <div className="line"></div>
      </div>
      <Projects />
      <div className="container">
        <div className="line"></div>
      </div>
      <Contact />
      <div className="line"></div>
      <Footer />
    </>
  );
}

export default App;
