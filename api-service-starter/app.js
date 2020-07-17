let { NODE_ENV = 'development', PORT = 5000 } = process.env
PORT = process.env.NODE_ENV === 'test' ? 5001 : 5000;
const express = require('express')
const app = express()

// Application-level Middleware
if (NODE_ENV === 'development') app.use(require('morgan')('dev'))

// Routes
app.use('/', require('./api/routes'))

// Not Found Handler
app.use((req, res, next) => {
  const error = new Error(`Could not ${req.method} ${req.path}`)
  error.status = 404
  next(error)
})

// Error Handler
app.use((err, req, res, next) => {
  if (NODE_ENV === 'development') console.error(err)
  const { message, status } = err
  res.status(status).json({ status, message })
})

// Open Connection
const listener = () => console.log(`Listening on Port ${PORT}!`)
app.listen(PORT, listener)

if (process.env.NODE_ENV === 'test')  { module.exports = app }