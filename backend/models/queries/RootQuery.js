const graphql = require("graphql");
const { GraphQLObjectType } = graphql;
const getAllUser = require("./getAllUser.js");
const getAllTodo = require("./getAllTodo.js");
const getTodoDetails = require("./getTodoDetails.js")
const getAllTodoForOneUser = require("./getAllTodoForOneUser.js")
const signInUser = require("./signInUser.js")

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUser: getAllUser,
    getAllTodo: getAllTodo,
    getTodoDetails: getTodoDetails,
    getAllTodoForOneUser: getAllTodoForOneUser,
    signInUser: signInUser,
  },
});

module.exports = RootQuery;
