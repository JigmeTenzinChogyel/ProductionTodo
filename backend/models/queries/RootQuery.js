const graphql = require("graphql");
const { GraphQLObjectType } = graphql;
const getAllUser = require("./getAllUser.js");
const getAllTodo = require("./getAllTodo.js");
const getTodoDetails = require("./getTodoDetails.js")
const getAllTodoForOneUser = require("./getAllTodoForOneUser.js")
const verifyToken = require("./veryifyToken.js")

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUser: getAllUser,
    getAllTodo: getAllTodo,
    getTodoDetails: getTodoDetails,
    getAllTodoForOneUser: getAllTodoForOneUser,
    verifyToken: verifyToken,
  },
});

module.exports = RootQuery;
