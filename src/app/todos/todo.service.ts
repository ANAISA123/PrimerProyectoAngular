 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  postSource = new Subject<number[]>();
  posts$ = this.postSource.asObservable();

  constructor(private http: HttpClient) { }

  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getComments(postId: number){
    const params = {
      postId
    }
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`, {params});
  }

  getPost(){
    const body = {
      id: 1,
      comment: 'Hola',
      date: '2023-07-13',

    }
    return this.http.post('https://jsonplaceholder.typicode.com/posts', body)
  }

}

