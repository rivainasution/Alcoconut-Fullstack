import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Location = db. define('location',{
    title: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});

export default Location;

(async() => {
    await db.sync();
}) ();