import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/content/table/table.component';
import { AddPageComponent } from './pages/add/add-page/add-page.component';
import { FormsComponent } from './components/forms/forms/forms.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './pages/categories/categories/categories.component';
import { CtgTableComponent } from './components/content/ctg-table/ctg-table.component';
import { CtgFormsComponent } from './components/forms/ctg-forms/ctg-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    TableComponent,
    AddPageComponent,
    FormsComponent,
    CategoriesComponent,
    CtgTableComponent,
    CtgFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
