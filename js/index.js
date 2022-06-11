
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
// console.log(tasks)



// tasks.addTask('shop', 'shopping things', 'yue', 25 / 03 / 2020)
// tasks.addTask('shop', 'shopping things', 'yue', 25 / 03 / 2020)

// console.log(tasks)
// console.log(submit)

let el = document.querySelector(".submit")
el.addEventListener("click", () => {
  tasks.addTask()
});

console.log(el)
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}