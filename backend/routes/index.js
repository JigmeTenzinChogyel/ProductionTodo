const authRoute = require('./auth')
const graphiqlRoute = require('./graphql')

const routes = (app) => {
    authRoute(app);
    graphiqlRoute(app);
}

module.exports = routes;
