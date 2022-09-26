import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const AboutProduct = db. define('aboutproduct',{
    title: DataTypes.STRING,
    description: DataTypes.STRING
},{
    freezeTableName: true
});

export default AboutProduct;

(async() => {
    await db.sync();
}) ();