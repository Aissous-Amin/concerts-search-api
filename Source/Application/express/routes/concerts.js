const { middleware, paths } = require('./../index');
const { ResponseController } = require(__moduleAliases.Infrastructure);

module.exports = [
  {
    route: (app) => {
      app.route(paths.welcome.url)
          .get(
          );
    },
    envs: ['all'],
  },
];
