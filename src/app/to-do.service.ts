import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';
/* to-do.service.ts */
@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getTask(id: number) {
    return this.http.get<Task>(`${this.baseUrl}/tasks/`, { params: { id } });
  }

  getTasks() {
    return this.http.get<Array<Task>>(`${this.baseUrl}/tasks`);
  }

  addTask(task: Omit<Task, 'id'>) {
    return this.http.post<Task>(`${this.baseUrl}/tasks`, { ...task });
  }

  editTask(id: number, task: Partial<Task>) {
    return this.http.patch<Task>(`${this.baseUrl}/tasks/${id}`, task);
  }

  removeTask(id: number) {
    return this.http.delete<Task>(`${this.baseUrl}/tasks/${id}`);
  }
}
