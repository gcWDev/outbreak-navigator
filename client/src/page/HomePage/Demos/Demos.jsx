import React from "react";
import Card from "../../../components/Card";
import map from "../../../assets/map.svg";

export default function Demos() {
  return (
    <section className="container my-5">
      <div className="row justify-content-between">
        <div className="col-5">
          <Card
            heading="Places Survival Map"
            subheading="Survival map that highlights important locations"
            link="/places"
            source="Survival Map"
            img={map}
            isLinkSamePage={true}
          />
        </div>

        <div className="col-5">
          <Card
            heading="Areas to Avoid"
            subheading="Map that highlights areas to avoid"
            link="/safe-places"
            source="Survival Map"
            img={map}
            isLinkSamePage={true}
          />
        </div>
      </div>
    </section>
  );
}
