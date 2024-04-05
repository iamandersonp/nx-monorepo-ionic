import { Injectable, inject } from '@angular/core';
import { LoggerAdapter } from './logger-adapter';
import { APP_CONFIG, AppConfig } from '@iamanderson/app-config';

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARNING = 2,
  ERROR = 3
}

/**
 * Utility used to pretty format the logs in the console
 *
 * @export
 * @class LoggerService
 */
@Injectable({
  providedIn: 'root'
})
export class LoggerService extends LoggerAdapter {
  /**
   * App configuration
   *
   * @private
   * @type {AppConfig}
   * @memberof LoggerService
   */
  private _appConfig: AppConfig = inject(APP_CONFIG) as AppConfig;
  /**
   * Getter for the appConfig
   *
   * @readonly
   * @type {AppConfig}
   * @memberof LoggerService
   */
  public get appConfig(): AppConfig {
    return this._appConfig;
  }

  /**
   * Creates an instance of LoggerService.
   * @memberof LoggerService
   */
  constructor() {
    super();
    this.logEvents = [
      {
        text: this.mostrarhora() + '[INFO]:  App Start',
        tipo: 'log-normal'
      }
    ];
  }

  /**
   * add inicializa string service to the logger
   *
   * @param service - the name of the service that init
   * @memberof LoggerService
   */
  public init(service: string) {
    this.info(service + ' - Init');
  }

  /**
   * add Inicia string service to the logger
   *
   * @param service
   */
  public start(service: string) {
    this.info(service + ' - Start');
  }

  /**
   * add Finaliza string service to the logger
   *
   * @param {string} service
   * @memberof LoggerService
   */
  public end(service: string) {
    this.info(service + ' - End');
  }

  /**
   * Store DEBUG Messages in the loger
   *
   * @param event - The string with the event info
   * @memberof LoggerService
   */
  public debug(event: string) {
    if (this.appConfig.logLevel <= LogLevel.DEBUG) {
      this.logEvents.unshift({
        text: this.mostrarhora() + '[DEBUG]: ' + event,
        tipo: 'log-debug'
      });
      console.debug(this.mostrarhora() + '[DEBUG]: ' + event);
    }
  }

  /**
   * Store INFO Messages in the loger
   *
   * @param event - The string with the event info
   * @memberof LoggerService
   */
  public info(event: string) {
    if (this.appConfig.logLevel <= LogLevel.INFO) {
      this.logEvents.unshift({
        text: this.mostrarhora() + '[INFO]:  ' + event,
        tipo: 'log-normal'
      });
      console.log(this.mostrarhora() + '[INFO]:  ' + event);
    }
  }

  /**
   * Store WARNING Messages in the loger
   *
   * @param event - The string with the event info
   * @memberof LoggerService
   */
  public warning(event: string) {
    if (this.appConfig.logLevel <= LogLevel.WARNING) {
      this.logEvents.unshift({
        text: this.mostrarhora() + '[WARNING]: ' + event,
        tipo: 'log-warning'
      });
      console.warn(this.mostrarhora() + '[WARNING]: ' + event);
    }
  }

  /**
   * Store ERROR Messages in the loger
   *
   * @param event - The string with the event info
   * @memberof LoggerService
   */
  public error(event: string) {
    if (this.appConfig.logLevel <= LogLevel.ERROR) {
      this.logEvents.unshift({
        text: this.mostrarhora() + '[ERROR]: ' + event,
        tipo: 'log-error'
      });
      console.error(this.mostrarhora() + '[ERROR]: ' + event);
    }
  }

  /**
   * Print the current time
   *
   * @private
   * @return string with the current date
   * @memberof LoggerService
   */
  private mostrarhora() {
    const f = new Date();
    const cad = '[' + f.toLocaleTimeString('es-ES') + ']';
    return cad;
  }
}
