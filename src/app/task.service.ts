import { Injectable } from '@angular/core';
import { Task } from './modal';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: string[] = [];

  constructor() { }

  getTasks(): Task[] {
    const storedTasks = localStorage.getItem(this.storageKey);
    let tasks: Task[] = [];
    if (storedTasks) {
      tasks = JSON.parse(storedTasks) as Task[];
    }
    return tasks;
}

saveTasks(title:string, description:string): void {
  let tasks = this.getTasks();
  const newTask: Task= {
    id_task: tasks.length>0 ? tasks[tasks.length-1].id_task+1 : 1,
    title,
    description,
    id,
  };
  tasks.push(newTask);
  localStorage.setItem(this.storageKey, JSON.stringify(tasks));
}
  
    deleteTask(id_task: number): void {
      let tasks = this.getTasks();
      tasks = tasks.filter(task => task.id_task !== id_task);
      localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    }

    addTask
  
    
}