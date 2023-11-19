import React from "react";
import { useOutletContext } from "react-router-dom";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import geoData from "../../utilities/density-data.json";
import { Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
};

export default function DensityMap() {
    const data = useOutletContext();

    const { coordinates, setCoordinates } = data;

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    });

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
        map.data.addGeoJson(geoData);
    }, []);

    if (!isLoaded) return <div>Loading...</div>;

    function handleDragEnd(event) {
        const newCoordinates = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        };

        setCoordinates(newCoordinates);
    }

    return (
        <div
            style={{ height: "100vh", width: "100vw" }}
            id="container"
            className="position-absolute start-0"
        >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={coordinates}
                zoom={10}
                onLoad={onMapLoad}
                options={{
                    mapId: "b6001d79d8112209",
                }}
            >
                <Marker
                    position={coordinates}
                    draggable
                    onDragEnd={handleDragEnd}
                />
            </GoogleMap>
        </div>
    );
}
