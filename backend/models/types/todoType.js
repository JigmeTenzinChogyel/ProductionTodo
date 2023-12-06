const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean } = graphql;

const TodoType = new GraphQLObjectType({
  name: "Todo",
  fields: () => ({
    id: { type: GraphQLID },
    description: { type: GraphQLString },
    completion: { type: GraphQLBoolean },
    user_id: { type: GraphQLID},
  }),
});



module.exports = TodoType;
