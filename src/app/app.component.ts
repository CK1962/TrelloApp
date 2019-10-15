import { Component } from '@angular/core';
import { Itodo} from './itodo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TrelloApp';
  todoList: any [] = [];
}


