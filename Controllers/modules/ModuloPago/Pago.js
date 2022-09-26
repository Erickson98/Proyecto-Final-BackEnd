const db = require("../../../database/db");
const postPago = (req, res) => {
  try {
    console.log(req.body);
    const { email } = req.user;
    const { totalPago, autorizacionPago, estadoPaciente } = req.body;
    var BUSQUEDA_DE_TURNO = {};
    let usuario = {};
    const QUERYBUSQUEDADETURNO = `INSERT INTO turno(noRecord) VALUES (null);`;
    db.query(QUERYBUSQUEDADETURNO, (err, result) => {
      console.log("entre");
      if (err) {
        console.log(err);
      } else {
        BUSQUEDA_DE_TURNO = result;
        BUSQUEDA_DE_TURNO = String(BUSQUEDA_DE_TURNO.insertId);
        console.log(BUSQUEDA_DE_TURNO);

        const QUERYUSUARIO = `SELECT * FROM usuario WHERE email = '${email}' `;
        db.query(QUERYUSUARIO, (err, result) => {
          console.log("entre");
          if (err) {
            console.log(err);
          } else {
            usuario = result[0].usuario_id;
            console.log("dsds");
            const QUERY = `INSERT INTO consulta (noRecord_id, total_a_pagar,estado_del_paciente, autorizacion_de_pago, turno, id_usuario) VALUES (uuid(),'${totalPago}','${estadoPaciente}','${autorizacionPago}','${BUSQUEDA_DE_TURNO}','${usuario}');`;
            db.query(QUERY, (err) => {
              if (err) {
                console.log(err);
              } else {
                console.log("success");
                const QUERYBUSQUEDARECORD = `select noRecord_id from consulta where consulta.id_usuario = '${usuario}' and consulta.estado_del_paciente = 'abierto';`;
                console.log(QUERYBUSQUEDARECORD);
                db.query(QUERYBUSQUEDARECORD, (err, result) => {
                  if (err) {
                    console.log(err);
                  } else {
                    let record = result[0].noRecord_id;
                    const QUERYMEDICOCONSULTA = `INSERT INTO medicoConsulta (nodeRecord) VALUES ('${record}');`;
                    const QUERYPUNTODEVENTA = `INSERT INTO medicamento (id_producto,nodeRecord) VALUES (uuid(),'${record}');`;
                    const QUERYSELECTLASTELEMENT = `SELECT * FROM turno ORDER BY turno DESC LIMIT 1`;

                    db.query(QUERYMEDICOCONSULTA, (err, result) => {
                      if (err) {
                        console.log(err);
                      } else {
                        db.query(QUERYPUNTODEVENTA, (err, result) => {
                          if (err) {
                            console.log(err);
                          } else {
                            db.query(QUERYSELECTLASTELEMENT, (err, result) => {
                              if (err) {
                                console.log(err);
                              } else {
                                let lastElement = result[0].turno;
                                const QUERYUPDATELASTELEMENT = `UPDATE idcp.turno SET noRecord= '${record}' WHERE turno=${lastElement};`;
                                db.query(
                                  QUERYUPDATELASTELEMENT,
                                  (err, result) => {
                                    if (err) {
                                      console.log(err);
                                    } else {
                                      console.log("success");
                                    }
                                  }
                                );
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });

    console.log(req.user);
    return res.send("registros agregados");
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  postPago
};
