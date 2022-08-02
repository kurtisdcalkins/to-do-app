function changeTasks(text) {

    // ------- This section handles adding tasks to task list --------
    // If nothing is typed into the input, it will not submit a task
    if (text === '') {
        return;
    }

    // Select the task-list section and save it into a variable
    const taskList = document.querySelector('#tasks');
    // Create a div and give it a class of 'task'
    let taskComponent = document.createElement('div');
    taskComponent.setAttribute('class', 'task');

    // Create an input element, assign the input text to the value, and then append it to the taskComponent Div
    let taskItem = document.createElement('input');
    taskItem.setAttribute('value', text);
    taskItem.setAttribute('readonly', 'readonly');
    taskItem.classList = 'task-item';
    taskComponent.appendChild(taskItem);
    taskComponent.setAttribute('key', text);

    // Create an input element, assign the input text to the value, and then append it to the taskComponent Div
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    taskComponent.prepend(checkBox);

    // Create the edit button to go along with the task input
    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    taskComponent.appendChild(editButton);
    // Create the delete button to go along with the task input
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList = 'delete-item-button';
    taskComponent.appendChild(deleteButton);

    // Appends the whole div to the 'task-list' section
    taskList.appendChild(taskComponent);



    // ------ This section creats the functionality for the Edit and Delete buttons ------
    // Add event listener to the delete button to remove the task div
    deleteButton.addEventListener('click', (e) => {
        taskList.removeChild(taskComponent);
    });

    // 
    // Add event listener to the edit button to allow task editing
    editButton.addEventListener('click', (e) => {
        taskItem.removeAttribute('readonly');
        taskItem.focus();
        // Change the button to a 'Save' button which sets the item to read-only
        editButton.innerHTML = 'Save';
        editButton.addEventListener('click', (e) => {
            taskItem.setAttribute('readonly', 'readonly');
            // Changes the button back into an 'Edit' button
            editButton.innerHTML = 'Edit';
        });
    });




    // ----- This section creates checkbox functionality -----
    // Assign a variable to the completed section
    const completedDiv = document.querySelector('.completed');

    // Check-off list item
    checkBox.addEventListener('change', (e) => {
        if (e.target.checked) {
            completedDiv.appendChild(taskComponent);
        } else {
            taskList.appendChild(taskComponent);
        }
    })
}





// ----- This section creates the form event listener and functionality -----
// Selects the form and input and assigns them to variables
const inputValue = document.querySelector('#new-task-input');
const form = document.querySelector('.task-form');

// Focuses into the input field
inputValue.focus();

// Creates an event listener on submit.
form.addEventListener('submit', (event) => {
    // Prevents page refresh on form submission
    event.preventDefault();
    // Calls the addTask function with the submitted input text as the parameter
    changeTasks(inputValue.value);
    // Resets the input field to blank and then re-focuses on the field
    inputValue.value = '';
    inputValue.focus();
});


