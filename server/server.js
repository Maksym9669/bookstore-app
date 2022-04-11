const express = require("express");
const app = express();
const sequelize = require("./database");
const cors = require("cors");
const Book = require("./models/Book");
const router = require("./routes/index.js");
const multer = require("multer");
const path = require("path");

const upload = require("./multerSetup");
const handler = require("./multerHandler");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.resolve(__dirname + "/public")));

sequelize.sync().then(() => console.log("Db is ready"));

app.get("/", (req, res) => res.send("Hi from API"));
app.use("/api/v1/", router());

app.post("/upload", upload.any(), handler);

app.listen(8050, () => {
  console.log("Server is listening on port 8050");
});
