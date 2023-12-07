const { AuthenticationError, AUTH_ERROR} = require('./errors.js')
const { skip } = require('graphql-resolvers')

const isAuthenticated = (parent, args, { user }) => 
    user ? skip : new AuthenticationError(AUTH_ERROR.AUTH_REQUIRED);

module.exports = isAuthenticated;