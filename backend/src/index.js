import Fastify from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify({
  logger: true
})

// Register CORS to allow frontend requests
await fastify.register(cors, {
  origin: true // Allow all origins in development
})

// Define a sample route
fastify.get('/', async (request, reply) => {
  return { message: 'Hello from Fastify Backend!' }
})

// Health check endpoint
fastify.get('/health', async (request, reply) => {
  return { status: 'ok' }
})

// API route example
fastify.get('/api/data', async (request, reply) => {
  return {
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ]
  }
})

// Run the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
