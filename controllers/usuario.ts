import { Request, Response } from "express";

export const getUsuarios = (req: Request, res: Response) =>{
    res.json({
        msg: 'GET usuarios'
    });
}

export const getUsuario = (req: Request, res: Response) =>{
    res.json({
        msg: 'GET usuario'
    });
}


export const postUsuario = (req: Request, res: Response) =>{
    const { body } = req;

    res.json({
        msg: 'POST usuario',
        body
    });
}


export const putUsuario = (req: Request, res: Response) =>{
    const { id }   = req.params;
    const { body } = req;

    res.json({
        msg: 'PUT usuarios',
        id
    });
}


export const deleteUsuario = (req: Request, res: Response) =>{
    const { id }   = req.params;
    
    res.json({
        msg: 'DELETE usuarios',
        id
    });
}