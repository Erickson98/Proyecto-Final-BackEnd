const { Router } = require("express");
const passport = require("passport");
const router = Router();
const {
  logout,
  loginFailed,
  loginSucess,
  checkUsuario
} = require("../Controllers/modules/ModuleAuth/auth.login.js");

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/logout", logout);

router.get("/login/failed", loginFailed);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/Consultas",
    failureRedirect: "/login/failed"
  }),

  async (req, res) => {
    res.status(204).json({
      success: true,
      message: "successfull"
    });
  }
);
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["profile"] })
);
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "http://localhost:3000/Consultas",
    failureRedirect: "/login/failed"
  }),
  (req, res) => {
    res.status(204).json({
      success: true,
      message: "successfull"
    });
  }
);
router.get("/login/success", loginSucess);
router.post("/login/searchUsuario", checkUsuario);
module.exports = router;
