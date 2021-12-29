import { Sequelize  } from 'sequelize';

const myDb = new Sequelize('cursonode','sa','123456',{
    host : "localhost",
    dialect : 'mssql'
});

(async ()=>{
    await myDb.sync({ force : true });
    console.log('todos los modelos han sido sincronizados!');
})

export default myDb;