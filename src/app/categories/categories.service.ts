import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from 'app/utils/services/url.service';
import { map, Observable } from 'rxjs';
import { Joke } from './models/joke.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http$: HttpClient, private urlService: UrlService) { }

  fetchCategoryList(): Observable<String[]> {
    return this.http$.get<String[]>(
      this.urlService.categoryListURL()
    )
      .pipe(
        map((request: String[]) => {
          return request;
        }
        )
      ) as Observable<String[]>;
  }

  fetchJokeByCategory(category: string): Observable<Joke> {
    return this.http$.get<Joke>(
      this.urlService.jokeByCategoryURL(category)
    )
      .pipe(
        map((request: Joke) => {
          return request;
        }
        )
      ) as Observable<Joke>;
  }
}
