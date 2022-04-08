const express = require("express");
const app = express();
const sequelize = require("./database");
const Book = require("./models/Book");
const router = require("./routes/index.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => console.log("Db is ready"));

app.get("/", (req, res) => res.send("Hi from API"));
app.use("/api/v1/", router());

app.listen(8050, () => {
  console.log("Server is listening on port 8050");
});
