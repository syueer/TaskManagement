
let tasks = new TaskManager()

//Selector
const submitButton = document.querySelector('#submitButton')
const newTaskName = document.querySelector('#taskName');
const taskNameErr = document.querySelector('#taskNameErr')
const newTaskDescription = document.querySelector('#taskDescription');
const taskDescriptionErr = document.getElementById('taskDescriptionErr')
// const newAssignedName = document.querySelector('#assignedName');

const newDueDate = document.querySelector('#dueDate');
const dateErr = document.querySelector('#dateErr')
// const newStatus = document.querySelector('#status');
// const alert = document.querySelector('#alertInfo')
// const addTask = document.querySelector('#addTask')

document.querySelector('#alertInfo').style.display = 'none'
taskNameErr.style.display = 'none';
taskDescriptionErr.style.display = 'none';
dateErr.style.display = 'none'

const validateTaskName = () => {
  if (newTaskName.value.length === 0) {
    newTaskName.style.border = '1px solid red';
    return false
  } else if (newTaskName.value.length < 8) {
    taskNameErr.style.display = 'block';
    newTaskName.style.border = '1px solid red';
    return false
  } else {
    taskNameErr.style.display = 'none';
    newTaskName.style.border = '1px solid #ced4da';
    return true
  }
}
newTaskName.onblur = () => {
  validateTaskName()
}

//Description validation
const validateDescription = () => {
  if (newTaskDescription.value.length === 0) {
    newTaskDescription.style.border = '1px solid red';
    return false
  } else if (newTaskDescription.value.length > 50) {
    taskDescriptionErr.style.display = 'block';
    newTaskDescription.style.border = '1px solid red';
    return false
  } else {
    taskDescriptionErr.style.display = 'none';
    newTaskDescription.style.border = '1px solid #CED4DA';
    return true
  }
}
newTaskDescription.onblur = () => {
  validateDescription()
}

//Date validation
const validateDate = () => {
  if (newDueDate.value === '') {
    newDueDate.style.border = '1px solid red'
    return false
  }
  let inputDate = new Date(newDueDate.value)
  let currentDate = new Date()
  currentDate.setHours(0, 0, 0, 0);
  if (inputDate < currentDate) {
    dateErr.style.display = 'block';
    newDueDate.style.border = '1px solid red'
    return false
  } else {
    dateErr.style.display = 'none';
    newDueDate.style.border = '1px solid #ced4da'
    return true
  }
}
newDueDate.onblur = () => {
  validateDate()
}

submitButton.onclick = (e) => {
  e.preventDefault()
  let isTaskNameValid = validateTaskName()
  let isTaskDescriptionValid = validateDescription()
  let isTaskDateValid = validateDate()
  if (isTaskNameValid && isTaskDescriptionValid && isTaskDateValid) {
    tasks.addTask(newTaskName.value, newTaskDescription.value, newAssignedName.value, newDueDate.value, newStatus.value)
    console.log(tasks)
    tasks.render()
    newTaskName.value = ''
    newTaskDescription.value = ''
    newAssignedName.value = ''
    newDueDate.value = ''
    newStatus.value = ''
  } else {
    document.querySelector('#alertInfo').style.display = 'block'
  }
}
