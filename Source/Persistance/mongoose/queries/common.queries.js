const { Bands } = require('../schemas/bands');
const { Concerts } = require('../schemas/concerts');
const { Venues } = require('../schemas/venues');

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
    return result;
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
