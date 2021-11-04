import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  isFocusInput = false;
  isChecked = false;
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
  onFocusOnInput() {
    this.isFocusInput = true;
  }
  onFocusOutInput() {
    this.isFocusInput = false;
  }
  onCheckboxChange() {
    this.isChecked = !this.isChecked;
  }
  className() {
    return {
      'form-control':true,
      'border-0 border-bottom border-2 border-danger': this.isFocusInput,
      'text-success': this.isChecked,
    }
  }
}
