
let tasks = new TaskManager()

const taskHtml = createTaskHtml("takingout trash", 'please tak out trash end of the day', 'Yue', '26/07/2022', 'todo')
console.log(taskHtml)
const submitButton = document.querySelector('#submitButton')
document.querySelector('#alertInfo').style.display = 'none'


submitButton.onclick = (e) => {
  e.preventDefault()
  let newTaskName = document.querySelector('#taskName');
  let newTaskDescription = document.querySelector('#taskDescription');
  let newAssignedName = document.querySelector('#assignedName');
  let newDueDate = document.querySelector('#dueDate');
  let newStatus = document.querySelector('#status');
  let alert = document.querySelector('#alertInfo')
  let addTask = document.querySelector('#addTask')

  if (newTaskName.value === '') {
    document.querySelector('#alertInfo').style.display = 'block'
    document.querySelector('#alertInfo').innerText = 'Please input taskName'
  } else if (newTaskDescription.value === '') {
    alert.style.display = 'block'
    alert.innerText = 'Please input taskDescription'
  } else if (newAssignedName.value === '') {
    alert.style.display = 'block'
    alert.innerText = 'Please input AssignedName'
  } else if (newDueDate === '') {
    alert.style.display = 'block'
    alert.innerText = 'Please input DueDate'
  } else if (newStatus === '') {
    alert.style.display = 'block'
    alert.innerText = 'Please input status'
  } else {
    console.log(111)
    console.log(newTaskName.value)
    console.log(newTaskDescription.value)
    console.log(newAssignedName.value)
    console.log(newDueDate.value)
    console.log(newStatus.value)
    tasks.addTask(newTaskName.value, newTaskDescription.value, newAssignedName.value, newDueDate.value, newStatus.value)
    console.log(tasks)
    tasks.render()
    newTaskName.value = ''
    newTaskDescription.value = ''
    newAssignedName.value = ''
    newDueDate.value = ''
    newStatus.value = ''
  }
}
