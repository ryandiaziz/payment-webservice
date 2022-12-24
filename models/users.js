const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require ("../koneksi.js");

const User = koneksi.define('User', {
  // Model attributes are defined here
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    }, {
        freezeTableName : true
    });

    module.exports=User;