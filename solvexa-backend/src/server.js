import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoutes from './routes/contact.js'
import newsletterRoutes from './routes/newsletter.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  methods: ['GET', 'POST'],
}))
app.use(express.json())

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'Solvexa Backend API', timestamp: new Date() })
})

// Routes
app.use('/api/contact', contactRoutes)
app.use('/api/newsletter', newsletterRoutes)

app.listen(PORT, () => {
  console.log(`🚀 Solvexa Backend server running on http://localhost:${PORT}`)
})
