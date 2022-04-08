const express = require("express");
const BookController = require("../controllers/bookController.js");
const validation = require("../middleware/validation.js");
// const multer = require("multer");

// const upload = multer({ dest: "public/files" });

const router = express.Router();

module.exports = (params) => {
  router.post("/", validation, BookController.insertMovie);

  router.delete("/:id", BookController.deleteMovie);
  router.get("/:id", BookController.showBook);
  router.patch("/:id", validation, BookController.updateMovie);
  router.get("/", BookController.getMovies);
  //   router.post(
  //     "/import",
  //     upload.single("movies.txt"),
  //     BookController.importMovies
  //   );

  return router;
};
