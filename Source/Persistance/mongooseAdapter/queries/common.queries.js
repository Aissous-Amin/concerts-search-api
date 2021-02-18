const { Bands } = require('../schemas/bands.schemas');
const { Concerts } = require('../schemas/concerts.schemas');
const { Venues } = require('../schemas/venues.schemas');

/**
 *
 * @returns {Promise<Object>}
 */
async function get_all_bands() {
    const result = await Bands.find();
    return result;
}

/**
 *
 * @returns {Promise<Object>}
 */
async function get_all_venues() {
    const result = await Venues.find();
    return result[0];
}

/**
 *
 * @returns {Promise<Object>}
 */
async function get_all_concerts() {
    const result = await Concerts.find();
    return result;
}

module.exports = {
    get_all_bands,
    get_all_venues,
    get_all_concerts
};
