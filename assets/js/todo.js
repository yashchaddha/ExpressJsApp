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
