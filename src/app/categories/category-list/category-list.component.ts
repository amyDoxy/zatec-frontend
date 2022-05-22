import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categoryList: String[] = [];
  constructor(
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit() {
    this.categoriesService.fetchCategoryList()
    .subscribe((resp: String[]) => {
        console.log(resp);
        this.categoryList = resp;
    })
  }
}
