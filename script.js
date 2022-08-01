function addTask(text) {
    // Select the task-list section and save it into a variable
    const taskList = document.querySelector('.task-list');
    // Create a div and give it a class of 'task'
    let taskComponent = document.createElement('div');
    taskComponent.setAttribute('class', 'task');

    // Create an input element, assign the input text to the value, and then append it to the taskComponent Div
    let taskItem = document.createElement('input');
    taskItem.setAttribute('value', text);
    taskComponent.appendChild(taskItem);

    // Create the edit button to go along with the task input
    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    taskComponent.appendChild(editButton);
    // Create the delete button to go along with the task input
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    taskComponent.appendChild(deleteButton);

    // Appends the whole div to the 'task-list' section
    taskList.appendChild(taskComponent);
}

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
    addTask(inputValue.value);
    // Resets the input field to blank and then re-focuses on the field
    inputValue.value = '';
    inputValue.focus();
});


