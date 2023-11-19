import React, { useState, useEffect } from "react";
import { AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";
import styles from "./Components.module.css";
import ChatModal from "./ChatModal";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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

        setComments(data);
    }

    useEffect(() => {
        if (open) {
            getComments();
        }
    }, [open]);

    function formatType(type) {
        return type
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

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
                        <div>
                            <div className="py-2 ">
                                <h3 style={{ color: "black" }}>{place.name}</h3>
                                <p className="lead pb-3 border-bottom">
                                    {formatType(place.primary_type)}
                                </p>
                            </div>
                            <div className="d-flex flex-column gap-3 mt-2">
                                <div className={styles.locationContent}>
                                    <p className="d-flex align-items-center gap-2">
                                        <LocationOnIcon /> {`${place.address}`}
                                    </p>
                                </div>
                                <div className={styles.commentBox}>
                                    <ChatModal
                                        comments={comments}
                                        placeId={place.id}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </InfoWindow>
            )}
        </div>
    );
}
