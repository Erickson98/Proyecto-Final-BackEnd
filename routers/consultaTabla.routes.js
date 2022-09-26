const { Router } = require("express");
const {
  ConsultaTabla
} = require("../Controllers/modules/ModuloConsultaTabla/ConsultaTabla.js");

const router = Router();

router.get("/ConsultaTabla", ConsultaTabla);

module.exports = router;
