import { Sequelize  } from 'sequelize';

const myDb = new Sequelize('cursonode','sa','123456',{
    host : "localhost",
    dialect : 'mssql'
});

export default myDb;