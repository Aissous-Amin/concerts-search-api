const MESSAGE_TYPE = require('./typeMessage');
/**
 * Functional messages related to the Concerts resource.
 */

/**
 *
 * @type {object} List of functional messages linked to the Concerts resource.
 */
module.exports = {
    BANDIDS: {
        MESSAGE: 'Les valeurs attendues pour le champs bandIds ne sont pas au bon format',
        ID: 'RV-0001',
        TYPE: MESSAGE_TYPE.VALIDATION,
    },
    LATITUDE: {
        MESSAGE: 'Les valeurs attendues pour le champs LATITUDE sont pas au bon format',
        ID: 'RV-0002',
        TYPE: MESSAGE_TYPE.VALIDATION,
    },
    LONGITUDE: {
        MESSAGE: 'Les valeurs attendues pour le champs longitude sont pas au bon format',
        ID: 'RV-0003',
        TYPE: MESSAGE_TYPE.VALIDATION,
    },
    RADIUS: {
        MESSAGE: 'Les valeurs attendues pour le champs radius sont pas au bon format',
        ID: 'RV-0004',
        TYPE: MESSAGE_TYPE.VALIDATION,
    },
};
