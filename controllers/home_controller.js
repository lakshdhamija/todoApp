const Todo = require('../models/todo');

module.exports.home = function(req, res){
    Todo.find({}, function(err, todos){
        if(err){
            console.log('error in fetching todos from db');
            return;
        }
        return res.render('home', { 
            title: 'Todo List',
            todo_list: todos
        });
    });
}

//controller to add task in db
module.exports.createTask = function(req, res){ 
    Todo.create(req.body, function(err, newTodo){
        if(err){
            console.log('Error in creating Todo');
            return;
        }
        console.log('*********', newTodo);
        return res.redirect('back');
    });
}