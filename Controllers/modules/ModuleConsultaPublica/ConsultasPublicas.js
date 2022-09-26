const db = require("../../../database/db");
const postConsultaPublica = (req, res) => {
  try {
    const { Nombre, Apellido, Direccion, Seguro, email } = req.body;
    const QUERY = `INSERT INTO usuario (usuario_id,nombre,apellido,direccion,seguro,email) VALUES (uuid(),'${Nombre}','${Apellido}','${Direccion}','${Seguro}','${email}');`;
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
  postConsultaPublica
};
