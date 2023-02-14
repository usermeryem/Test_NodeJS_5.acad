const passport = require('passport')
const BearerStrategy = require('passport-http-bearer')
const jwt = require('jsonwebtoken')
const client = require('../models/clientModel')
passport.use(
  new BearerStrategy(
    function (token, done) {
      try {
        const decoded = jwt.decode(token, 'secret')
        client.findOne({ _id: decoded.id }, function (err, client) {
          if (err) { return done(err) }
          if (!client) { return done(null, false) }
          return done(null, client, { scope: 'all' })
        })
      } catch (error) {
        return done(null, false)
      }
    }
  )
)