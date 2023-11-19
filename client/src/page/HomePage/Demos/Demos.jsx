import React from "react";
import Card from "../../../components/Card";
import places from "../../../assets/places.png";
import dangerZones from "../../../assets/danger-zones.png";

export default function Demos() {
    return (
        <section className="container my-5">
            <div className="row my-2">
                <div className="col-12 text-center">
                    <h3>Select your map</h3>
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-5">
                    <Card
                        heading="Essential Survival Map"
                        subheading="Pinpointing Crucial Locations for Safety and Resources"
                        link="/places"
                        img={places}
                        isLinkSamePage={true}
                    />
                </div>
                <div className="col-5">
                    <Card
                        heading="Risk Awareness Map"
                        subheading="Identifying High-Risk Areas for Enhanced Caution"
                        link="/danger-zones"
                        img={dangerZones}
                        isLinkSamePage={true}
                    />
                </div>
            </div>
        </section>
    );
}
