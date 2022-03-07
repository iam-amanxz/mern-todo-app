import express from 'express'
import { todoRouter } from '../todo/todo.router'

const router = express.Router()

router.get('/api', (_, res) => {
  res.json({
    message: 'hello from todo api',
  })
})

router.use('/api/todo', todoRouter)

export default router
