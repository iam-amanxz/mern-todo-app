require('dotenv').config()
import mongoose from 'mongoose'

async function initDatabase(cb: Function): Promise<void> {
  mongoose.connect(process.env.MONGODB_CONNECTION_URL!).then(() => {
    console.log('Connected to database...')
    cb()
  })

  mongoose.connection.on('error', (err) => {
    console.log(err)
  })
}

export { initDatabase }
