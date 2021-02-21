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
}

module.exports = CommonErrorMessage;
