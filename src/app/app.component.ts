import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do list';
  todoArray=[];

  addTodo(value){
    this.todoArray.push(value)
    console.log(value);
    this.todoArray.values=''
    
  }


}
