const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization
  const token = authHeader?.split(' ')[1]
  if (!token) return res.status(401).json({ error: 'Token manquant' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = decoded.id
    next()
  } catch {
    res.status(403).json({ error: 'Token invalide' })
  }
}
