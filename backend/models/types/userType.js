const graphql = require("graphql");
const TodoType = require("./todoType");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID)},
    name: { type: GraphQLString },
    email: { type: new GraphQLNonNull(GraphQLString) },
    todos:{
      type: new graphql.GraphQLList(TodoType),
      resolve:async (user) => user.todos || await user.getTodos()
    }
  }),
});

module.exports = UserType;
