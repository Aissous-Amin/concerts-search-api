const persistance = require(__moduleAliases.Persistance);

/**
 * Return all concerts respecting the input filter.
 *
 * @param {object} query - Object with filter settings.
 * @returns {Promise<object>}
 */
module.exports = query => persistance.mongoose.queries.concerts.get_all_concerts_with_filter(query);
