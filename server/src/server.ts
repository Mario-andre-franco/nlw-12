import 'dotenv/config'
import jwt from '@fastify/jwt'
import multipart  from '@fastify/multipart'


import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(multipart)

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'spacetime'
})


app.register(authRoutes)
app.register(memoriesRoutes)
app.register(memoriesRoutes)


app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on port http://localhost:3333')
  })
