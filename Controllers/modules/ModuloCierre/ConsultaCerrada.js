const { CompactSign } = require("jose");
const db = require("../../../database/db");
const ConsultaCerrada = (req, res) => {
  try {
    const {
      firma_medico,
      fecha_proxima_cita,
      nombre_medico,
      reseta,
      noRecord_id
    } = req.body;
    const QUERY = `UPDATE consulta SET firma_medico='${firma_medico}' , fecha_proxima_cita='${fecha_proxima_cita}',nombre_medico='${nombre_medico}',reseta='${reseta}' WHERE noRecord_id='${noRecord_id}';`;
    db.query(QUERY, (err) => {
      if (err) {
        console.log(err);
      } else {
        return res.send("registros agregados");
      }
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  ConsultaCerrada
};
