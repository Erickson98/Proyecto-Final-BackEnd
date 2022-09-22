const express = require("express");
const cookieSession = require("cookie-session");
const PersonRouter = require("./routers/Person.routes.js");
const routerUser = require("./routers/user.routes.js");
const http = require("http"); //
const { Server } = require("socket.io"); //
const cors = require("cors");
var cookieParser = require("cookie-parser");
require("dotenv").config();

require("./passport.js");
const passport = require("passport");
const authRouter = require("./routers/auth.routes.js");

const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(cors());
app.use(PersonRouter);

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_SESSION_KEY],
    maxAge: 200000000000
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.use(routerUser);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://shiny-tanuki-6e7bda.netlify.app",
    methods: "GET,POST,PUT,DELETE"
  }
});

module.exports = server;
