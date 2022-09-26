const db = require("../../../database/db");
const ConsultaTabla = (req, res) => {
  try {
    console.log(req.user);

    const email = req.user.email;
    const SEARCHUSUARIO = `select usuario_id from usuario where email='${email}';`;

    db.query(SEARCHUSUARIO, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        const usuario_id = result[0].usuario_id;
        console.log(usuario_id);
        const CONSULTA = `select * from consulta where id_usuario='${usuario_id}' and consulta.estado_del_paciente = 'abierto';`;
        console.log(CONSULTA);
        db.query(CONSULTA, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
            return res.status(200).json({
              message: result
            });
          }
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  ConsultaTabla
};
