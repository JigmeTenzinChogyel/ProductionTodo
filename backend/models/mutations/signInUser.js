const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;
const { users } = require("../../models");
const SignInResponse = require('../types/signInResponseType.js');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const signInUser = {
    type: SignInResponse,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString },
    },
    async resolve(parent, args) {
        try {
            const user = await users.findOne({ where: { email: args.email } });
            if (!user) {
              throw new Error("User does not exist");
            }
            const isPasswordValid = await bcrypt.compare(args.password, user.password);
            if (!isPasswordValid) {
                throw new Error("Invalid credentials");
            }

            const token = jwt.sign(
              {
                id: user.id,
                name: user.name,
                email: user.email,
              },
              process.env.JWT_SECRET, {
                  expiresIn: "1h"
              }
            );

            return { user, token };

        } catch (err) {
            console.error(err);
            throw new Error(`Failed to sign in: ${err.message}`);
        }
    },
};  

module.exports = signInUser;
