const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const getTokenSecret = () => secret;

const tokenFromRequest = (req) => req.headers.authorization?.split(' ')[1];

const parseToken = (token) => jwt.verify(token, secret);

module.exports = {
  getTokenSecret,
  tokenFromRequest,
  parseToken
};
