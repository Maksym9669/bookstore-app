const BookService = require("../services/bookService.js");
const BookSerializer = require("../serializers/bookSerializer.js");
const validation = require("../middleware/validation");
const fs = require("fs");

module.exports.insertMovie = async (req, res) => {
  // console.log("REQUEST FROM API: ", req.body);

  // const { error } = validation.validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  // const result = await validation.validateAsync(req.body);
  // console.log(result);
  let [book, doesExist] = await BookService.insert(req.body);
  if (doesExist) {
    res.send(BookSerializer.bookExists());
  } else {
    res.send(book);
  }
};

module.exports.getMovies = async (req, res) => {
  const movies = await BookService.showAll();
  return res.send(movies);
};

module.exports.deleteMovie = async (req, res) => {
  const movie = await BookService.delete(req.params.id);
  if (movie) {
    return res.send(BookSerializer.bookDeletedSuccessfully(movie.id));
  } else {
    return res.status(404).send(BookSerializer.bookNotFound(req.params.id));
  }
};

module.exports.showBook = async (req, res) => {
  const book = await BookService.show(req.params.id);

  if (book) {
    return res.send(BookSerializer.showBook(book));
  } else {
    return res.status(404).send(BookSerializer.bookNotFound(req.params.id));
  }
};

module.exports.updateMovie = async (req, res) => {
  const book = await BookService.update(req.body, req.params.id);
  if (book) {
    return res.send(BookSerializer.bookUpdatedSuccessfully(book));
  } else {
    return res.status(404).send(BookSerializer.bookNotFound(req.params.id));
  }
};
