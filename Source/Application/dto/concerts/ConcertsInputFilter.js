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
    bandIds: Joi.array().required()
        .error(CommonErrorMessage.validate),
    latitude: Joi.number()
        .error(CommonErrorMessage.validate),
    longitude: Joi.number()
        .error(CommonErrorMessage.validate),
    radius: Joi.number()
        .error(CommonErrorMessage.validate),
});

module.exports = ConcertsInputFilter;
