import React, { useEffect, useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import MapPin from "../../components/MapPin";
import places from "../../utilities/places";
import { useOutletContext } from "react-router-dom";

export default function PlacesMap() {
    const { coordinates, setCoordinates, selectedFilters } = useOutletContext();

    // const [places, setPlaces] = useState([]);

    // useEffect(() => {
    //     async function getPlaces() {
    //         const url = "http://localhost:3000/api/places/get-places";

    //         const response = await fetch(url, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 coordinates: coordinates,
    //             }),
    //         });
    //         const data = await response.json();

    //         setPlaces(data);
    //     }

    //     getPlaces();
    // }, [coordinates]);

    function onMarkerDragEnd(e) {
        setCoordinates({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    }

    function convertBackToOriginal(labels) {
        return labels.map((label) => label.toLowerCase().split(" ").join("_"));
    }

    const elementArr = places
        .filter((place) => {
            return selectedFilters.has(place.primary_type);
        })
        .map((place, index) => {
            return <MapPin place={place} />;
        });

    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
            <div
                style={{ height: "100vh", width: "100vw" }}
                id="container"
                className="position-absolute start-0"
            >
                <Map
                    zoom={14}
                    center={coordinates}
                    mapId={import.meta.env.VITE_MAP_ID}
                >
                    {elementArr}
                    <div className="z-3">
                        <Marker
                            position={coordinates}
                            draggable={true}
                            onDragEnd={onMarkerDragEnd}
                        />
                    </div>
                </Map>
            </div>
        </APIProvider>
    );
}
