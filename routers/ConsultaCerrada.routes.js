const { Router } = require("express");
const {
  ConsultaCerrada
} = require("../Controllers/modules/ModuloCierre/ConsultaCerrada.js");

const router = Router();

router.post("/ConsultaCerrada", ConsultaCerrada);

module.exports = router;
