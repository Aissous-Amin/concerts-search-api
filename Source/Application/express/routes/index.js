const express = require('express');

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
};
