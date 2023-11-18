const { getCommentsByPlaceId } = require("../models/comments");

async function getCommentsByIdController(req, res) {
    const { place_id } = req.body;

    const comments = await getCommentsByPlaceId(place_id);

    return res.status(200).send(comments);
}

module.exports = { getCommentsByIdController };
