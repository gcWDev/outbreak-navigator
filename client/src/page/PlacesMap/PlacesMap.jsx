import React, { useEffect, useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import MapPin from "../../components/MapPin";
import places from "../../utilities/places";
import { useOutletContext } from "react-router-dom";

export default function PlacesMap() {
    const { coordinates, setCoordinates, selectedFilters } = useOutletContext();

    // const [places, setPlaces] = useState([]);

    // useEffect(() => {
    //   async function getPlaces() {
    //     const url = new URL("http://localhost:3000/api/get-places");
    //     url.searchParams.append("coordinates", coordinates);

    //     const response = await fetch(url);
    //     const data = await response.json();

    //     setPlaces(data);
    //   }

    //   getPlaces();
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
        <APIProvider apiKey="AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo">
            <div
                style={{ height: "100vh", width: "100vw" }}
                id="container"
                className="position-absolute start-0"
            >
                <Map zoom={14} center={coordinates} mapId="b6001d79d8112209">
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
