const { Router } = require("express");
const { getData } = require("../Controllers/modules/ModuleGetData/getData");

const router = Router();

router.get("/getData", getData);

module.exports = router;
