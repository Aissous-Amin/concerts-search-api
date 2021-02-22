const { Venues } = require('../schemas/venues.schemas');

/**
 * Allows to find all the venues where location within radius.
 *
 * @param {number} longitude - Longitude.
 * @param {number} latitude - Latitude.
 * @param {number} distance - Distance in Kilometers.
 * @param {Array<number>} bandIds - Band id list.
 * @returns {object} Result - All concerts with details of band and venue information.
 */
function get_all_venues_where_location_within_radius(longitude, latitude, distance, bandIds) {
    /** Convert Kilometer to Earth's Equatorial Radius. */
    const radius = parseFloat(distance) / 6378.1;
    // TODO : Fix $geoNear bug.
    return Venues.aggregate([
        {
            $geoNear: {
                near: [parseFloat(longitude), parseFloat(latitude)],
                type: 'Point',
                key: "location",
                distanceField: "distance",
                maxDistance: radius,
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
    ]).limit(20);
    //todo pagination system
}

module.exports = {
    get_all_venues_where_location_within_radius,
};
