import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-creator',
  standalone: true,
  imports: [],
  template: ` <button (click)="addTask('task')">Adicionar</button> `,
  styleUrl: './task-creator.component.scss',
})
export class TaskCreatorComponent {
  @Output() newTask = new EventEmitter<string>();

  addTask(taskTitle: string) {
    this.newTask.emit(taskTitle);
  }
}
