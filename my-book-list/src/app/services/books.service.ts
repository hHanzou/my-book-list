import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  url = 'http://localhost:5092/api/Books';

  constructor(private http: HttpClient) { }

  GetAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  GetByBookId(BookId: number): Observable<Book> {
    const apiUrl = `${this.url}/${BookId}`;
    return this.http.get<Book>(apiUrl);
  }

  GetByBookName(BookName: string): Observable<Book> {
    const apiUrl = `${this.url}/${BookName}`;
    return this.http.get<Book>(apiUrl);
  }

  SaveBook(book: Book): Observable<any> {
    return this.http.post<Book>(this.url, book, httpOptions);
  }

  UpdateBook(book: Book): Observable<any> {
    return this.http.put<Book>(this.url, book, httpOptions);
  }

  DeleteBook(BookId: number): Observable<any> {
    const apiUrl = `${this.url}/${BookId}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }
}