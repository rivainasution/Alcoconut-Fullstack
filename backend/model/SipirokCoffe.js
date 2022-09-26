import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const SipirokCoffee = db.define('sipirokcoffee',{
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});

export default SipirokCoffee;

(async()=>{
    await db.sync();
})();