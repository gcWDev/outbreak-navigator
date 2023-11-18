const { postCommentByPlaceId } = require("../models/comments");

async function postCommentsByIdController(req, res) {
    try {
        const { place_id, name, comment } = req.body;

        const userInput = [place_id, comment, name];

        const request = await postCommentByPlaceId(userInput);

        return res.status(201).send(request);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { postCommentsByIdController };
