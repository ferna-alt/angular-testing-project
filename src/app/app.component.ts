import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-testing-project';
  @Output()  modalID: string = 'modalId';

 
  tasks: string[] = [];
  constructor() {
    console.log('AppComponent initialized');
  }
  

  addTask(task: string) {
    console.log('Adding task:', task);
    return false;


  }

  deleteTask(task: string) {
  }

  getTasks(): string[] {
    return [];
  }
}
