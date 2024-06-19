const webToken = require('../../utils/webToken.util');

class AuthRoutesMiddleware {
  protect = async (req, res, next) => {
    const token = req.get('Authorization');

    if (!token) {
      return res.status(401).json({
        type: 'Auth',
        message: 'Missing token',
      });
    }

    const tokenWithoutBearer = token.split(' ')[1];

    try {
      const tokenInfo = await webToken.verify(tokenWithoutBearer);

      req.user = tokenInfo;
      return next();

    } catch (error) {
      return res.status(401).json({
        type: 'Auth',
        message: 'Invalid credentials',
      });
    }
  }
}

module.exports = new AuthRoutesMiddleware();

