import { DataTypes} from "sequelize";
import myDb from "../DB/db";


const Usuario =  myDb.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique : true
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue : true
    }
});

 
export default Usuario;