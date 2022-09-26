import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const DetailCM = db. define('detailcm',{
    title: DataTypes.STRING,
    code: DataTypes.STRING,
    type: DataTypes.STRING,
    harga: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    csscode: DataTypes.STRING,
    csstype: DataTypes.STRING,
    cssharga: DataTypes.STRING,
    csslocation: DataTypes.STRING,
    rating: DataTypes.STRING
},{
    freezeTableName: true
});

export default DetailCM;

(async() => {
    await db.sync();
}) ();