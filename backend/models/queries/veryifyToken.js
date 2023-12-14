const graphql = require("graphql");
const { GraphQLString, GraphQLBoolean } = graphql;
const userType = require('../types/userType.js')
const { parseToken } = require("../../helpers/jwt.js");

const verifyToken = {
    type: userType,
    args: {
        token: { type: GraphQLString }
    },
    resolve: (parent, { token }, context) => {
        console.log(token)
        try {
            const isValid = parseToken(token);
            if ( isValid ) {
                return isValid;
            } else {
                return null
            }
        } catch (err) {
            throw new Error(`Error with parsing: ${err}`);
        }
    },
};

module.exports = verifyToken;
