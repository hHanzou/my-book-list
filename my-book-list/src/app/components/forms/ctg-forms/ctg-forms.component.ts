import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-ctg-forms',
  templateUrl: './ctg-forms.component.html',
  styleUrls: ['./ctg-forms.component.css']
})
export class CtgFormsComponent implements OnInit {

  form: any;
  formtittle: string = "";

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.formtittle = "New Category";
    this.form = new FormGroup({
      categoryName: new FormControl(null, Validators.required)
    });
  }
  SendForm() {
    const category = this.form.value;

    this.categoriesService.SaveCategory(category).subscribe(result => {
      alert("Category inserted sucessfully.")
      window.location.reload();
    });
  }

}
