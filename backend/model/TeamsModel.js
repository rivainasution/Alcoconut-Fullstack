import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Teams = db.define('teams',{
    name: DataTypes.STRING,
    nick: DataTypes.STRING,
    position: DataTypes.STRING,
    css: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});

export default Teams;

(async()=>{
    await db.sync();
})();