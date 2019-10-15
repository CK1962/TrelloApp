import { Component, OnInit, Input } from '@angular/core';
import { Itodo } from "../itodo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Itodo[];
  constructor() { }

  ngOnInit() {}
}
