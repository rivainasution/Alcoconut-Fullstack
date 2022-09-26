import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const CoffeePowderM = db.define('coffeepowderm',{
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});

export default CoffeePowderM;

(async()=>{
    await db.sync();
})();