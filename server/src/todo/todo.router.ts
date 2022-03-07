import express from 'express'
import { controller } from '.'

const router = express.Router()

router.post('/', controller.create)
router.get('/', controller.getAll)
router.delete('/:id', controller.delete)
router.patch('/:id', controller.updateCompleted)

export const todoRouter = router
