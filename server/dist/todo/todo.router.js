"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require("express"));
const _1 = require(".");
const router = express_1.default.Router();
router.post('/', _1.controller.create);
router.get('/', _1.controller.getAll);
router.delete('/:id', _1.controller.delete);
router.patch('/:id', _1.controller.updateCompleted);
exports.todoRouter = router;
//# sourceMappingURL=todo.router.js.map