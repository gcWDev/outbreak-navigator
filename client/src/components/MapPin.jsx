import React, { useState } from "react";
import { AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";
import styles from "./Components.module.css";

export default function Item(props) {
    const { place } = props;
    const [open, setOpen] = useState(false);
    console.log(place);
    return (
        <div className="placeContainer" key={place.id}>
            <AdvancedMarker
                position={place.position}
                onClick={() => setOpen(true)}
            >
                <img src={place.icon} alt="" className="z-1" />
            </AdvancedMarker>
            {open && (
                <InfoWindow
                    position={place.position}
                    onCloseClick={() => setOpen(false)}
                >
                    <div className={styles.infoWindowContainer}>
                        <img
                            src={place.photo}
                            alt={`Photo of ${place.name}`}
                            className="img-fluid"
                        />
                        <div className="py-2 ">
                            <h3 style={{ color: "black" }}>{place.name}</h3>
                            <p className="lead pb-3 border-bottom">
                                {place.primary_type}
                            </p>
                        </div>
                        <div className={styles.locationContent}>
                            <p>{`Adress: ${place.address}`}</p>
                        </div>
                    </div>
                </InfoWindow>
            )}
        </div>
    );
}
