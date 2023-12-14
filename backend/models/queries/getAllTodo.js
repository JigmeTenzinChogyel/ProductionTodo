const graphql = require("graphql");
const { GraphQLList } = graphql;
const todoType = require('../types/todoType.js');
const { todos } = require("../../models");
const isAuthenticated = require("../../helpers/authCombineResolvers.js");

const getAllTodo = {
  type: new GraphQLList(todoType),
  resolve: async (parent, args) => {
    return todos.findAll()
      .then((todos) => {
        return todos;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

module.exports = getAllTodo;
