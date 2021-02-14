const Express = require('./Express');
const http = require('http');

/** @memberof Infrastructure/ports/http */

/**
 *{http.ExpressServer} Serveur Web.
 */
let server;

class ExpressServer {
    /**
     * Fonction d'initialisation du serveur API.
     *
     * @returns {*|void|Promise<void>}
     * @param {*} middlewares - Middlewares Express.
     */
    static async init(middlewares) {
        /** @type {object} */
        const app = Express.init();

        /** TODO : Create log directory with logger stream. */

        /** Init service end-points. */
        middlewares(app);

        return app;
    }

    static async http_listen(app) {
        http.globalAgent.maxSockets = Infinity;
        return new Promise((success) => {
            server = http.createServer(app);
            server.listen(__config.port, __config.host, () => {
                success(server);
            });
        });
    }

    /**
     * Fonction de lancement d'application.
     *
     * @param {Function} middlewares - La liste des middlewares exposés par l'application.
     *
     * @returns {Promise<void>} Retourne une promise.
     */
    static async start(middlewares) {
        const app = await this.init(middlewares);
        await this.http_listen(app);
        console.log(__config.startMessage);
        console.log(`${__config.app.title} VERSION ${global.api_version}`);
        console.log(`Environnement: ${process.env.NODE_ENV}`);
        return app;
    }

    /**
     * Stoper l'application.
     */
    static close() {
        server.close();
    }
}


/**
 * Module Web du service.
 *
 * @exports Infrastructure/http/ExpressServer
 * */

module.exports = ExpressServer;
