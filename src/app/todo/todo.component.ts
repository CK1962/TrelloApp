import { Component, OnInit, Input } from "@angular/core";
import { Itodo } from "../itodo";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  @Input() todo: Itodo;
  constructor(private TodoService: TodoService) {}

  ngOnInit() {}

  setDoing(): void {
    this.todo.isDoing = true;
  }
  setDone(): void {
    this.todo.isDone = true;
  }
  delete(): void {
    this.TodoService.delete(this.todo);
  }
  toggleEdit() {
    this.todo.isEditing = !this.todo.isEditing;
  }
}
