import { Injectable } from '@angular/core';
import { CHUCK_NORRIS_PATH, STAR_WARS_PATH } from '../constants/api.constant';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private readonly _baseUrl;

  constructor(private readonly appConfigService: AppConfigService) {
    this._baseUrl = appConfigService.baseUrl;
  }

  categoryListURL(): string {
    return this._baseUrl + CHUCK_NORRIS_PATH + 'categories'
  }

  jokeByCategoryURL(category: string): string {
    return this._baseUrl + CHUCK_NORRIS_PATH + 'joke?category=' + category;
  }

  starWarsPeopleListURL(): string {
    return this._baseUrl + STAR_WARS_PATH + 'people'
  }
}
