"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const myDb = new sequelize_1.Sequelize('cursonode', 'sa', '123456', {
    host: "localhost",
    dialect: 'mssql'
});
exports.default = myDb;
//# sourceMappingURL=db.js.map