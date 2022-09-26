const { CompactSign } = require("jose");
const db = require("../../../database/db");
const searchTurno = (req, res) => {
  try {
    const QUERY = `SELECT turno FROM turno ORDER BY turno DESC LIMIT 1;`;
    db.query(QUERY, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        return res.status(200).json({
          message: result
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
  searchTurno
};
