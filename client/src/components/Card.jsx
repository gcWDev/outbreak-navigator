import React from "react";
import styles from "./Components.module.css";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  const { heading, subheading, link, source, img, isLinkSamePage } = props;
  return (
    <div className={`text-center ${styles.cardContainer}`}>
      {img && <img src={img} className="img-fluid" />}
      <h3 className="text-center">{heading}</h3>
      <p>{subheading}</p>
      {isLinkSamePage ? (
        <NavLink to={link}>Places Map</NavLink>
      ) : (
        <a href={link} target="_blank">
          {source}
        </a>
      )}
    </div>
  );
}
