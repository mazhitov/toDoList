import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskMessage = '';
  tasks = ['Buy milk', 'Walk with dog', 'do homework'];

  addNewTask(event: Event) {
    event.preventDefault();
    this.tasks.push(this.taskMessage);
  }
  onDeleteTask (index:number) {
    this.tasks.splice(index, 1);
  }
}
