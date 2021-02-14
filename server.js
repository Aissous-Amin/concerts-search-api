/**
 * Charger la configuration de l'application.
 */

require('./Config/config');

const { ExpressServer } = require(__moduleAliases.Infrastructure);

const { routes } = require(__moduleAliases.Application).express;


ExpressServer.start(routes);
