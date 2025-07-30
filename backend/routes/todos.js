const express = require('express')
const Todo = require('../models/Todo')
const auth = require('../middleware/auth')

const router = express.Router()

// Obtenir les todos de l’utilisateur
router.get('/todos', auth, async (req, res) => {
  const todos = await Todo.find({ userId: req.userId })
  res.json(todos)
})

// Créer une todo
router.post('/todos', auth, async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    done: false,
    userId: req.userId
  })
  await todo.save()
  res.status(201).json(todo)
})

// Modifier une todo
router.put('/todos/:id', auth, async (req, res) => {
  const todo = await Todo.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  )
  res.json(todo)
})

// Supprimer une todo
router.delete('/todos/:id', auth, async (req, res) => {
  await Todo.findOneAndDelete({ _id: req.params.id, userId: req.userId })
  res.json({ message: 'Todo supprimée' })
})

module.exports = router
