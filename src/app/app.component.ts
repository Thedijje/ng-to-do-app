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
   
    
  }

  deleteItem(todo){
    if(!confirm('Are you sure?')){
      return;
    }
    console.log("delete item "+todo);
    
    
    for(let i=0 ;i<= this.todoArray.length ;i++){

      if(todo== this.todoArray[i]){
       this.todoArray.splice(i,1);
      }

     }


   }


}
