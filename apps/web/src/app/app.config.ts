import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom
} from '@angular/core';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi
} from '@angular/common/http';
import { Drivers } from '@ionic/storage';
import {
  IonicRouteStrategy,
  provideIonicAngular
} from '@ionic/angular/standalone';
import { IonicStorageModule } from '@ionic/storage-angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { appRoutes } from './app.routes';

import { environment } from '../enviroments/environment';
import { APP_CONFIG } from '@iamanderson/app-config';
import { LoggerModule } from '@iamanderson/shared-providers/logger';
import {
  StorageAdapter,
  StorageModule
} from '@iamanderson/shared-providers/storage';

/**
 * loader for the internationalization service
 *
 * @export
 * @param {HttpClient} http
 * @return {*}  {TranslateHttpLoader}
 */
function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

/**
 * Initialicethe translation service by preloading the language
 *
 * @export
 * @param {TranslateService} translate
 * @return {*}
 */
function appInitializerFactory(storage: StorageAdapter) {
  return async () => {
    await storage.checkDbVersion();
    return;
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: APP_CONFIG, useValue: environment },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [StorageAdapter],
      multi: true
    },
    //Here you can change Ionic config
    provideIonicAngular(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(appRoutes),
    importProvidersFrom(
      LoggerModule,
      StorageModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient]
        }
      }),
      IonicStorageModule.forRoot({
        name: '__TV_MAZE_APP',
        driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
      })
    )
  ]
};
