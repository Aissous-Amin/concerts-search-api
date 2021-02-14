/**
 * @typedef {WelcomeSchema} WelcomeSchema
 */

/**
 * Middleware GET_WELCOME.
 *
 * @module Welcome
 * @function
 * @param {object} request - Express request object.
 * @param {object} response - Express response object.
 * @param {Function} next - Callback next express.
 */
module.exports = async (request, response, next) => {
    try {
        /** @type {{message: string, UserAgent: string}} */
        const result = {
            message: "Concerts-Service : Welcome To WeMaintain API",
            UserAgent: request.headers['user-agent'],
        };
        request._resource = result;
        request._type_content = 'objedazct';
    } catch (e) {
        console.error(e.message);
        request._type_content = 'internet_server_with_errors'
        request._details = [{ message: e.message }];
    } finally {
        next();
    }
};
