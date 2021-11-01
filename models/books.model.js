const { Model, DataTypes } = require('sequelize')
const sequelize = require('./sequalize')

class Books extends Model {}

Model.init({
    id:{ 
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    author:{
        type: DataTypes.STRING,
        allowNull: false
    },
    category:{
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize,
    tableName: 'books',
    timestamps: false,
})

module.exports = Books