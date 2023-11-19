import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import MasksIcon from "@mui/icons-material/Masks";

export default function NavBar() {
    return (
        <header className={`${styles.navContainer}`}>
            <div className="container py-3">
                <div className="row justify-content-between">
                    <div className="col-5 d-flex gap-1 align-items-center">
                        <MasksIcon />
                        <h3 className="m-0">Outbreak Navigator</h3>
                    </div>
                    <div className="col-5 d-flex gap-4 justify-content-end align-items-center">
                        <NavLink className={styles.navButtons} to="/places">
                            Places
                        </NavLink>
                        <NavLink
                            className={styles.navButtons}
                            to="/danger-zones"
                        >
                            Danger Zones
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}
