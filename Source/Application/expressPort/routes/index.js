/* eslint-disable global-require */
const express = require('express');

const { ResponseController } = require(__moduleAliases.Infrastructure).http;

/**
 * Liste des routes exposés par le service .
 *
 * @param {object} app - L'instance Express.
 */
module.exports = (app) => {
    /**
     * Initilialiser le router qui sera utilisé pour tous les end-points du service.
     */
    const versionRouter = express.Router();

    /**
     * End-point service concerts.
     */
    const categories = ['concerts', 'util'];
    categories.forEach((categorie) => {
        const routes = require(`./${categorie}`);
        if (routes) {
            routes.forEach((obj) => {
                if (obj.envs.indexOf('all') > -1 || obj.envs.indexOf(process.env.NODE_ENV) > -1) {
                    obj.route(versionRouter);
                    app.use(__config.prefix, versionRouter);
                }
            });
        }
    });

    /**
     * Tous les end-point seront accessible sur chemin __config.prefix.
     */
    app.use(__config.prefix, versionRouter);

    /** Catch unhandled errors. */
    app.all('*', (request, response) => {
        request._type_content = 'not_found_with_errors';
        request._details = { message: 'The server could not find the requested resource' };
        ResponseController.ExpressResponseController(request, response);
    });

    app.use((error, request, response) => {
        console.error(error);
        request._type_content = 'internal_server_with_errors';
        ResponseController.ExpressResponseController(request, response);
    });
};
