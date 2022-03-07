import { TodoModel, Todo, CreateTodoDto } from '.'

export const service = {
  create: async (createTodoDto: CreateTodoDto): Promise<Todo> => {
    const todo = new TodoModel({ ...createTodoDto })

    try {
      return await todo.save()
    } catch (error) {
      throw error
    }
  },

  getAll: async (sortby: string, order: string): Promise<Todo[]> => {
    try {
      if (sortby && order) {
        return await TodoModel.find().sort({ [sortby]: order })
      }
      return await TodoModel.find().sort({ ['createdAt']: -1 })
    } catch (error) {
      throw error
    }
  },

  delete: async (id: string): Promise<void> => {
    const todo = await TodoModel.findById(id)

    if (!todo) {
      throw new Error('Todo not found.')
    }

    try {
      await TodoModel.findByIdAndDelete(id)
    } catch (error) {
      throw error
    }
  },

  updateCompleted: async (
    id: string,
    completed: string,
  ): Promise<Todo | null> => {
    console.log({ completed })

    try {
      return await TodoModel.findByIdAndUpdate(
        id,
        { completed: completed === 'true' ? true : false },
        { new: true },
      )
    } catch (error) {
      throw error
    }
  },
}
