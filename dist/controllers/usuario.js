"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const sequelize_1 = require("sequelize");
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll({
        where: { estado: 1 }
    });
    res.json({
        usuarios
    });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        res.json({
            usuario
        });
    }
    else {
        res.status(404).json({ msg: `El usuario con id ${id} no existe` });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    console.log(body);
    try {
        const usuario = yield usuario_1.default.create(body);
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const Nupdated = yield usuario_1.default.update(body, {
        where: { id }
    });
    res.json({
        msg: `${Nupdated} registro(s) actualizado(s).`
    });
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rowsAffected = yield usuario_1.default.update({ estado: 0 }, {
        where: {
            [sequelize_1.Op.and]: [{ id }, { estado: 1 }]
        }
    });
    if (rowsAffected[0] !== 0) {
        res.json({
            msg: `EL registro ha sido eliminado ${rowsAffected[0]} `
        });
    }
    else {
        res.status(400).json({
            msg: 'El registro no se puede eliminar`'
        });
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuario.js.map