import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookCategory } from '../models/BookCategory';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class BookCategoriesService {
  url = 'http://localhost:5092/api/BookCategories';

  constructor(private http: HttpClient) { }

  GetAllBookCategories(): Observable<BookCategory[]> {
    return this.http.get<BookCategory[]>(this.url);
  }

  GetByBookCategoryId(BookCategoryId: number): Observable<BookCategory> {
    const apiUrl = `${this.url}/${BookCategoryId}`;
    return this.http.get<BookCategory>(apiUrl);
  }

  SaveBookCategory(bookcategory: BookCategory): Observable<any> {
    return this.http.post<BookCategory>(this.url, bookcategory, httpOptions);
  }

  UpdateBookCategory(bookcategory: BookCategory): Observable<any> {
    return this.http.put<BookCategory>(this.url, bookcategory, httpOptions);
  }

  DeleteBookCategory(BookCategoryId: number): Observable<any> {
    const apiUrl = `${this.url}/${BookCategoryId}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }
}
