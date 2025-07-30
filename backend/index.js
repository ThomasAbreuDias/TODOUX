require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const authRoutes = require('./routes/auth')
const todoRoutes = require('./routes/todos')

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api', authRoutes)
app.use('/api', todoRoutes)

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connecté')
    app.listen(PORT, () => console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`))
  })
  .catch(err => console.error('Erreur MongoDB', err))
