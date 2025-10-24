const jwt = require('jsonwebtoken')
const User = require('../models/userModel') // ✅ Capitalized and correct import

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' })
  }

  // Token looks like: "Bearer <token>"
  const token = authorization.split(' ')[1]
  
  try {


    // ✅ Verify token and get _id from payload
    const { _id } = jwt.verify(token, process.env.SECRET)

    // ✅ Find the user (make sure _id exists)
    const user = await User.findOne({ _id }).select('_id email')

    if (!user) {
      return res.status(401).json({ error: 'User not found' })
    }

    // ✅ Attach user to request
    req.user = user

    next()
  } catch (error) {
    console.error('Auth Error:', error.message)
    return res.status(401).json({ error: 'Request is not authorized' })
  }
}

module.exports = requireAuth
