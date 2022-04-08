const BookValidator = require("../validators/bookSchema.js");
const BookService = require("../services/bookService.js");

const validation = async (req, res, next) => {
  try {
    await BookValidator.validateAsync({
      title: req.body.title,
      year: req.body.year,
      author: req.body.author,
      pageNumber: req.body.pageNumber,
      genre: req.body.genre,
      imageUrl: req.body.imageUrl,
      description: req.body.description,
      adult: req.body.adult,
    });

    next();
  } catch (err) {
    res.send({ data: err.details[0].message });
  }
};

module.exports = validation;
