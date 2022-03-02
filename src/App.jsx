import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Awards from "./components/awards/Awards";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      
      <Header />
      <Nav />
      <About />
      <Education />
      <Skills />
      <Work />
      {/* <Services /> */}
      <Portfolio />
      <Awards/>
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
