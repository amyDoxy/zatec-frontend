import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from 'app/utils/services/url.service';
import { map, Observable } from 'rxjs';
import { StarWarsPeople } from './models/people.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http$: HttpClient, private urlService: UrlService) { }

  fetchStarWarsPeople(): Observable<StarWarsPeople[]> {
    return this.http$.get<StarWarsPeople[]>(
      this.urlService.starWarsPeopleListURL()
    )
      .pipe(
        map((request: StarWarsPeople[]) => {
          return request;
        }
        )
      ) as Observable<StarWarsPeople[]>;
  }
}
