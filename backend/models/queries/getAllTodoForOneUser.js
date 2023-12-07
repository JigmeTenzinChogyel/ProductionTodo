const graphql = require("graphql");
const { GraphQLList, GraphQLID } = graphql;
const todoType = require('../types/todoType.js');
const { todos, users } = require("../../models");
const { combineResolvers } = require('graphql-resolvers');
const isAuthenticated = require("../../helpers/authCombineResolvers.js");

const getAllTodoForOneUser = {
  type: new GraphQLList(todoType),
  args: {
    id: { type: GraphQLID },
  },
  resolve: combineResolvers(isAuthenticated, async (parent, args) => {
    return users.findByPk(args.id)
      .then((user) => {
        if (!user) {
          throw new Error("User not found");
        }
        return user.getTodos();
      })
      .catch((err) => {
        console.log(err);
        throw new Error(`Failed to fetch todos: ${err.message}`);
      });
  }),
};

module.exports = getAllTodoForOneUser;
