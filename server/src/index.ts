require('dotenv').config()
import express from 'express'
import cors from 'cors'
import { initDatabase } from './database'
import router from './router'

export const app = express()

app.use(cors({ origin: process.env.CLIENT_URL }))
app.use(express.json())
app.use(router)

const PORT = process.env.SERVER_PORT || 3333

initDatabase(() => {
  app.listen(PORT, () => {
    console.log('Server started at port ' + PORT)
  })
})
