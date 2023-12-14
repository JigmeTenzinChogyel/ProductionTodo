const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;
const userType = require("./userType.js")

const SignInResponse = new GraphQLObjectType({
    name: "SignInUserResponse",
    fields: () => ({
        user: { type: userType },
        token: { type: GraphQLString}
    }),
})

module.exports = SignInResponse;