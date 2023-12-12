const jwtUtils = require('../utils/jwtUtils');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  const decodedToken = jwtUtils.verifyToken(token); 
  if (!decodedToken) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }

  req.userId = decodedToken.userId;
  next();
};

module.exports = {
  verifyToken,
};
