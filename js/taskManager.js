
const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
  const html = `
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <h6 class="card-title mb-2">Assigned: ${assignedTo}</h6>
      <p class="card-text">Description: ${description}</p>
      <div>
        <i class="fa fa-clock"></i>
        <span>${dueDate}</span>
      </div>
      <div>${status}</div>
      <div>
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
    this.tasks.push([{ currentId: this.currentId++, name: curname, description: curdescription, assignedTo: curassignedTo, dueDate: curdueDate, status: curstatus }])
  }

  render() {
    let tasksHtmlList = []
    this.tasks.map(task => {

      let currentTask = task;
      console.log(currentTask,)
      let date = new Date(currentTask.dueDate)
      console.log(date)
      // date.getDate()
      let formattedDate = '02/10/2022'
      console.log(currentTask[0].name)
      let taskHtml = createTaskHtml(currentTask[0].name, currentTask[0].description, currentTask[0].assignedTo, formattedDate, currentTask[0].status)
      console.log(taskHtml)
      tasksHtmlList.push(taskHtml)
      console.log(tasksHtmlList)
    })
    let tasksHtml = tasksHtmlList.join('\n')
    addTask.innerHTML = tasksHtml

  }
}