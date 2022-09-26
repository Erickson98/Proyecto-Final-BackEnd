const db = require("../../../database/db");
var groups = [];
const getData = (req, res) => {
  try {
    const QUERY = `select * from consulta join turno on consulta.noRecord_id= turno.noRecord order by turno.turno asc;`;

    db.query(QUERY, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        var consulta = result;
        db.query(QUERY, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            consulta.map((x) => {
              const USUARIO = `select nombre as Nombre, apellido as Apellido from usuario where usuario_id = '${x.id_usuario}'`;
              db.query(USUARIO, (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  if (result === undefined || result.length <= 0) {
                  } else {
                    groups = result;
                    return groups;
                  }
                }
              });
            });
            let s = groups[0];

            consulta[0].Nombre = groups[0]?.Nombre;
            consulta[0].Apellido = groups[0]?.Apellido;

            return res.status(200).json({
              data: { ...consulta }
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
  getData
};
