// const passport = require('passport')
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// require('dotenv').config();

// const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

// passport.serializeUser(function (user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function (obj, cb) {
//   cb(null, obj);
// });

// /*  Google AUTH  */
// passport.use(new GoogleStrategy({
//   clientID: GOOGLE_CLIENT_ID,
//   clientSecret: GOOGLE_CLIENT_SECRET,
//   callbackURL: "http://localhost:3000/auth/google/callback",
//   profileFields: ['id', 'displayName', 'name', 'email']
// },
//   function (accessToken, refreshToken, profile, done) {
//     userProfile = profile;
//     console.log('User -->', profile)
//     return done(null, userProfile);
//   }
// ));