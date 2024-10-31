import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../task';
import { ToDoService } from '../../to-do.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, AsyncPipe, JsonPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  constructor(private todoService: ToDoService) {}

  count = 0;
  tasks = Array<Task>();
  message = '';
  task$ = new Observable<Task>();

  ngOnInit() {
    this.todoService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  getTask(id: number) {
    this.task$ = this.todoService.getTask(id);
  }

  createTask(title: string) {
    title = title + this.count++;
    this.todoService.addTask({ title, completed: false }).subscribe({
      next: (task) => this.tasks.push(task),
      error: (err) =>
        (this.message = 'Erro ao adicionar tarefa: ' + err.message),
      complete: () => (this.message = 'Tarefa adicionada com sucesso'),
    });
  }

  editTask(id: number, taskUpdate: Partial<Task>) {
    this.todoService.editTask(id, taskUpdate).subscribe((task) => {
      const index = this.tasks.findIndex((t) => t.id === task.id);
      this.tasks[index] = task;
    });
  }

  removeTask(id: number) {
    this.todoService.removeTask(id).subscribe(() => {
      console.log(this.tasks.find((t) => t.id === id));
      console.log(this.tasks.filter((t) => t.id !== id));
      this.tasks = this.tasks.filter((t) => t.id !== id);
    });
  }
}
