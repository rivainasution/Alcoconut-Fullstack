import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Services = db. define('services',{
    title: DataTypes.STRING,
    logo: DataTypes.STRING,
    description: DataTypes.STRING
},{
    freezeTableName: true
});

export default Services;

(async() => {
    await db.sync();
}) ();