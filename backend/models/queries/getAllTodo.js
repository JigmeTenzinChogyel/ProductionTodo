const graphql = require("graphql");
const { GraphQLList } = graphql;
const todoType = require('../types/todoType.js');
const { todos } = require("../../models");

const getAllTodo = {
  type: new GraphQLList(todoType),
  resolve(parent, args) {
    return todos.findAll()
      .then((todos) => {
        return todos;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = getAllTodo;
