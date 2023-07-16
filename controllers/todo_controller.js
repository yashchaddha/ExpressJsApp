
const TodoLists=require('../models/todo');

var tasks=[
    {
        description:"Go to Gym",
        date:new Date().toISOString().split('T')[0],
        priority:"High",
        category:"Personal"
    },
    {
        description:"Read Books",
        date:new Date().toISOString().split('T')[0],
        priority:"Regular",
        category:"Personal"
    },
    {
        description:"Do More Open Source Contributions",
        date:new Date().toISOString().split('T')[0],
        priority:"Critical",
        category:"Work"
    }]

module.exports.todo=function(req,res){
    TodoLists.find({}).then(todoTasks=>{
        return res.render('todo',{
            todotasks:todoTasks
        })
    })
}

module.exports.addTasks=function(req,res){
    TodoLists.create({
        description:req.body.taskDescription,
        date: req.body.datepicker,
        priority:req.body.priority,
        category:req.body.category
    }).then(newTask=>{
        console.log(newTask);
        return res.redirect('back');
    }).catch(error=>{
        console.log(error);
        return;
    })
}