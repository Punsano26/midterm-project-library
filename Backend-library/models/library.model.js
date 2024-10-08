const { DataTypes, DataType } = require("sequelize");
const sequelize = require("./db");

const Library = sequelize.define("library", {
  bookID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publicationYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  page: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  
});
Library.sync({ force: false })
  .then(() => {
    console.log("Table Created or already exists");
  })
  .catch((err) => {
    console.log("Error creating table:", err);
  });
module.exports = Library;
