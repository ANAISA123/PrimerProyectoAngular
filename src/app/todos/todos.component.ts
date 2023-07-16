import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: any[] = [];

  

constructor(private todoService: TodoService){}

  ngOnInit(): void {
    
   //this.todoService.getTodos().subscribe( (res: any) => {
   //  this.todos = res;
   //  console.log(this.todos);
   //});

   //this.todoService.getComments(10).subscribe( res=> console.log('Comments:',res) );

   //this.todoService.getPost().subscribe( res=> console.log('Post:',res) );
  }

  updatePost(){
    this.todoService.postSource.next([1, 2, 3, 4, 5]);
  }
}
