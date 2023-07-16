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
var prioritySelect = document.getElementById('priority');
    var todoItems = document.getElementsByClassName('todo-item');

    prioritySelect.addEventListener('change', function() {
        var selectedPriority = prioritySelect.value;

        for (var i = 0; i < todoItems.length; i++) {
            var todoItem = todoItems[i];

            if (selectedPriority === 'Regular') {
                todoItem.style.backgroundColor = 'Green';
            } else if (selectedPriority === 'High') {
                todoItem.style.backgroundColor = 'orange';
            } else {
                todoItem.style.backgroundColor = 'red'; 
            }
        }
    });
