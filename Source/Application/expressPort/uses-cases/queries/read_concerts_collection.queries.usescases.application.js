const persistance = require(__moduleAliases.Persistance);

/**
 * Allows to find all the concerts respecting the filter : read_concerts_service.
 *
 * @param {object} query - Contains all the filters passed as input.
 * @param {Array<number>} query.bandIds - Band id list.
 * @param {number} query.longitude - Longitude.
 * @param {number} query.latitude - Latitude.
 * @param {number} query.radius - Radius in Kiloliter.
 * @returns {object} Result - All concerts with details of band and venue information.
 */
function read_concerts_service({ bandIds, longitude, latitude, radius}) {
    if (longitude) {
        return persistance.mongoose.queries.common.get_all_venues_where_location_within_radius(longitude, latitude, radius, bandIds);
    } else if (bandIds) {
        return persistance.mongoose.queries.concerts.get_all_concerts_by_band_id(bandIds);
    }
    return {};
}

/**
 * Return all concerts respecting the input filter.
 *
 * @param {object} query - Object with filter settings.
 * @returns {Promise<object>}
 */
module.exports = query => read_concerts_service(query);
