import React from "react";
import Card from "../../../components/Card";

export default function Credits() {
  return (
    <>
      <div className="col-4">
        <Card
          heading="Places"
          subheading="Places are fetched using the Google Places API"
          link="https://developers.google.com/maps/documentation/javascript/places"
          source="API Documentation"
        />
      </div>
      <div className="col-4">
        <Card
          heading="Icons"
          subheading="Icons provided by the Map Icons Collection"
          link="https://mapicons.mapsmarker.com/"
          source="Icon Library"
        />
      </div>
      <div className="col-4">
        <Card
          heading="Population Density Data"
          subheading="Population density GeoJSON provided by Princeton University"
          link="https://maps.princeton.edu/catalog/stanford-xg070wh7159"
          source="Population Data"
        />
      </div>
    </>
  );
}
