import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

import {
  IonicRouteStrategy,
  provideIonicAngular
} from '@ionic/angular/standalone';

import { environment } from '../enviroments/environment';
import { APP_CONFIG } from '@iamanderson/app-config';
import { LoggerModule } from '@iamanderson/shared-providers/logger';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: APP_CONFIG, useValue: environment },
    //Here you can change Ionic config
    provideIonicAngular(),
    provideRouter(appRoutes),
    importProvidersFrom(LoggerModule)
  ]
};
