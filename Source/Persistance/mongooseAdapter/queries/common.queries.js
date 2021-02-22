const { Venues } = require('../schemas/venues.schemas');

/**
 * Allows to find all the venues where location within radius.
 *
 * @param {number} longitude - Longitude.
 * @param {number} latitude - Latitude.
 * @param {number} radius - Radius in Kilometers.
 * @param {Array<number>} bandIds - Band id list.
 * @returns {object} Result - All concerts with details of band and venue information.
 */
function get_all_venues_where_location_within_radius(longitude, latitude, radius, bandIds) {
    /** TODO : Fix $geoNear bug . */
    return Venues.aggregate([
        {
            $geoNear: {
                near: { type: "Point", coordinates: [parseFloat(longitude), parseFloat(latitude)] },
                key: "location",
                distanceField: "distance",
                maxDistance: parseFloat(radius),
                spherical: true,
            },
        },
        {
            $lookup: {
                from: "concerts",
                localField: "id",
                foreignField: "venueId",
                as: "concerts",
            },
        },
        { $unwind: "$concerts" },
        ...(bandIds && [{ $match: { "concerts.bandId": { $in: bandIds } } }] || []),
        {
            $lookup: {
                from: "bands",
                localField: "concerts.bandId",
                foreignField: "id",
                as: "bands",
            },
        },
        { $unwind: "$bands" },
        {
            $project: {
                location: "$name",
                date: "$concerts.date",
                band: "$bands.name",
                longitude: { $arrayElemAt: ["$location.coordinates", 0] },
                latitude: { $arrayElemAt: ["$location.coordinates", 1] },
            },
        },
        {
            $sort: {
                date: -1,
            },
        },
    ]);
}

module.exports = {
    get_all_venues_where_location_within_radius,
};
