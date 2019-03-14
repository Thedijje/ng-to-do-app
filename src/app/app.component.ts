import { Component } from '@angular/core';
import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

@NgModule({
  imports: [
    
    FormsModule                               // <========== Add this line!
                            // <========== Add this line!
  ],
  declarations: [
    
    // other components of yours
  ],
  bootstrap: [ AppComponent ]
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
   public toDo = "";
   todoSubmit(){
     this.toDo;
   }


}
