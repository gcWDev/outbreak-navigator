import React from "react";
import Hero from "./Hero/Hero";
import Credits from "./Credits/Credits";
import About from "./About/About.jsx";
import Demos from "./Demos/Demos.jsx";

export default function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 ">
          <Hero />
        </div>
      </div>
      <div className="row justify-content-between my-5">
        <Credits />
      </div>
      <div className="row">
        <About />
      </div>
      <div className="row">
        <Demos />
      </div>
    </div>
  );
}
