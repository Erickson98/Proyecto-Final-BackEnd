require("dotenv").config();
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.ID_SECRET,
      clientSecret: process.env.ID_SECRET,
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
      clientID: process.env.ID_CLIENT,
      clientSecret: process.env.ID_SECRET,
      callbackURL: "/auth/google/callback"
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile._json);
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
