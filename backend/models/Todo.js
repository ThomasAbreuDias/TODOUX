const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  done: {type: Boolean, default: false},
 
  // User Reference
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('Todo', todoSchema)
