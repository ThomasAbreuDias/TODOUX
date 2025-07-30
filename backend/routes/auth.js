const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const router = express.Router()

// REGISTER
router.post('/register', async (req, res) => {
  const { email, password } = req.body
  try {
    const hashed = await bcrypt.hash(password, 10)
    const user = new User({ email, password: hashed })
    await user.save()
    res.status(201).json({ message: 'Utilisateur créé' })
  } catch (err) {
    res.status(400).json({ error: 'Utilisateur déjà existant ou invalide' })
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Identifiants invalides' })
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
  res.json({ token })
})

module.exports = router
