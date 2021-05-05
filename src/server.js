const express = require("express");
const cors = require("cors");
const db = require("./db");
const services = require("./services");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", services);
const port = process.env.PORT || 5000;

// target /db/index.js
// '.sync' is for 'Modal Synchronization'
// ({force: true}) => to drop the table
db.sequelize.sync({force: true}).then(() => { 
  app.listen(port, () => console.log("server is running: " + port));
  app.on("error", (error) =>
    console.info(" ❌ Server is not running due to : ", error)
  );

})
