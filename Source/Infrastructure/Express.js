/**
 * Module dependencies.
 */
const express = require('express');
const bodyParser = require('body-parser');
const toobusy = require('toobusy-js');
const helmet = require('helmet');
const compression = require('compression');

/**
 * Express module to launch web servers based on the expressJs framework.
 *
 * @version 4.16.0
 *
 * @exports Infrastructure/Express
 *
 * */

class Express {
    static initHelmetHeaders(app) {
        const SIX_MONTHS = 15778476000;
        app.use(helmet.frameguard());
        app.use(helmet.xssFilter());
        app.use(helmet.noSniff());
        app.use(helmet.ieNoOpen());
        app.use(helmet.hsts({
            maxAge: SIX_MONTHS,
            includeSubDomains: true,
            force: true,
        }));
        if (['developpement,recette'].includes(process.env.NODE_ENV)) {
            app.use((req, res, next) => {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader(
                    'Access-Control-Allow-Headers',
                    'Origin, Accept,'
                    + ' Accept-Version, '
                    + 'Content-Length, '
                    + 'Content-MD5, '
                    + 'Content-Type, '
                    + 'Date, WeMaintain-Api-Version, '
                    + 'X-Response-Time, '
                    + 'X-PINGOTHER, X-CSRF-Token,Authorization',
                );
                res.setHeader('Access-Control-Allow-Methods', '*');
                res.setHeader('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
                res.setHeader('Access-Control-Max-Age', '1000');

                return next();
            });
        }

        app.disable('x-powered-by');
    }

    /**
     * Initializing the ExpressJs application.
     *
     * @returns {express} - Returns the ExpressJs instance.
     */
    static init() {
        const app = express();
        // Set maximum lag to an aggressive value.
        toobusy.maxLag(10000);
        // Set check interval to a faster value. This will catch more latency spikes
        // but may cause the check to be too sensitive.
        toobusy.interval(250);
        app.set('showStackError', true);
        app.use(compression());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
        /** Add WeMaintain-Api-Version to Header Response. */
        app.use((request, response, next) => {
            response.setHeader('WeMaintain-Api-Version', global.api_version ? global.api_version : 'NoN');
            next();
        });
        this.initHelmetHeaders(app);
        return app;
    }
}


module.exports = Express;
