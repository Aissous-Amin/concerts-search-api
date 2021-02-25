const MESSAGE_TYPE = require('./typeMessage');
/**
 * Functional messages related to the common resource.
 */

/**
 *
 * @type {object} List of functional messages linked to the Concerts resource.
 */
module.exports = {
    OBJECT_UNKNOWN: {
        MESSAGE: 'Query filter not allowed',
        ID: 'RV-0005',
        TYPE: MESSAGE_TYPE.VALIDATION,
    },
    UNDEFINED: {
        MESSAGE: 'At least one query parameter is mandatory : bandIds OR latitude/longitude/radius (But can provide all the fields too)',
        ID: 'RV-0006',
        TYPE: MESSAGE_TYPE.VALIDATION,
    },
    OBJECT_MISSING: {
        MESSAGE: 'Missing query',
        ID: 'RV-0006',
        TYPE: MESSAGE_TYPE.VALIDATION,
    },
};
