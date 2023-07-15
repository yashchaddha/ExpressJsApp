var tasks=[
    {
        description:"Go to Gym",
        date:new Date().toISOString().split('T')[0],
        priority:"High"
    },
    {
        description:"Read Books",
        date:new Date().toISOString().split('T')[0],
        priority:"Regular"
    },
    {
        description:"Do More Open Source Contributions",
        date:new Date().toISOString().split('T')[0],
        priority:"Critical"
    }]

module.exports.todo=function(req,res){
    return res.render('todo',{
        todotasks:tasks
    })
}

module.exports.addTasks=function(req,res){
    tasks.push({
        description:req.body.taskDescription,
        Date: new Date().toISOString().split('T')[0],
        priority:"Regular"
    })
    return res.redirect('back');
}