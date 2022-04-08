const express = require("express");

const bookRouter = require("./bookRouter");

const router = express.Router();

module.exports = (params) => {
  router.use("/books", bookRouter(params));
  return router;
};
