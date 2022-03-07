import { Schema, model } from 'mongoose'

export interface Todo {
  title: string
  completed: boolean
  endDate: string
}

const schema = new Schema<Todo>(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    endDate: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)

export const TodoModel = model<Todo>('Todo', schema)
