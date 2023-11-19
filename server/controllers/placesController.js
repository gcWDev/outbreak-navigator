const { genericSearch } = require("../services/genericSearch");
const { categorySearch } = require("../services/categorySearch");

const { placeTypes } = require("../utilities/placeTypes");

const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});
const apiKey = process.env.API_KEY;

async function placesController(req, res) {
    const { coordinates } = req.body;

    const placesPromises = placeTypes.map((type) => {
        return genericSearch(coordinates, type, client, apiKey);
    });

    const placesResults = await Promise.all(placesPromises);
    const huntingStores = await categorySearch(
        coordinates,
        "hunting stores near me",
        "hunting_store",
        client,
        apiKey
    );

    const combinedResults = [].concat(...placesResults, ...huntingStores);

    return res.status(200).send(combinedResults);
}

module.exports = { placesController };

//   const genericData = await genericSearch(coordinates, client, apiKey);
//   console.log(genericData);
//   const filteredGenericData = placeFilter(genericData);
//   const huntingData = await categorySearch(
//     coordinates,
//     "hunting stores near me",
//     client,
//     apiKey
//   );
//   console.log(huntingData.length);
