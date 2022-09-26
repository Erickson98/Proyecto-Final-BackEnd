const db = require("../../../database/db");

const logout = async (req, res) => {
  req.logOut();
  res.clearCookie("session", { path: "/" });
  res.clearCookie("session.sig", { path: "/" });
  res.clearCookie("session 2", { path: "/" });
  res.clearCookie("session 1", { path: "/" });
  res.redirect(process.env.REACT_APP_API_ROUTER_REDIRECT_LOGOUT);
};
const loginFailed = (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure"
  });
};

const loginSucess = (req, res) => {
  console.log("hola");
  console.log(req.user);
  res.status(200).json({
    message: req.user
  });
};

const checkUsuario = (req, res) => {
  console.log(req.body);
  const { Usuario, Password } = req.body;
  const QUERY = `select * from medico where nombre = '${Usuario}' and  password='${Password}';`;
  db.query(QUERY, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).json({
        message: err
      });
    } else {
      return res.status(200).json({
        message: result
      });
    }
  });
};

module.exports = {
  logout,
  loginFailed,
  loginSucess,
  checkUsuario
};
