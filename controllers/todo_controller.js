const TodoLists=require('../models/todo');


//get task details from details
module.exports.todo=function(req,res){
    TodoLists.find({}).then(todoTasks=>{
        return res.render('todo',{
            todotasks:todoTasks
        })
    })
}

//add tasks to database
module.exports.addTasks=function(req,res){
    TodoLists.create({
        description:req.body.taskDescription,
        date: req.body.datepicker,
        priority:req.body.priority,
        category:req.body.category,
        completed:false
    }).then(newTask=>{
        return res.redirect('back');
    }).catch(error=>{
        console.log(error);
        return;
    })
}

//delete task from database
module.exports.deleteTasks=function(req,res){
    let id=req.query.id;
    TodoLists.findByIdAndDelete(id).then(todotasks=>{
        return res.redirect('back')})
}
