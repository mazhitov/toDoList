import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() taskMessage = '';
  @Output() deleteTask = new EventEmitter();

  onClickDelete() {
    this.deleteTask.emit();
  }
}
