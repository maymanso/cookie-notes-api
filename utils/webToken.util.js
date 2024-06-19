const jwt = require('jsonwebtoken');

class WebToken {
  constructor() {
    this.jwt = jwt;
  }

  generate = user => {
    return this.jwt.sign(user, process.env.TOKEN_SECRET_JWT, { expiresIn: process.env.TOKEN_EXPIRATION });
  }

  verify = async token => {
    return await this.jwt.verify(token, process.env.TOKEN_SECRET_JWT)
  }

}

module.exports = new WebToken();
