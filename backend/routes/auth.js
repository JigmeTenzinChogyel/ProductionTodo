const { parseToken, tokenFromRequest } = require("../helpers/jwt");
const { users } = require('../models')

const auth = (app) => {
  // Parse the JWT token and fetch the logged in user & org
  app.use(async (req, res, next) => {
    try {
      const token = tokenFromRequest(req);
      if (token) {
        const payload = parseToken(token);
        req.user = await users.findByPk(payload.id);
        console.log(req.user)
      }
    } catch(err) {
      console.log(err)
    }

    next();

  });

  app.use(async (req, res, next) => {
    next();
  });

}

module.exports = auth;
