"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database");
const router_1 = __importDefault(require("./router"));
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)({ origin: process.env.CLIENT_URL }));
exports.app.use(express_1.default.json());
exports.app.use(router_1.default);
const PORT = process.env.SERVER_PORT || 3333;
(0, database_1.initDatabase)(() => {
    exports.app.listen(PORT, () => {
        console.log('Server started at port ' + PORT);
    });
});
//# sourceMappingURL=index.js.map