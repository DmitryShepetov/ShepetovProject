import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from './books.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

    constructor(public http: HttpClient) { }
    getBooks() : Observable<Book>{
        return this.http.get<Book>(environment.api + "api/Book")
    }
    addBook(book: Book): Observable<Book>{
        return this.http.post<Book>(environment.api + "api/Book", book)
    }

    deleteBook(id: Book) : Observable<unknown>{
        return this.http.delete(environment.api + "api/Book/" + id.id)
    }
    updateBook(book: Book) : Observable<Book>{
        return this.http.put<Book>(environment.api + "api/Book", book);
    }
  }