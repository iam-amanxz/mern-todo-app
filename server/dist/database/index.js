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
exports.initDatabase = void 0;
require('dotenv').config();
const mongoose_1 = __importDefault(require("mongoose"));
function initDatabase(cb) {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose_1.default.connect(process.env.MONGODB_CONNECTION_URL).then(() => {
            console.log('Connected to database...');
            cb();
        });
        mongoose_1.default.connection.on('error', (err) => {
            console.log(err);
        });
    });
}
exports.initDatabase = initDatabase;
//# sourceMappingURL=index.js.map