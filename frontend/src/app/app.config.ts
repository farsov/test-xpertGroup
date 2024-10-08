import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {authInterceptor} from "./custom/auth.interceptor";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withInterceptors([authInterceptor])), provideAnimationsAsync()
  ]
};
