const graphql = require("graphql");
const { GraphQLList } = graphql;
const todoType = require('../types/todoType.js');
const { todos } = require("../../models");
const { combineResolvers } = require('graphql-resolvers');
const isAuthenticated = require("../../helpers/authCombineResolvers.js");

const getAllTodo = {
  type: new GraphQLList(todoType),
  resolve: combineResolvers(isAuthenticated, async (parent, args) => {
    return todos.findAll()
      .then((todos) => {
        return todos;
      })
      .catch((err) => {
        console.log(err);
      });
  }),
};

module.exports = getAllTodo;
