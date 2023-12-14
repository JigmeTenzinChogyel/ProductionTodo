const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLNonNull } = graphql;

const TodoType = new GraphQLObjectType({
  name: "Todo",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID)},
    description: { type: new GraphQLNonNull(GraphQLString) },
    completion: { type: new GraphQLNonNull(GraphQLBoolean) },
    user_id: { type: new  GraphQLNonNull(GraphQLID)},
  }),
});



module.exports = TodoType;
