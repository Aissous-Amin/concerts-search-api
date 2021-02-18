const common_use_case = require('../../uses-cases');


/**
 * @typedef {ConcertsSchema} ConcertsSchema
 */

/**
 * MiddlewareController GET_CONCERTS.
 *
 * @module Concerts
 * @function
 * @param {object} request - Express request object.
 * @param {object} response - Express response object.
 * @param {Function} next - Callback next express.
 */
module.exports = async (request, response, next) => {
    try {
        if(request._type_content === undefined) {
            const result = await common_use_case.queries.read_concerts_collection();
            request._resource = result;
            request._type_content = 'object';
        }
    } catch (e) {
        request._type_content = 'internet_server_with_errors'
        request._details = [{ message: e.message }];
    } finally {
        next();
    }
};
