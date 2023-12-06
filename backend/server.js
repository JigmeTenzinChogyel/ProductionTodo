const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require("express-graphql");
const schema = require('./graphql/schema.graphql.js')
const db = require('./models')
require('dotenv').config()
const port = process.env.PORT || 8000
const app = express()

app.use(cors({ credentials: true, origin: true }));

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
)

db.sequelize.sync().then((req) => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

