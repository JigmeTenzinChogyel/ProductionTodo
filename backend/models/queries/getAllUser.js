const graphql = require("graphql");
const { GraphQLList } = graphql;
const userType = require('../types/userType.js');
const { users } = require("../../models");

const getAllUser = {
  type: new GraphQLList(userType),
  resolve(parent, args) {
    return users.findAll()
      .then((users) => {
        return users;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = getAllUser;
