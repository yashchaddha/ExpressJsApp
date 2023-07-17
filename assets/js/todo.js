const datepicker = document.getElementById('datepicker');

// Get the current date
const currentDate = new Date();
const year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
if (month < 10) {
  month = '0' + month; // Pad month with leading zero if necessary
}
const day = currentDate.getDate();
const minDate = `${year}-${month}-${day}`;
console.log(minDate);
// Set the minimum date for the date picker
datepicker.setAttribute('min',minDate)


//providing color to Tasks according to their priority
var todoItems = document.getElementsByClassName('todo-item');


function changeColor(selectedPriority,i) {
        if (selectedPriority === 'Regular') {
            todoItems[i].style.backgroundColor = 'lightgreen';
        } else if (selectedPriority === 'High') {
            todoItems[i].style.backgroundColor = 'rgb(237, 125, 88)';
        } else {
            todoItems[i].style.backgroundColor = 'rgb(247, 47, 47)'; 
        }
}

for (let i = 0; i < todoItems.length; i++) {
    var prioritySelect = document.getElementById('priorities');
    var selectedPriority = todoItems[i].querySelector('#priorities').textContent;
    console.log(selectedPriority,i)
    changeColor(selectedPriority,i);
}
//collecting all the ids of tasks currently checked by the user in Set
let selectedTasks = new Set();


function checkedOrNot(){
    let cb=document.querySelectorAll('#delete-check');
    let description=document.querySelectorAll('#description');
    let date=document.querySelectorAll('#date');

    for(let i=0;i<description.length;i++){

        var taskId=cb[i].getAttribute('uid');
        if(cb[i].checked==true){
            description[i].style.textDecoration='line-through';
            date[i].style.textDecoration='line-through';
            selectedTasks.add(taskId);
        }
        else{
            description[i].style.textDecoration='none';
            date[i].style.textDecoration='none';
            selectedTasks.delete(taskId);
        }
    }
    // console.log(selectedTasks)
}



//using the Ajax request to delete the items checked
function deleteChecked(){
    var checkedTasks=[...selectedTasks];
    for(let i=0;i<checkedTasks.length;i++){
        console.log("entered in loop");
        $.ajax({
            type:'get',
            url:'/todolist/delete-task/?id='+checkedTasks[i],
            success:function(){
                console.log("All checked Tasks deleted successfully from database")
                window.history.back();
            },
            error:function(err){
                console.log(err);
            }
        })
    }

}