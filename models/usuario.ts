import { DataTypes } from "sequelize";
import myDb from "../DB/db";


const Usuario =  myDb.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
});
 
 
export default Usuario;