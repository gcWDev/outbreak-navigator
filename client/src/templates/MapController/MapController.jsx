import React from "react";
import styles from "./MapController.module.css";
import { NavLink } from "react-router-dom";
import PlacesAutocomplte from "../../components/PlacesAutocomplete";
import DefaultOptions from "./DefaultOptions";
import defaultPlaces from "../../utilities/defaultPlaces";
import Filter from "./Filter";
import MuiAutofill from "../../components/MuiAutofill";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EastIcon from "@mui/icons-material/East";

export default function MapController(props) {
    const { setCoordinates, filterSet, setSelectedFilters } = props;

    return (
        <div
            className={`card ${styles.mapController} text-center`}
            id="map-controller"
        >
            {/* <div className="heading border-bottom">
                <h3>This is the controller</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div> */}
            <div className={styles.controlsContainer}>
                <div
                    // className={`mt-4 ${styles.mapTypeToggleContainer} container d-flex flex-column gap-4`}
                    className={`${styles.mapTypeToggleContainer} container d-flex flex-column gap-4`}
                >
                    <div className="row">
                        <div className="col-12">
                            <DefaultOptions
                                places={defaultPlaces}
                                setCoordinates={setCoordinates}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? `col-6 ${styles.MapToggleButton} ${styles.active}`
                                    : `col-6 ${styles.MapToggleButton}`
                            }
                            to="/places"
                        >
                            Places
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? `col-6 ${styles.MapToggleButton} ${styles.active}`
                                    : `col-6 ${styles.MapToggleButton}`
                            }
                            to="/danger-zones"
                        >
                            Danger Zones
                        </NavLink>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {/* <PlacesAutocomplte
                                setCoordinates={setCoordinates}
                            /> */}
                            <MuiAutofill setCoordinates={setCoordinates} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Filter
                                filterSet={filterSet}
                                setSelectedFilters={setSelectedFilters}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className={`col-12 ${styles.exitContainer} d-flex flex-column gap-2 align-items-center p-3`}
                        >
                            <AccountCircleIcon />
                            <div>
                                <p>User</p>
                                <p className="text-muted">
                                    testUser@example.com
                                </p>
                            </div>
                            <NavLink to="../" className={styles.logOutBtn}>
                                Exit
                                <EastIcon className="" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
