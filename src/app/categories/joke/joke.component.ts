import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Joke } from '../models/joke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  selectedJoke: Joke;
  
  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,) { }

  ngOnInit(): void {
    const selectedCategory = this.route.snapshot.params.category
    console.log(selectedCategory);
    this.categoriesService.fetchJokeByCategory(selectedCategory)
      .subscribe((resp: Joke) => {
        console.log(resp);
        this.selectedJoke = resp;
      })

  }

}
