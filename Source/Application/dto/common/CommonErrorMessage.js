/* eslint-disable no-param-reassign */
const { functionalMessage } = require(__moduleAliases.Domain);

class CommonErrorMessage {
    static validate(errors) {
        errors.forEach((err) => {
            switch (err.local.key) {
            case 'bandIds':
                err.message = {
                    message: functionalMessage.concerts.BANDIDS.MESSAGE,
                    id: functionalMessage.concerts.BANDIDS.ID,
                    type: functionalMessage.concerts.BANDIDS.TYPE,
                };
                break;
            case 'latitude':
                err.message = {
                    message: functionalMessage.concerts.LATITUDE.MESSAGE,
                    id: functionalMessage.concerts.LATITUDE.ID,
                    type: functionalMessage.concerts.LATITUDE.TYPE,
                };
                break;
            case 'longitude':
                err.message = {
                    message: functionalMessage.concerts.LONGITUDE.MESSAGE,
                    id: functionalMessage.concerts.LONGITUDE.ID,
                    type: functionalMessage.concerts.LONGITUDE.TYPE,
                };
                break;
            case 'radius':
                err.message = {
                    message: functionalMessage.concerts.RADIUS.MESSAGE,
                    id: functionalMessage.concerts.RADIUS.ID,
                    type: functionalMessage.concerts.RADIUS.TYPE,
                };
                break;
            case undefined:
                err.message = {
                    message: functionalMessage.common.UNDEFINED.MESSAGE,
                    id: functionalMessage.common.UNDEFINED.ID,
                    type: functionalMessage.common.UNDEFINED.TYPE,
                };
                break;
            default:
                err.message = {
                    message: `${err.local.missing ? `Missing query : ${err.local.missing[0]}` : `Object unknown : forbidden extra query = ${err.local.key}`}`,
                    id: 'RV-0000',
                    type: functionalMessage.concerts.RADIUS.TYPE,
                };
                break;
            }
        });
        return errors;
    }
    static validate_global(errors) {
        errors.forEach((err) => {
            switch (err.code) {
            case 'number.base':
                err.message = {
                    message: `${functionalMessage.concerts.BANDIDS.MESSAGE} : ${err.local.value}`,
                    id: functionalMessage.concerts.BANDIDS.ID,
                    type: functionalMessage.concerts.BANDIDS.TYPE,
                };
                break;
            case 'object.unknown':
                err.message = {
                    message: `${functionalMessage.common.OBJECT_UNKNOWN.MESSAGE} : ${err.local.key} = ${err.local.value}`,
                    id: functionalMessage.common.OBJECT_UNKNOWN.ID,
                    type: functionalMessage.common.OBJECT_UNKNOWN.TYPE,
                };
                break;
            default:
                err.message = {
                    message: `${functionalMessage.common.OBJECT_MISSING.MESSAGE} : ${err.local.missing[0]}`,
                    id: functionalMessage.common.OBJECT_MISSING.ID,
                    type: functionalMessage.common.OBJECT_MISSING.TYPE,
                };
                break;
            }
        });
        return errors;
    }
}

module.exports = CommonErrorMessage;
