const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
require('dotenv').config();

const { CLIENT_ID_FB, CLIENT_SECRET_FB } = process.env;

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
passport.use(new FacebookStrategy({
  clientID: CLIENT_ID_FB,
  clientSecret: CLIENT_SECRET_FB,
  callbackURL: 'http://localhost:3000/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'name', 'email'],
  passReqToCallback: true,
},
  function (req, accessToken, refreshToken, profile, done) {
    try {
      if (profile) {
        console.log("FB Token: " + accessToken)
        req.user = profile
        done(null, profile)
      }
    } catch (error) {
      done(error)
    }
  }
));