//Dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Creating a Post class that extends the Model constructor. 
class Post extends Model {}

//Creating a post table
Post.init(
    {
      //Adding an id column to the post table that is an integer, cannot be null, is the primary key to the table and will auto increment.    
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },

      //Adding a title column to the post table that is a string and cannot be null.
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },

      //Adding a content column to the post table that is a body of text that cannot be null.
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },

      //Pulling in the id column from the user table as a foreign key.
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'post'
    }
  );
  
  module.exports = Post;