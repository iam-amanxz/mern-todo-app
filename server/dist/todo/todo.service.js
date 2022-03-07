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
exports.service = void 0;
const _1 = require(".");
exports.service = {
    create: (createTodoDto) => __awaiter(void 0, void 0, void 0, function* () {
        const todo = new _1.TodoModel(Object.assign({}, createTodoDto));
        try {
            return yield todo.save();
        }
        catch (error) {
            throw error;
        }
    }),
    getAll: (sortby, order) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (sortby && order) {
                return yield _1.TodoModel.find().sort({ [sortby]: order });
            }
            return yield _1.TodoModel.find().sort({ ['createdAt']: -1 });
        }
        catch (error) {
            throw error;
        }
    }),
    delete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const todo = yield _1.TodoModel.findById(id);
        if (!todo) {
            throw new Error('Todo not found.');
        }
        try {
            yield _1.TodoModel.findByIdAndDelete(id);
        }
        catch (error) {
            throw error;
        }
    }),
    updateCompleted: (id, completed) => __awaiter(void 0, void 0, void 0, function* () {
        console.log({ completed });
        try {
            return yield _1.TodoModel.findByIdAndUpdate(id, { completed: completed === 'true' ? true : false }, { new: true });
        }
        catch (error) {
            throw error;
        }
    }),
};
//# sourceMappingURL=todo.service.js.map