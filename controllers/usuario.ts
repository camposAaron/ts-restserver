import { Request, Response } from "express";
import { Op } from "sequelize";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
        
    const usuarios = await Usuario.findAll({
        where : { estado : 1}
    });

        res.json({
            usuarios
        });


}

export const getUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if (usuario) {
        res.json({
            usuario
        });
    } else {
        res.status(404).json({ msg: `El usuario con id ${id} no existe` });
    }
}


export const postUsuario = async(req: Request, res: Response) => {
    
    const { body } = req;
    console.log(body);
    
    try{
        const usuario = await Usuario.create(body);
        res.json(usuario);

    }catch(error){
        console.log(error);
    }   
}


export const putUsuario = async(req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    
    const Nupdated = await Usuario.update(body, {
        where : { id }
    });

    res.json({
        msg : `${Nupdated} registro(s) actualizado(s).`
    });
}


export const deleteUsuario = async(req: Request, res: Response) => {
    const { id } = req.params;
    
    const rowsAffected = await Usuario.update( {estado : 0} , {
        where : { 
            [Op.and] : [{id}, {estado : 1}]
        }
    });

    if(rowsAffected[0] !== 0){
        res.json({
            msg : `EL registro ha sido eliminado ${rowsAffected[0]} `
        });
    }else{
        res.status(400).json({
            msg: 'El registro no se puede eliminar`'
        });
    }
        
}