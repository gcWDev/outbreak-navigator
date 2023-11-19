import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import MapController from "../templates/MapController/MapController";
import filters from "../utilities/filters";

export default function MapLayout() {
    const [coordinates, setCoordinates] = useState({
        lat: 43.6590384,
        lng: -79.38835859999999,
    });
    //Im making a filters end point to avoid having to manually sync
    //the place type filters on the client whenever
    //I change them on the server
    const [filterSet, setFiltersSet] = useState(filters);
    const [selectedFilters, setSelectedFilters] = useState(filterSet);

    const [filterStatus, setFilterStatus] = useState(null);

    // useEffect(()=>{
    //   async function getFilters(){
    //     const url = "http://localhost:3000/api/get-filters"
    //     const response = await fetch(url)
    //     const data = await response.json()

    //     setFilters(new Set([data]))
    //   }

    //   getFilters()
    // },[])

    return (
        <div>
            <MapController
                setCoordinates={setCoordinates}
                filterSet={filterSet}
                setSelectedFilters={setSelectedFilters}
                isFilterEnabled={filterStatus}
            />
            <Outlet
                context={{
                    coordinates,
                    setCoordinates,
                    selectedFilters,
                    setFilterStatus,
                }}
            />
        </div>
    );
}
