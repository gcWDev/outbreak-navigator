import React from "react";
import styles from "./MapController.module.css";
import { NavLink } from "react-router-dom";
import PlacesAutocomplte from "../../components/PlacesAutocomplete";
import DefaultOptions from "./DefaultOptions";
import defaultPlaces from "../../utilities/defaultPlaces";
import Filter from "./Filter";

export default function MapController(props) {
    const { setCoordinates, filterSet, setSelectedFilters } = props;

    return (
        <div
            className={`card ${styles.mapController} text-center`}
            id="map-controller"
        >
            <div className="heading border-bottom">
                <h3>This is the controller</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.controlsContainer}>
                <div
                    className={`my-4 ${styles.mapTypeToggleContainer} container d-flex flex-column gap-4`}
                >
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
                            <DefaultOptions
                                places={defaultPlaces}
                                setCoordinates={setCoordinates}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <PlacesAutocomplte
                                setCoordinates={setCoordinates}
                            />
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
                        <div className="col-12">
                            <NavLink to="../">Exit</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
