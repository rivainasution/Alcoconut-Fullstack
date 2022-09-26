import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const MandhelingCoffee = db.define('mandhelingcoffee',{
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});

export default MandhelingCoffee;

(async()=>{
    await db.sync();
})();