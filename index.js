require("dotenv").config();

const app = require("./app.js");
// const sequelize = require("./database/database.js");

// require("./models/Person.js");

const main = async () => {
  try {
    // await sequelize.sync({ force: false });
    app.listen(process.env.SERVER_PORT);
    console.log(process.env.SERVER_PORT);
  } catch (error) {
    console.log(error);
  }
};

main();
