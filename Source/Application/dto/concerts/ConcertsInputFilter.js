const Joi = require('@hapi/joi');
const CommonErrorMessage = require('../common/CommonErrorMessage');

/**
 * @typedef {object} CommonFilter
 * @property {Array} bandIds - Array of string (or comma separated list).
 * @property {number} latitude - Latitude.
 * @property {number} longitude - Longitude.
 * @property {number} radius - Radius in kilometers.
 */
const ConcertsInputFilter = Joi.object({
    bandIds: Joi.array().items(Joi.number())
        .error(CommonErrorMessage.validate_global),
    latitude: Joi.number()
        .error(CommonErrorMessage.validate),
    longitude: Joi.number()
        .error(CommonErrorMessage.validate),
    radius: Joi.number().integer()
        .error(CommonErrorMessage.validate),
}).min(1)
    .and('latitude', 'longitude')
    .and('longitude', 'radius')
    .error(CommonErrorMessage.validate_global);

module.exports = ConcertsInputFilter;
