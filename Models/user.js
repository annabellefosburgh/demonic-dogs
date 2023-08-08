//Dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
var db = require('../Models')
const bcrypt = require('bcrypt');
const saltRounds = 10

//Creating User class that extends the Model constructor
class User extends Model {
   
}

//Creating a user table
User.init(
    {
      //Adding an id column to the user table that is an integer, cannot be null, is the primary key to the table and will auto increment.  
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },

      //Adding a username column to the user table that is a string, cannot be null, and must be unique to every other username instance.
      username: {
          type: DataTypes.STRING,
          allowNull:false,
          unique: true
      },

      //Adding a password column to the user table that is a string, cannot be null, and must be a minimum of 8 characters.
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [8]
          }
      }
    },
    //Hook functions to perform before and after the sequelize call is executed.
    {
      hooks: {
          async beforeCreate(newUserData) {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
              
          },

          async beforeUpdate(establishedUserData) {
              establishedUserData.password = await bcrypt.hash(establishedUserData.password, 10);
              return establishedUserData;
          }
      },

      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: 'User'
    }
  );
  
  module.exports = User;
