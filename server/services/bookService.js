const Book = require("../models/Book.js");

class BookService {
  static async insert(params) {
    console.log("insert from book service");
    let doesExist = false;
    let newBook = null;
    const oldBook = await Book.findOne({ where: { title: params.title } });
    if (oldBook) {
      doesExist = true;
    } else {
      newBook = await Book.create({
        title: params.title,
        year: params.year,
        author: params.author,
        pageNumber: params.pageNumber,
        genre: params.genre,
        imageUrl: params.imageUrl,
        description: params.description,
        adult: params.adult,
      });
    }

    console.log("RESULT: ", newBook);
    return [newBook, doesExist];
  }

  static async showAll() {
    let books = await Book.findAll();
    return books;
  }

  static async delete(id) {
    const book = await Book.findOne({ where: { id: id } });
    if (book) {
      await book.destroy();
    }

    return book;
  }

  static async show(id) {
    const book = await Book.findOne({ where: { id: id } });
    return book;
  }

  static async update(body, id) {
    const movie = await Book.findOne({ where: { id: id } });

    movie.set({
      title: body.title,
      year: body.year,
      author: body.author,
      pageNumber: body.pageNumber,
      genre: body.genre,
      imageUrl: body.imageUrl,
      description: body.description,
      adult: body.adult,
    });

    await movie.save();

    return movie;
  }
}

module.exports = BookService;
