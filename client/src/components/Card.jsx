import React from "react";
import styles from "./Components.module.css";
import { NavLink } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

export default function Card(props) {
    const { heading, subheading, link, source, img, isLinkSamePage } = props;
    return (
        <div
            className={`text-center ${styles.cardContainer}  d-flex flex-column align-items-center`}
        >
            <NavLink to={link}>
                {img && <img src={img} className="img-fluid" />}
            </NavLink>
            <div className={img ? "d-flex flex-column" : null}>
                <h3 className="text-center">{heading}</h3>
                <p className="lead">{subheading}</p>
            </div>
            {isLinkSamePage ? (
                <NavLink to={link} className="my-4">
                    Explore <EastIcon />
                </NavLink>
            ) : (
                <a href={link} target="_blank">
                    {source}
                </a>
            )}
        </div>
    );
}
