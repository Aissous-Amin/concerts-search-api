const persistance = require(__moduleAliases.Persistance);

/**
 * Return all concerts respecting the input filter.
 *
 * @param query {object} Query - Object with filter settings.
 * @returns {Promise<Object>}
 */
module.exports = async (query) => {
    const result = await persistance.mongoose.queries.common.get_all_venues(query);
    return result;
};
