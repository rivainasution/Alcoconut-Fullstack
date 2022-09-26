import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Product = db.define('product',{
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    harga: DataTypes.STRING,
    image: DataTypes.STRING,
    code: DataTypes.STRING,
    css: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});

export default Product;

(async()=>{
    await db.sync();
})();