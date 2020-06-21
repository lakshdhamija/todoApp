const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }
});

const Todo = mongoose.model('Todo', todoSchema); // .model signifies a collection
module.exports = Todo;