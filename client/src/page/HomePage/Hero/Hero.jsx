import React from "react";
import styles from "./Hero.module.css";
import mockups from "../../../assets/mockups.svg";
import ParticlesBg from "particles-bg";
import Typewriter from "typewriter-effect";

export default function Hero() {
    return (
        <section
            className={`d-flex flex-column gap-5 align-items-center ${styles.heroContainer} container p-0`}
        >
            <div className="row justify-content-between">
                <div className="col-5 d-flex align-items-center">
                    <div className="d-flex flex-column gap-5">
                        <div className="d-flex flex-column gap-2">
                            <h1 className={styles.heroHeading}>
                                Do you have a <span>plan</span> for the next{" "}
                                <span className="d-inline">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                "virus?",
                                                "pandemic?",
                                                "outbreak?",
                                            ],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                            </h1>
                            <p>
                                A resourseful survival map powered by varius
                                Google APIs to guide you in the case of a
                                society collapse.
                            </p>
                        </div>
                        <div className={`d-flex`}>
                            <button className="primary-btn">Learn More</button>
                            <button className="secondary-btn mx-3">FAQ</button>
                        </div>
                    </div>
                </div>
                {/* <div
                    className={`col-4 ${styles.particlesBgContainer} position-relative`}
                >
                    <ParticlesBg
                        color="black"
                        num={30}
                        type="tadpole"
                        bg={true}
                    />
                </div> */}
                <div className="mx-1 col-6 p-0">
                    <img src={mockups} alt="" className="img-fluid" />
                </div>
            </div>
        </section>
    );
}
