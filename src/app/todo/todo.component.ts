import { Component, OnInit } from '@angular/core';
import {TodoCard} from '../todo'
import { TodoList, TodoDone } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}