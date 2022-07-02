
const createTaskHtml = (id, name, description, assignedTo, dueDate) => {
  const html = `
  <div class="card mb-3" id=${id}>
    <div class="card-body">
      <h5 class="card-title" >${name}</h5>
      <h6 class="card-title mb-2">Assigned: ${assignedTo}</h6>
      <p class="card-text">Description: ${description}</p>
      <div>
        <i class="fa fa-clock"></i>
        <span>${dueDate}</span>
      </div>
        <select class="form-select" id="status" required>
          <option selected>currentStatus</option>
          <option value="Todo">Todo</option>
          <option value="In progress">In progress</option>
          <option value="Review">Review</option>
          <option value="Done">Done</option>
        </select>
        <a href="#" class="card-link"
          ><i class="fa-solid fa-pen-to-square"></i
        ></a>
        <a href="#" class="card-link">
          <i class="fa fa-trash-can"></i
        ></a>
      </div>
      
    </div>
  </div>`
  return html
}

class TaskManager {
  constructor(currentId = 0) {
    this.currentId = currentId
    this.tasks = []
  }

  addTask(curname, curdescription, curassignedTo, curdueDate, curstatus = 'todo') {
    let taskObject = { id: this.currentId++, name: curname, description: curdescription, assignedTo: curassignedTo, dueDate: curdueDate, status: curstatus }
    this.tasks.push(taskObject)
  }

  deleteTask(taskId) {
    let newTasks = []
    newTasks = this.tasks.filter(task => {
      let currentTask = task
      return task.id !== taskId
    })
    this.tasks = newTasks
  }

  save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
    localStorage.setItem('currentId', JSON.stringify(this.currentId))
  }

  load() {
    if (localStorage.getItem('tasks')) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    if (localStorage.getItem('currentId')) {
      this.currentId = Number(localStorage.getItem('currentId'))
    }
  }

  taskByStatus() {
    let tasksListByStatus = {}
    // console.log(this.tasks)
    for (let i = 0; i < this.tasks.length; i++) {
      if (!tasksListByStatus[this.tasks[i].status]) {
        tasksListByStatus[this.tasks[i].status] = [this.tasks[i]]
      } else {
        tasksListByStatus[this.tasks[i].status].push(this.tasks[i])
      }
    }
    return tasksListByStatus
  }

  getTaskById(taskId) {
    let foundTask = this.tasks.filter(task => task.id === taskId)
    return foundTask
  }

  render() {
    console.log(this.taskByStatus())
    let tasksListByStatus = this.taskByStatus()
    for (const property in tasksListByStatus) {
      let renderLists = []
      let taskLists = tasksListByStatus[property]
      renderLists = taskLists.map(item => {
        let currentTask = item;
        let date = new Date(currentTask.dueDate)
        let formattedDate = (date.toLocaleDateString())
        let taskHtml = createTaskHtml(currentTask.id, currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate)
        return taskHtml
      })
      let tasksHtml = renderLists.join('\n')
      if (property === 'Todo') {
        let addTask = document.querySelector('#addTodoTask')
        addTask.innerHTML = tasksHtml
      } else if (property === 'In progress') {
        let addInprogress = document.querySelector('#addInprogressList')
        addInprogress.innerHTML = tasksHtml
      } else if (property === 'Review') {
        let addReviewTask = document.querySelector('#addReviewTask')
        addReviewTask.innerHTML = tasksHtml
      } else {
        let addDoneTask = document.querySelector('#addDoneTask')
        addDoneTask.innerHTML = tasksHtml
      }
    }
  }
} 
