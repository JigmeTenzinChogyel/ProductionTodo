const graphql = require("graphql");
const { GraphQLSchema } = graphql;
const RootQuery = require("../models/queries/RootQuery.js");
const RootMutation = require("../models/mutations/RootMutation.js");

module.exports = new GraphQLSchema({ query: RootQuery, mutation: RootMutation });
