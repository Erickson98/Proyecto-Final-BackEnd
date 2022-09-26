const db = require("../../../database/db");
const postConsultaPrivada = (req, res) => {
  try {
    console.log(req.boy);
    const { Nombre, Apellido, Direccion, email } = req.body;
    const QUERY = `INSERT INTO usuario (usuario_id,nombre,apellido,direccion,email) VALUES (uuid(),'${Nombre}','${Apellido}','${Direccion}','${email}');`;

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
  postConsultaPrivada
};
