import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo, TodoView } from './todos.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {

    constructor(public http: HttpClient) { }
    getTodos() : Observable<TodoView>{
        return this.http.get<TodoView>(environment.api + "api/Book")
    }
    addTodo(todo: TodoView): Observable<TodoView>{
        return this.http.post<TodoView>(environment.api + "api/Book", todo)
    }

    deleteTodo(id: TodoView) : Observable<unknown>{
        return this.http.delete(environment.api + "api/Book/" + id.id)
    }
  }