//Dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const User = require('./user');
const Post = require('./post');

//Creating a Comment class that extends the Model Constructor
class Comment extends Model {}

//Creating a Comment table
Comment.init({
    //Adding an id column to the comment table that is an integer, cannot be null, is the primary key to the table and will auto increment. 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    //Adding a commentText column to the comment table that is a string and cannot be null. 
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },

    //Pulling in the id column from the user table as a foreign key.
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },

    //Pulling in the id column from the user table as a foreign key.
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Post,
            key: 'id'
        }
    }
}, {
    sequelize,
    underscored: true,
    modelName: 'comment'
});
module.exports = Comment;