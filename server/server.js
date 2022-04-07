const express = require("express");
// const sequelize = require("./database");
// const syncModels = require("./models/sequelize/index");
// const router = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sequelize
//   .sync()
//   .then(() => console.log("Db is ready"))
//   .then(() => syncModels(sequelize));

// app.use("/api/v1/", router());

app.get("/", (req, res) => res.send("Hi from API"));

app.listen(8050, () => {
  console.log("Server is listening on port 8050");
});
