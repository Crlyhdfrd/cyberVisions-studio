// import { useState } from "react";
import "./global.scss";
import Header from "./header/header.jsx";
import About from "./about/about.jsx";
import Portfolio from "./portfolio/portfolio.jsx";
import Resume from "./resume/resume.jsx";
import Contact from "./contact/contact.jsx";

function App() {
  return (
    <>
      <Header />
      <About />
      <div className="SharedBackground">
        <Portfolio />
        <Resume />
      </div>
      <Contact />
    </>
  );
}

export default App;
