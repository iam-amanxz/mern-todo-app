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
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const _1 = require(".");
exports.controller = {
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const createTodoDto = req.body;
        try {
            const todo = yield _1.service.create(createTodoDto);
            res.status(201).json(todo);
        }
        catch (error) {
            console.log(error);
            if ((error === null || error === void 0 ? void 0 : error.name) === 'ValidationError') {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: 'Something went wrong.' });
        }
    }),
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const todos = yield _1.service.getAll(req.query.sortby, req.query.order);
            res.status(200).json(todos);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Something went wrong.' });
        }
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield _1.service.delete(req.params.id);
            res.status(204).json({ message: 'Success.' });
        }
        catch (error) {
            console.log(error);
            if ((error === null || error === void 0 ? void 0 : error.message) === 'Todo not found.') {
                return res.status(404).json({ message: error.message });
            }
            if ((error === null || error === void 0 ? void 0 : error.name) === 'CastError') {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: 'Something went wrong.' });
        }
    }),
    updateCompleted: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.query.completed) {
            return res.status(400).json({ message: 'Missing completed query.' });
        }
        try {
            const todo = yield _1.service.updateCompleted(req.params.id, req.query.completed);
            if (!todo) {
                return res.status(404).json({ message: 'Todo not found.' });
            }
            res.status(200).json(todo);
        }
        catch (error) {
            console.log(error);
            if ((error === null || error === void 0 ? void 0 : error.name) === 'CastError') {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ error });
        }
    }),
};
//# sourceMappingURL=todo.controller.js.map