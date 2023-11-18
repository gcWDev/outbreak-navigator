import React from "react";
import styles from "./Hero.module.css";
import map from "../../../assets/map.svg";

export default function Hero() {
  return (
    <section
      className={`my-5 d-flex flex-column gap-4 align-items-center ${styles.heroContainer}`}
    >
      <h1 className="">
        Do You have a <span>plan</span> for the Next <span>Virus?</span>
      </h1>
      <p>
        A resourseful survival map powered by varius Google APIs to guide you in
        case society collapses.
      </p>
      <div className={`d-flex`}>
        <button className="primary-btn">Learn More</button>
        <button className="secondary-btn mx-3">FAQ</button>
      </div>
      <img src={map} alt="" />
    </section>
  );
}
