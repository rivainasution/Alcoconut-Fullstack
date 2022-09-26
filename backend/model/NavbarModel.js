import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const NavbarAlbum = db.define('navbar',{
    name: DataTypes.STRING,
    css: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});

export default NavbarAlbum;

(async()=>{
    await db.sync();
})();