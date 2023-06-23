import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url = 'http://localhost:5092/api/Categories';

  constructor(private http: HttpClient) { }

  GetAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  GetByCategoryId(CategoryId: number): Observable<Category> {
    const apiUrl = `${this.url}/${CategoryId}`;
    return this.http.get<Category>(apiUrl);
  }

  GetByCategoryName(CategoryName: string): Observable<Category> {
    const apiUrl = `${this.url}/${CategoryName}`;
    return this.http.get<Category>(apiUrl);
  }

  SaveCategory(category: Category): Observable<any> {
    return this.http.post<Category>(this.url, category, httpOptions);
  }

  UpdateCategory(category: Category): Observable<any> {
    return this.http.put<Category>(this.url, category, httpOptions);
  }

  DeleteCategory(CategoryId: number): Observable<any> {
    const apiUrl = `${this.url}/${CategoryId}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }
}