$(document).ready(function() {
    for(let i=0;i<todoItems.length;i++){
        console.log(todoItems[i].querySelector('#completed').textContent);
    }
});

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
    for (const item of selectedTasks) {
        //sending ajax request to update pending task status
            $.ajax({
                type:'post',
                url:'/todolist/update-task/?id='+item,
                success:function(){
                    console.log("Updated the value of this task");
                },
                error:function(error){
                    console.log(error);
                    window.history.back();
                }
            })
      }
}



//using the Ajax request to delete the items checked
function deleteChecked(){
    var checkedTasks=[...selectedTasks];
    for(let i=0;i<checkedTasks.length;i++){
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