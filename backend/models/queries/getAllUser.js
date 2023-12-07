const graphql = require("graphql");
const { GraphQLList } = graphql;
const userType = require('../types/userType.js');
const { users } = require("../../models");
const { combineResolvers } = require('graphql-resolvers');
const isAuthenticated = require("../../helpers/authCombineResolvers.js");
console.log(isAuthenticated)

const getAllUser = {
  type: new GraphQLList(userType),
  resolve: combineResolvers(isAuthenticated, async (parent, args) => {
    return users.findAll()
      .then((users) => {
        return users;
      })
      .catch((err) => {
        console.log(err);
      });
  })
};

module.exports = getAllUser;
