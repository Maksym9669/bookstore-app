const Joi = require("joi");

const schema = Joi.object({
  title: Joi.string().min(3).max(30).required(),

  year: Joi.number().integer().greater(1900).less(2022).required(),

  genre: Joi.string().valid(
    "Classics",
    "Detective",
    "Fantasy",
    "Horror",
    "Poetry",
    "Other"
  ),

  author: Joi.string().min(3).max(30).required(),

  pageNumber: Joi.number().integer().greater(0).less(5000).required(),

  imageUrl: Joi.string().min(3).max(100),

  description: Joi.string().min(3).max(200).required(),

  adult: Joi.boolean().valid(true),
});

module.exports = schema;
