const Sequelize=require('sequelize');

const sequelize = new Sequelize(process.env.DB_Name || 'chat-application', process.env.DB_USERNAME || 'aiden', process.env.DB_PASSWORD || 'y.7089407712',{
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost'
})
module.exports=sequelize