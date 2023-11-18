import React from "react";
import { useOutletContext } from "react-router-dom";

export default function DensityMap() {
    const data = useOutletContext();

    console.log(data);

    return <h1>hi</h1>;
}
