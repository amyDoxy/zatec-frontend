import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UrlService } from './utils/services/url.service';
import { AppConfigService } from './utils/services/app-config.service';
import { BasicAuthInterceptor } from './utils/interceptors/basic-auth.interceptor';


export const AppConfigurationFactory = (appConfig: AppConfigService) => () =>
  appConfig.loadAppConfig();

const appConfigProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: AppConfigurationFactory,
  multi: true,
  deps: [AppConfigService, HttpClient]
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  providers: [
    UrlService,
    appConfigProvider,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
