const graphql = require("graphql");
const { GraphQLObjectType } = graphql;
const createUser = require("./createUser.js");
const createTodo = require("./createTodo.js");
const updateTodo = require("./updateTodo.js");
const deleteTodo = require("./deleteTodo.js")
const signInUser = require("./signInUser.js")
const deleteUser =  require("./deleteUser.js")

const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: createUser,
    createTodo: createTodo,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo,
    signInUser: signInUser,
    deleteUser: deleteUser,
  },
});

module.exports = RootMutation;
