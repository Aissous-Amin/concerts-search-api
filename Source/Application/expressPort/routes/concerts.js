const { middleware, paths } = require('./../index');

const { ResponseController } = require(__moduleAliases.Infrastructure).http;

module.exports = [
    {
        route: (app) => {
            app.route(paths.get_concerts_collection.url)
                .get(
                    middleware.validators.get_concerts,
                    middleware.controllers.get_concerts,
                    ResponseController.ExpressResponseController,
                );
        },
        envs: ['all'],
    },
];
