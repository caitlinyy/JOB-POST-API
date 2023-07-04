// const express = require('express')
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import connectDB from './db/connect.js'

//routers
import authRouter from './routes/authRoutes.js'
import jobRouter from './routes/jobRoutes.js'

//middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

const app = express()

const port = process.env.PORT || 4000

// http://localhost:5000/
app.get('/api/v1/health', (req, res) => {
  // throw new Error('there is an error')
  res.send('ok')
})

//router url一定有的
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobRouter)

//位置不能在前
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

// app.listen(port, () => {
//   console.log(`server is running on port ${port}`);
// })

//无法连接数据库问题 异步
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    })
  } catch (err) {
    console.log(err);
  }
}
startServer()