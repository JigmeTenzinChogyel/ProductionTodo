const graphql = require("graphql");
const { GraphQLString } = graphql;
const UserType = require("../types/userType.js");
const { users } = require("../../models");

const createUser = {
    type: UserType,
    args: {
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
    },
    async resolve(parent, args) {
      try {
        const newUser = await users.create({
          name: args.name,
          email: args.email,
          password: args.password,
        });
        await newUser.save()
        return newUser;
      } catch (err) {
        throw new Error(`Failed to create user: ${err.message}`);
      }
    },
  };  

module.exports = createUser;
