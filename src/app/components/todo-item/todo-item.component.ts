import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [TodoItemComponent],
  template: `
    <div>
      <h1>{{ taskTitle }}</h1>
    </div>
  `,
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() taskTitle = '';
}
