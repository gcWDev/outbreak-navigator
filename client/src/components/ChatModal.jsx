import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./Components.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import ChatIcon from "@mui/icons-material/Chat";

export default function BasicModal(props) {
    const [open, setOpen] = useState(false);
    const [userComment, setUserComment] = useState("");
    const [messageSuccess, setMessageSuccess] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { comments, placeId } = props;

    function convertToReadableDate(isoString) {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        };
        return new Date(isoString).toLocaleDateString("en-US", options);
    }

    const elementArr = comments.map((comment) => {
        return (
            <div className={`my-3 ${styles.comment}`} key={comment.id}>
                <div className="my-2">
                    <p className={styles.messageMetadata}>
                        {convertToReadableDate(comment.time)}
                    </p>
                    <div className="d-flex gap-1">
                        <AccountCircleIcon />
                        <div className={styles.messageMetadata}>
                            <p>{comment.name}</p>
                        </div>
                    </div>
                </div>
                <p>{comment.comment}</p>
            </div>
        );
    });

    async function handleSubmit(e) {
        try {
            e.preventDefault();

            const url = "http://localhost:3000/api/comments/post-comments";

            const request = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    place_id: placeId,
                    comment: userComment,
                    name: "User",
                }),
            });

            const data = await request.json();

            if (data.success) {
                window.alert("Comment submitted succesfully");
            } else {
                window.alert("Error submitting comment");
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    return (
        <div>
            <Button onClick={handleOpen} className={styles.modalButton}>
                <ChatIcon /> Open location logs
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className={styles.modalContainer}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        className={`text-center ${
                            comments.length > 0 ? "border-bottom" : ""
                        } pb-2`}
                    >
                        {comments.length > 0
                            ? "Recent Updates"
                            : "No Updates Yet"}
                    </Typography>
                    <form
                        className={styles.commentContainer}
                        onSubmit={handleSubmit}
                    >
                        <div>{comments.length > 0 ? elementArr : <></>}</div>
                        <div
                            className={`d-flex align-items-center gap-2 ${styles.postComment}`}
                        >
                            <TextField
                                id="outlined-basic"
                                label="Your Message"
                                variant="outlined"
                                value={userComment}
                                onChange={(e) => setUserComment(e.target.value)}
                            />
                            <button className={styles.submitContainer}>
                                <SendIcon />
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}
