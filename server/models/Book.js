const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class Book extends Model {}

Book.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pageNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adult: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    genre: {
      type: DataTypes.ENUM({
        values: [
          "Classics",
          "Detective",
          "Fantasy",
          "Horror",
          "Poetry",
          "Other",
        ],
      }),
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: "books",
  }
);

module.exports = Book;
