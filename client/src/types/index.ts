// dtos
export type CreateTodoDto = {
  title: string
  endDate: Date
}

// models
export interface Todo {
  _id: string
  title: string
  completed: boolean
  endDate: string
  createdAt: string
  updatedAt: string
}
