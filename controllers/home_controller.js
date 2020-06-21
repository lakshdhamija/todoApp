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

// controller to delete task from db
module.exports.deleteTodo = function(req, res){
    //get id from the url
    let id = req.params._id;
    //find contact in ddb using id and delete
    Todo.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting from db');
            return;
        }
    });
    //go back
    return res.redirect('back');
}