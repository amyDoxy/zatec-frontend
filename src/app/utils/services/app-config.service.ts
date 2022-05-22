import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigModel } from '../models/appConfig-model';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  public baseUrl: string;

  constructor(private readonly httpClient: HttpClient) { }

  public loadAppConfig(): Promise<AppConfigModel> {
    return new Promise((resolve, reject) => {
      this.httpClient.get('./assets/conf/appConfig.json').subscribe(
        (content: AppConfigModel) => {
          Object.assign(this, content);
          resolve(this);
        },
        (reason) => reject(reason)
      );
    });
  }
}
