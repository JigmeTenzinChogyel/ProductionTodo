const graphql = require("graphql");
const { GraphQLList, GraphQLID } = graphql;
const todoType = require('../types/todoType.js');
const { todos } = require("../index.js");
const { combineResolvers } = require('graphql-resolvers');
const isAuthenticated = require("../../helpers/authCombineResolvers.js");

const getTodoDetails = {
  type: todoType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: combineResolvers(isAuthenticated, async (parent, args) => {
    const { id } = args;
    return todos.findByPk(id)
      .then((todo) => {
        if (!todo) {
          throw new Error(`Todo with ID ${id} not found`);
        }
        return todo;
      })
      .catch((err) => {
        console.log(err);
        throw new Error(`Failed to fetch todo details: ${err.message}`);
      });
  }),
};

module.exports = getTodoDetails;
