import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const AboutUs = db. define('about',{
    title: DataTypes.STRING,
    description1: DataTypes.STRING,
    description2: DataTypes.STRING
},{
    freezeTableName: true
});

export default AboutUs;

(async() => {
    await db.sync();
}) ();