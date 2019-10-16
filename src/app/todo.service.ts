import { Injectable } from '@angular/core';
import { Itodo } from 'src/app/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todoList: Itodo[] = [
    {
      id: 1,
      title: "First Todo",
      isDoing: false,
      isDone: false,
      isEditing: false
  },
  {
    id: 2,
    title: "Second Todo",
    isDoing: false,
    isDone: false,
    isEditing: false
},
{
  id: 3,
  title: "Third Todo",
  isDoing: false,
  isDone: false,
  isEditing: false
}
  ];

  getAll(): Itodo[] {
    return this.todoList;
  }

  getDone(): Itodo[] {
    return this.todoList.filter(todo => todo.isDone);
  }

  getDoing(): Itodo[] {
    return this.todoList.filter(todo => todo.isDoing && !todo.isDone);
  }

  getTodo(): Itodo[] {
    return this.todoList.filter(todo => !todo.isDoing && !todo.isDone);
  }

  add(title: String): void {
    const newId =
      this.todoList
        .map(x => x.id)
        .reduce((prev, curr) => (prev < curr ? curr : prev)) + 1;

    this.todoList.push({
      id: newId,
      title: "title",
      isDoing: false,
      isDone: false,
      isEditing: false
    });
  }

  delete(todo: Itodo): void {
    var index = this.todoList.findIndex(todo => todo === todo);
    this.todoList.splice(index, 1);
  }
}