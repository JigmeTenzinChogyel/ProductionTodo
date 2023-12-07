const { graphqlHTTP } =  require("express-graphql");
const schema = require('../graphql/schema.graphql.js')

const graphql = (app) => {
    app.use(
        '/graphql',
        graphqlHTTP(async (req) => ({
          schema,
          graphiql: true,
        }))
      );
}

module.exports =  graphql;