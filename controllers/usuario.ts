import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
        
    const usuarios = await Usuario.findAll();

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


export const postUsuario = (req: Request, res: Response) => {
    const { body } = req;

    res.json({
        msg: 'POST usuario',
        body
    });
}


export const putUsuario = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'PUT usuarios',
        id
    });
}


export const deleteUsuario = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: 'DELETE usuarios',
        id
    });
}