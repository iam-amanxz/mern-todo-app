import { Request, Response } from 'express'
import { service, CreateTodoDto } from '.'

export const controller = {
  create: async (req: Request, res: Response) => {
    const createTodoDto: CreateTodoDto = req.body

    try {
      const todo = await service.create(createTodoDto)
      res.status(201).json(todo)
    } catch (error: any) {
      console.log(error)
      if (error?.name === 'ValidationError') {
        return res.status(400).json({ message: error.message })
      }
      res.status(500).json({ message: 'Something went wrong.' })
    }
  },

  getAll: async (req: Request, res: Response) => {
    try {
      const todos = await service.getAll(
        req.query.sortby as string,
        req.query.order as string,
      )
      res.status(200).json(todos)
    } catch (error: any) {
      console.log(error)
      res.status(500).json({ message: 'Something went wrong.' })
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      await service.delete(req.params.id)
      res.status(204).json({ message: 'Success.' })
    } catch (error: any) {
      console.log(error)

      if (error?.message === 'Todo not found.') {
        return res.status(404).json({ message: error.message })
      }

      if (error?.name === 'CastError') {
        return res.status(400).json({ message: error.message })
      }
      res.status(500).json({ message: 'Something went wrong.' })
    }
  },

  updateCompleted: async (req: Request, res: Response) => {
    if (!req.query.completed) {
      return res.status(400).json({ message: 'Missing completed query.' })
    }
    try {
      const todo = await service.updateCompleted(
        req.params.id,
        req.query.completed as string,
      )

      if (!todo) {
        return res.status(404).json({ message: 'Todo not found.' })
      }

      res.status(200).json(todo)
    } catch (error: any) {
      console.log(error)

      if (error?.name === 'CastError') {
        return res.status(400).json({ message: error.message })
      }

      res.status(500).json({ error })
    }
  },
}
