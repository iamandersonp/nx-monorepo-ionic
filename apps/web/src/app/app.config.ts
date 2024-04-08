import { ApplicationConfig } from '@angular/core';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

import {
  IonicRouteStrategy,
  provideIonicAngular
} from '@ionic/angular/standalone';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    //Here you can change Ionic config
    provideIonicAngular(),
    provideRouter(appRoutes)
  ]
};
