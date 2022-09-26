import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Contact = db. define('contact',{
    title: DataTypes.STRING,
    logo: DataTypes.STRING,
    description: DataTypes.STRING
},{
    freezeTableName: true
});

export default Contact;

(async() => {
    await db.sync();
}) ();