import React from "react";
import styles from "./MapController.module.css";

export default function DefaultOptions(props) {
    const { places, setCoordinates } = props;

    const elementArr = places.map((place) => {
        return (
            <p
                key={place.id}
                onClick={() => setCoordinates({ ...place.geo })}
                className={styles.defaultLocation}
            >
                {place.name}
            </p>
        );
    });

    return (
        <div className="">
            <h6 className="border-bottom py-2">Default Locations</h6>
            <div className="d-flex flex-column gap-2">{elementArr}</div>
        </div>
    );
}
