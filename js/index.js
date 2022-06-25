
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

let tasks = new TaskManager()
tasks.render()
// console.log(tasks)
const taskHtml = createTaskHtml("takingout trash", 'please tak out trash end of the day', 'Yue', '26/07/2022', 'todo')
// console.log(taskHtml)
const validFormFieldInput = (data) => {
  const newTaskNameInput = document.querySelector('#validationTaskName');
  const newTaskDescriptionInput = document.querySelector('#validationTaskDescription');
  const newNameInput = document.querySelector('#validationName');

  const name = newTaskNameInput.value;
  console.log("name:  " + name);

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