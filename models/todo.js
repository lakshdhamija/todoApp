const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type:String,
        required:true
    },
      date: {
        type:Date,
        required:true
    },
      category:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Todo = mongoose.model('Todo', todoSchema); // .model signifies a collection
module.exports = Todo;