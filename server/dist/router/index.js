"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_router_1 = require("../todo/todo.router");
const router = express_1.default.Router();
router.get('/api', (_, res) => {
    res.json({
        message: 'hello from todo api',
    });
});
router.use('/api/todo', todo_router_1.todoRouter);
exports.default = router;
//# sourceMappingURL=index.js.map