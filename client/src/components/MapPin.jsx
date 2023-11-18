import React, { useState, useEffect } from "react";
import { AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";
import styles from "./Components.module.css";
import ChatModal from "./ChatModal";

export default function Item(props) {
    const { place } = props;
    const [open, setOpen] = useState(false);
    const [comments, setComments] = useState([]);

    async function getComments() {
        const request = await fetch(
            "http://localhost:3000/api/comments/get-comments",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    place_id: place.id,
                }),
            }
        );
        const data = await request.json();

        console.log(data);

        setComments(data);
    }

    useEffect(() => {
        if (open) {
            getComments();
        }
    }, [open]);

    return (
        <div className="placeContainer" key={place.id}>
            <AdvancedMarker
                position={place.position}
                onClick={() => setOpen(true)}
            >
                <img src={place.icon} alt="" className="z-1" />
            </AdvancedMarker>
            {open && (
                <InfoWindow
                    position={place.position}
                    onCloseClick={() => setOpen(false)}
                >
                    <div className={styles.infoWindowContainer}>
                        <img
                            src={place.photo}
                            alt={`Photo of ${place.name}`}
                            className="img-fluid"
                        />
                        <div className="py-2 ">
                            <h3 style={{ color: "black" }}>{place.name}</h3>
                            <p className="lead pb-3 border-bottom">
                                {place.primary_type}
                            </p>
                        </div>
                        <div className={styles.locationContent}>
                            <p>{`Adress: ${place.address}`}</p>
                        </div>
                        <div className={styles.commentBox}>
                            <ChatModal comments={comments} placeId={place.id} />
                        </div>
                    </div>
                </InfoWindow>
            )}
        </div>
    );
}
