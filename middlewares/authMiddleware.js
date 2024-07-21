const { expressjwt: jwtMiddleware } = require('express-jwt');
const SECRET_KEY = 'secret';

const authMiddleware = jwtMiddleware({ secret: SECRET_KEY, algorithms: ['HS256'] });

module.exports = authMiddleware;