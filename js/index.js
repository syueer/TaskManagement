
let tasks = new TaskManager()
// tasks.render()
// console.log(tasks)
// const taskHtml = createTaskHtml("takingout trash", 'please tak out trash end of the day', 'Yue', '26/07/2022', 'todo')

const submitButton = document.querySelector('#submitButton')
document.querySelector('#alertInfo').style.display = 'none'
submitButton.onclick = (e) => {
  e.preventDefault()

  let newTaskName = document.querySelector('#taskName');
  let newTaskDescription = document.querySelector('#taskDescription');
  let newAssignedName = document.querySelector('#assignedName');
  let newDueDate = document.querySelector('#dueDate');
  let newStatus = document.querySelector('#status');
  console.log(newTaskName.value)
  if (newTaskName.value === '') {
    document.querySelector('#alertInfo').style.display = 'block'
    document.querySelector('#alertInfo').innerText = 'Please input taskName'
  } else if (newTaskDescription.value === '') {
    document.querySelector('#alertInfo').style.display = 'block'
    document.querySelector('#alertInfo').innerText = 'Please input taskDescription'
  } else if (newAssignedName.value === '') {
    document.querySelector('#alertInfo').style.display = 'block'
    document.querySelector('#alertInfo').innerText = 'Please input AssignedName'
  }
}




// tasks.addTask('shop', 'shopping things', 'yue', 25 / 03 / 2020)
// tasks.addTask('shop', 'shopping things', 'yue', 25 / 03 / 2020)

// console.log(tasks)
// console.log(submit)

// let el = document.querySelector(".submit")
// el.addEventListener("click", () => {
//   tasks.addTask()
// });

// console.log(el)
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }