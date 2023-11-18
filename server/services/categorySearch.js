const { iconLib } = require("../utilities/iconLib");

async function categorySearch(coordinates, query, type, client, apiKey) {
    try {
        const respArr = [];

        const response = await client.textSearch({
            params: {
                location: coordinates,
                radius: 1000,
                key: apiKey,
                query: query,
            },
            timeout: 1000,
        });

        const places = response.data.results;

        places.forEach((place) => {
            if (place.photos == undefined) {
                place.photos = [];
            }

            const photo =
                place.photos.length > 0
                    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${place.photos[0].photo_reference}&key=${process.env.API_KEY}`
                    : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fbrowse%2Ficons%2Fterm%2Fimage-unavailable%2F&psig=AOvVaw00UlNYXNhNv1cggnl3UBKQ&ust=1700416942795000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCh9PCQzoIDFQAAAAAdAAAAABAb";

            respArr.push({
                id: place.place_id,
                name: place.name,
                address: place.formatted_address,
                position: place.geometry.location,
                type: place.types,
                photo: photo,
                primary_type: type,
                icon: `${process.env.URL}${iconLib[type]}`,
            });
        });
        return respArr.slice(0, 5);
    } catch (err) {
        console.error(err);
        return [];
    }
}

module.exports = { categorySearch };
