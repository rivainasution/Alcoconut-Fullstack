import {Sequelize} from "sequelize";

const db = new Sequelize('alcoffee','root','',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;