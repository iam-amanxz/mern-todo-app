"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    endDate: { type: String, required: true },
}, {
    timestamps: true,
});
exports.TodoModel = (0, mongoose_1.model)('Todo', schema);
//# sourceMappingURL=todo.schema.js.map