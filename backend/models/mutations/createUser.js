const graphql = require("graphql");
const { GraphQLString } = graphql;
const UserType = require("../types/userType.js");
const { users } = require("../../models");
const bcrypt = require('bcrypt')

const createUser = {
    type: UserType,
    args: {
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
    },
    async resolve(parent, args) {
      try {
        const hashedPassword = await bcrypt.hash(args.password, 10);
        const newUser = await users.create({
          name: args.name,
          email: args.email,
          password: hashedPassword,
        });
        await newUser.save()
        return newUser;
      } catch (err) {
        throw new Error(`Failed to create user: ${err.message}`);
      }
    },
  };  

module.exports = createUser;
