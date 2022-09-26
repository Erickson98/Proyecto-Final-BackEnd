const { Router } = require("express");
const {
  postConsultaPublica
} = require("../Controllers/modules/ModuleConsultaPublica/ConsultasPublicas");
const {
  postConsultaPrivada
} = require("../Controllers/modules/ModuloConsultaPrivada/ConsultaPrivada");

const router = Router();

router.post("/ConsultaPublica", postConsultaPublica);
router.post("/ConsultaPrivada", postConsultaPrivada);

module.exports = router;
