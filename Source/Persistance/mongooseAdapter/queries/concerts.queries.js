const { get_all_venues_where_location_within_radius, get_all_concerts_by_band_id } = require('./common.queries');

/**
 * Allows to find all the concerts respecting the filter : Get_all_concerts_with_filter.
 *
 * @param {object} query - Contains all the filters passed as input.
 * @param {Array<number>} query.bandIds - Band id list.
 * @param {number} query.longitude - Longitude.
 * @param {number} query.latitude - Latitude.
 * @param {number} query.radius - Radius in Kiloliter.
 * @returns {object} Result - All concerts with details of band and venue information.
 */
function get_all_concerts_with_filter({ bandIds, longitude, latitude, radius}) {
    if (longitude) {
        return get_all_venues_where_location_within_radius(longitude, latitude, radius, bandIds);
    } else if (bandIds) {
        return get_all_concerts_by_band_id(bandIds);
    }
    return {};
}

module.exports = {
    get_all_concerts_with_filter,
};
