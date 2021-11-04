import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() taskMessage = '';
  @Output() deleteTask = new EventEmitter();
  @Output() changeTask = new EventEmitter<string>();
  onClickDelete() {
    this.deleteTask.emit();
  }
  taskMessageInput(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.changeTask.emit(target.value);
  }
}
