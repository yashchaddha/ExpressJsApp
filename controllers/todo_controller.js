module.exports.todo=function(req,res){
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
    
    console.log(res.body);

    return res.render('todo',{
        todotasks:tasks
    })
}