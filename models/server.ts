import express, {Application} from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';

import db from '../DB/db';

class Server{

    private app: Application;
    private port: String;
    private apiPaths = {
        usuarios : '/api/usuario' 
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes();
        this.ConnectionDB();
    }

    async ConnectionDB(){
        try {
          await db.authenticate();
          console.log('base de datos conectada');
            
        } catch (error) {
            throw new Error(' '+error);
        }
    }

    middlewares(){
        //activar cors
        this.app.use(cors());
        //lectura de body
        this.app.use(express.json());
        //servir carpeta publica
        this.app.use(express.static('public'));
        
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Escuchando el puerto ', this.port);
        });
    }
}

export default Server;