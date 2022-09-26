const { Router } = require("express");
const { postPago } = require("../Controllers/modules/ModuloPago/Pago");

const router = Router();

router.post("/PagoAutorizado", postPago);

module.exports = router;
