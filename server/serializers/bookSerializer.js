module.exports.bookExists = () => {
  return {
    status: 0,
    error: {
      fields: {
        title: "NOT_UNIQUE",
      },
      code: "MOVIE_EXISTS",
    },
  };
};

module.exports.bookDeletedSuccessfully = () => {
  return {
    status: 1,
    message: "Book is deleted successfully!",
  };
};

module.exports.bookNotFound = (id) => {
  return {
    status: 0,
    error: {
      fields: {
        id,
      },
      code: "MOVIE_NOT_FOUND",
    },
  };
};

module.exports.showBook = (movie) => {
  return {
    data: movie,
    status: 1,
  };
};

module.exports.bookNotFound = (id) => {
  return {
    status: 0,
    error: {
      fields: {
        id,
      },
      code: "BOOK_NOT_FOUND",
    },
  };
};

module.exports.bookUpdatedSuccessfully = (movie) => {
  return {
    data: movie,
    message: "Book is updated successfully!",
    status: 1,
  };
};
