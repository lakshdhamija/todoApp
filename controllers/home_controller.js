const Todo = require('../models/todo');

module.exports.home = function(req, res){
        return res.render('home', {
            title: "Codeial | Home"
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