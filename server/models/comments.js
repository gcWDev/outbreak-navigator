const { pool } = require("../config/db");

async function getCommentsByPlaceId(placeId) {
    try {
        const comments = await pool.query(
            "select * from comments where place_id = ?",
            [placeId]
        );

        return comments[0];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function postCommentByPlaceId(userInput) {
    try {
        const query = `insert into comments (place_id, comment, name) values(?, ?, ?);`;

        pool.query(query, userInput);
        return { success: true };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { getCommentsByPlaceId, postCommentByPlaceId };
