const { middleware, paths } = require('./../index');
const { ResponseController } = require(__moduleAliases.Infrastructure).http;

module.exports = [
    {
        route: (app) => {
            app.route(paths.welcome.url)
                .get(
                    middleware.controllers.get_welcome,
                    ResponseController.ExpressResponseController
                );
        },
        envs: ['all'],
    },
];
