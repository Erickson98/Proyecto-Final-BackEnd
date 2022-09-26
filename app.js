const express = require("express");
const cookieSession = require("cookie-session");
const ModuloConsultaPublicaRouter = require("./routers/Consultas.routes.js");
const AutorizacionPago = require("./routers/AutorizacionPago.routes.js");
const getData = require("./routers/getData.routes.js");
const ConsultaCerrada = require("./routers/ConsultaCerrada.routes.js");
const ConsultaTabla = require("./routers/consultaTabla.routes.js");
const searchTurno = require("./routers/searchTurno.routes.js");
const cors = require("cors");
var cookieParser = require("cookie-parser");
require("dotenv").config();

require("./passport.js");
const passport = require("passport");
const authRouter = require("./routers/auth.routes.js");
const app = express();
app.use(cookieParser());
app.use(express.json());
app.set("trust proxy", 1);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE"
  })
);
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_SESSION_KEY],
    maxAge: 24 * 60 * 60 * 100
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(ModuloConsultaPublicaRouter);
app.use(AutorizacionPago);
app.use(getData);
app.use(ConsultaCerrada);
app.use(ConsultaTabla);
app.use(searchTurno);
app.use("/auth", authRouter);

module.exports = app;
