require("dotenv").config();
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.REACT_APP_API_CLIENT_ID_GITHUB,
      clientSecret: process.env.REACT_APP_API_CLIENT_SECRET_GITHUB,
      callbackURL: "/auth/facebook/callback"
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(user);
      console.log(user);
      console.log(user);
      console.log(user);
      console.log(user);
      //   const user = {
      //     name: profile._json.login,
      //     email: profile._json.html_url,
      //     image: profile._json.avatar_url
      //   };

      profile = user;
      done(null, profile);
    }
  )
);
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.REACT_APP_API_ID_CLIENT_GOOGLE,
      clientSecret: process.env.REACT_APP_API_CLIENT_SECRET_GOOGLE,
      callbackURL: "/auth/google/callback"
    },
    function (accessToken, refreshToken, profile, done) {
      const user = {
        name: profile._json.name,
        email: profile._json.email,
        image: profile._json.picture
      };

      profile = user;
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
