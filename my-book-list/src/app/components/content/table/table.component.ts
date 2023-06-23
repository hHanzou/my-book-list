import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  book: Book[] = [];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.bookService.GetAllBooks().subscribe(result => {
      this.book = result;
      console.log(this.book);
    })
  }
}
