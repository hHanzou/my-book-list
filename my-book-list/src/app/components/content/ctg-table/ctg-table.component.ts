import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-ctg-table',
  templateUrl: './ctg-table.component.html',
  styleUrls: ['./ctg-table.component.css']
})
export class CtgTableComponent implements OnInit {
  category: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.GetAllCategories().subscribe(result => {
      this.category = result;
      console.log(this.category);
    })
  }

  DeleteCategory(Id: number) {
    this.categoriesService.DeleteCategory(Id).subscribe(result => { alert("the category was deleted") })
    this.category = this.category.filter(c => c.categoryId !== Id)
  }

}
