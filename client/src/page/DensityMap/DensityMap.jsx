import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import geoData from "../../utilities/density-data.json";
import { Marker } from "@react-google-maps/api";
import HashLoader from "react-spinners/HashLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
};

export default function DensityMap() {
    const data = useOutletContext();

    const { coordinates, setCoordinates } = data;

    const [loaderAnimation, setLoaderAnimation] = useState(true);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    });

    useEffect(() => {
        setTimeout(() => {
            setLoaderAnimation(false);
        }, 3000);
    });

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
        map.data.addGeoJson(geoData);
    }, []);

    if (loaderAnimation)
        return (
            <div className="position-absolute top-50 start-50 translate-middle">
                {/* <h1 className="mb-5">Map is Loading...</h1> */}
                <ClimbingBoxLoader color="#f58814" size={50} />
            </div>
        );

    // if (!isLoaded) return <div>Loading...</div>;

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
                    mapId: import.meta.env.VITE_MAP_ID,
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

// import React from "react";
// import { useOutletContext } from "react-router-dom";
// import { GoogleMap, useLoadScript } from "@react-google-maps/api";
// import geoData from "../../utilities/density-data.json";
// import { Marker } from "@react-google-maps/api";

// const mapContainerStyle = {
//     height: "100vh",
//     width: "100vw",
// };

// export default function DensityMap() {
//     const data = useOutletContext();

//     const { coordinates, setCoordinates } = data;

//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
//     });

//     const mapRef = React.useRef();
//     const onMapLoad = React.useCallback((map) => {
//         mapRef.current = map;
//         map.data.addGeoJson(geoData);
//     }, []);

//     if (!isLoaded) return <div>Loading...</div>;

//     function handleDragEnd(event) {
//         const newCoordinates = {
//             lat: event.latLng.lat(),
//             lng: event.latLng.lng(),
//         };

//         setCoordinates(newCoordinates);
//     }

//     return (
//         <div
//             style={{ height: "100vh", width: "100vw" }}
//             id="container"
//             className="position-absolute start-0"
//         >
//             <GoogleMap
//                 mapContainerStyle={mapContainerStyle}
//                 center={coordinates}
//                 zoom={10}
//                 onLoad={onMapLoad}
//                 options={{
//                     mapId: import.meta.env.VITE_MAP_ID,
//                 }}
//             >
//                 <Marker
//                     position={coordinates}
//                     draggable
//                     onDragEnd={handleDragEnd}
//                 />
//             </GoogleMap>
//         </div>
//     );
// }
