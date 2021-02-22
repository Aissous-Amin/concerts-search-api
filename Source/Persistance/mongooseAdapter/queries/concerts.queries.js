const { Concerts } = require('../schemas/concerts.schemas');

/**
 * Allows to find all the concerts where bandIds in band.id.
 *
 * @param {number} bandIds - List of band id.
 * @returns {object} Result - All concerts with details of band and venue information.
 */
function get_all_concerts_by_band_id(bandIds) {
    return Concerts.aggregate([
        { $match: { bandId: { $in: bandIds } } },
        {
            $lookup: {
                from: "bands",
                localField: "bandId",
                foreignField: "id",
                as: "band",
            },
        },
        { $unwind: "$band" },
        {
            $lookup: {
                from: "venues",
                localField: "venueId",
                foreignField: "id",
                as: "venue",
            },
        },
        { $unwind: "$venue" },
        {
            $project: {
                location: "$venue.name",
                date: 1,
                band: "$band.name",
                longitude: { $arrayElemAt: ["$venue.location.coordinates", 0] },
                latitude: { $arrayElemAt: ["$venue.location.coordinates", 1] },
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
    get_all_concerts_by_band_id,
};
