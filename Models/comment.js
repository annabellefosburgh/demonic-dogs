//Dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
    commentText: {
        type: DataTypes.STRING,
        allowNull: false
    },

    //Pulling in the id column from the user table as a foreign key.
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },

    //Pulling in the id column from the user table as a foreign key.
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'comment'
});
module.exports = Comment;