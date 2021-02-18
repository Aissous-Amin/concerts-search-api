const Joi = require('@hapi/joi');
const CommonErrorMessage = require('../common/CommonErrorMessage');

/**
 * @typedef {object} CommonFilter
 * @property {array} bandIds - array of string (or comma separated list).
 * @property {number} latitude - Latitude.
 * @property {number} longitude - Longitude.
 * @property {number} radius - Radius in kilometers.
 */
const ConcertsInputFilter = Joi.object({
    bandIds: Joi.array().optional()
        .error(CommonErrorMessage.validate),
    latitude: Joi.number().optional()
        .error(CommonErrorMessage.validate),
    longitude: Joi.number().optional()
        .error(CommonErrorMessage.validate),
    radius: Joi.number().integer().optional()
        .error(CommonErrorMessage.validate),
}).min(1);

module.exports = ConcertsInputFilter;
