const express = require("express");
const router = express.Router();
const {
    getCommentsByIdController,
} = require("../controllers/getCommentsByIdController");
const {
    postCommentsByIdController,
} = require("../controllers/postCommentsByIdController");

router.route("/get-comments").get(getCommentsByIdController);
router.route("/post-comments").post(postCommentsByIdController);

module.exports = router;
