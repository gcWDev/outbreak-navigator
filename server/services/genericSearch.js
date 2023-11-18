const { iconLib } = require("../utilities/iconLib");

async function genericSearch(coordinates, type, client, apiKey) {
    try {
        const response = await client.placesNearby({
            params: {
                location: coordinates,
                radius: 5000,
                key: apiKey,
                type: type,
            },
            timeout: 1000,
        });

        const places = response.data.results;
        const respArr = await Promise.all(
            places.slice(0, 5).map(async (place) => {
                let photo =
                    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fbrowse%2Ficons%2Fterm%2Fimage-unavailable%2F&psig=AOvVaw00UlNYXNhNv1cggnl3UBKQ&ust=1700416942795000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCh9PCQzoIDFQAAAAAdAAAAABAb";
                if (place.photos && place.photos.length > 0) {
                    photo = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${place.photos[0].photo_reference}&key=${process.env.API_KEY}`;
                }

                // Reverse geocode to get the address
                const geocodeResponse = await client.geocode({
                    params: {
                        place_id: place.place_id,
                        key: apiKey,
                    },
                });
                const address =
                    geocodeResponse.data.results[0]?.formatted_address ||
                    "Address not found";

                return {
                    id: place.place_id,
                    name: place.name,
                    position: place.geometry.location,
                    address: address,
                    type: place.types,
                    photo: photo,
                    primary_type: type,
                    icon: `${process.env.URL}${iconLib[type]}`,
                };
            })
        );

        return respArr;
    } catch (err) {
        console.error(err);
        return [];
    }
}

module.exports = { genericSearch };
