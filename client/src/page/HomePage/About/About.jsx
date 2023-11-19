import React from "react";
import ParticlesBg from "particles-bg";
// import mockups from "../../../assets/mockups.svg";

export default function About() {
    return (
        <section className="container my-5">
            <div className="row justify-content-between">
                <div className="col-6 d-flex flex-column gap-3">
                    <h3 className="border-bottom pb-2">
                        About Outbreak Navigator: Empowering Preparedness in
                        Uncertain Times
                    </h3>
                    <p>
                        In a world where unexpected events are increasingly
                        common, Outbreak Navigator stands as your reliable
                        companion through emergencies and disaster scenarios.
                        Our app provides real-time information and resources to
                        ensure your safety and preparedness during critical
                        situations.
                    </p>
                    <ul className="d-flex flex-column gap-3">
                        <li className="bullet">
                            <span>Critical Place Filtration:</span> Maps are
                            filtered to display only critical stores and
                            resources essential in case of societal collapse,
                            ensuring access to the most vital locations.
                        </li>
                        <li className="bullet">
                            <span>Danger Zone Mapping:</span> Identify highly
                            dense populated areas on the map, helping users know
                            which regions to avoid for safety.
                        </li>
                        <li className="bullet">
                            <span>Worldwide Information:</span> Access a global
                            perspective with information and updates from around
                            the world, making the app relevant for international
                            users and travel scenarios.
                        </li>
                        <li className="bullet">
                            <span>Community Support:</span> Connect with a
                            community of users for assistance, information
                            sharing, and support in times of need. Users can
                            leave time-stamped comments about each location,
                            providing valuable and up-to-date insights.
                        </li>
                    </ul>
                </div>
                {/* <div className="mx-1 col-5">
          <img src={mockups} alt="" className="img-fluid" />
        </div> */}
                <div className={`col-5 particles-container position-relative`}>
                    <ParticlesBg
                        color="#6ed7f7"
                        num={30}
                        type="tadpole"
                        bg={true}
                    />
                </div>
            </div>
        </section>
    );
}
