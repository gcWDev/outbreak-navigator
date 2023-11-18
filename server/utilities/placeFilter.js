function placeFilter(data) {
  const filters = new Set([
    "hospital",
    "pharmacy",
    "doctor",
    "health_department",
    "supermarket",
    "convenience_store",
    "police",
    "fire_station",
    "health",
    "car_repair",
    "food",
    "clothing_store",
  ]);

  const filteredData = data
    .filter((place) => {
      return place.type.some((t) => filters.has(t));
    })
    .map((place) => {
      const primaryType = place.type.find((t) => filters.has(t));

      return {
        ...place,
        primary_type: primaryType,
      };
    });

  console.log(filteredData);
  return filteredData;
}

module.exports = { placeFilter };
