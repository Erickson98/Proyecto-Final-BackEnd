const { Router } = require("express");
const {
  searchTurno
} = require("../Controllers/modules/ModulesearchTurno/searchTurno.js");

const router = Router();

router.get("/searchTurno", searchTurno);

module.exports = router;
