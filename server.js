/**
 * Charger la configuration de l'application.
 */

require('./Config/config');

const { ExpressServer } = require(__moduleAliases.Infrastructure).http;

const { routes } = require(__moduleAliases.Application).express;


ExpressServer.start(routes);
