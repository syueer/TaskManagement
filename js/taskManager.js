class TaskManager {
  constructor(currentId = 0) {
    this.currentId = currentId
    this.tasks = []
  }

  addTask(name, description, assignedTo, dueDate, status = 'todo') {
    this.currentId++
    this.tasks.push([this.currentId, name, description, assignedTo, dueDate, status])
  }
}