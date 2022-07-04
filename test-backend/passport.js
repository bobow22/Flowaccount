const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy

const facebookPassportConfig = () => {
  return passport.use(
    new FacebookStrategy(
      {
        clientID: '5233430176714318',
        clientSecret: '371453627b3bb9becd60fdb047fcea34',
        callbackURL: 'http://localhost:3000/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'name', 'email'],
        passReqToCallback: true,
      },
      function (req, accessToken, refreshToken, profile, done) {
        try {
          if (profile) {
            req.user = profile
            done(null, profile)
          }
        } catch (error) {
          done(error)
        }
      }
    )
  )
}

module.exports = {
  facebookPassportConfig,
}
