import { Component, OnInit} from '@angular/core';
import { TodoService } from '../todo.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{
  
  constructor(private todoService: TodoService){}

  ngOnInit(): void{

    this.todoService.posts$.pipe(
      map((res: number[]) => res.filter(num => num > 3 )),
      tap((res: number[]) => {
        console.log('Desde el tap: ', res);
      })
    )
    .subscribe ( (res) => {
      console.log('Nueva data: ', res)
    } )
  }

}
