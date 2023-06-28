const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    loginPW = BCryptHelper.CheckPassword(`${userData.password}`, passwordHash);
    //Something here to check if the two values are correct to allow login
}

User.init(
    {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },

      username: {
          type: DataTypes.STRING,
          allowNull:false,
          unique: true
      },

      password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [8]
          }
      }
    },
    {
      hooks: {
          async beforeNew(newUserData) {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
              
          },

          async beforeEstablished(establishedUserData) {
              establishedUserData.password = await bcrypt.hash(establishedUserData.password, 10);
              return establishedUserData;
          }
      },

      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: 'user'
    }
  );
  
  module.exports = User;
