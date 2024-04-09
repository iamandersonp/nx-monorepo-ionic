import { Injectable, inject } from '@angular/core';
import { LogLevel, LogType, LoggerAdapter } from './logger-adapter';
import { APP_CONFIG, AppConfig } from '@iamanderson/app-config';

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
   * Log level
   *
   * @private
   * @memberof LoggerService
   */
  private _loglevel = 0;

  /**
   * getter for the log level
   *
   * @type {number}
   * @memberof LoggerService
   */
  public get loglevel(): number {
    return this._loglevel;
  }

  /**
   * Setter for the log level
   *
   * @memberof LoggerService
   */
  public set loglevel(value: number) {
    this._loglevel = value;
  }

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
    if (this.appConfig && this.appConfig.logLevel !== undefined) {
      this.loglevel = this.appConfig.logLevel;
    } else {
      this.loglevel = LogLevel.INFO;
    }
    this.logEvents = [
      {
        text: this.mostrarhora() + '[INFO]:  App Start',
        tipo: LogType.NORMAL
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
    if (this.loglevel <= LogLevel.DEBUG) {
      this.logEvents.unshift({
        text: this.mostrarhora() + '[DEBUG]: ' + event,
        tipo: LogType.DEBUG
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
    if (this.loglevel <= LogLevel.INFO) {
      this.logEvents.unshift({
        text: this.mostrarhora() + '[INFO]:  ' + event,
        tipo: LogType.NORMAL
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
    if (this.loglevel <= LogLevel.WARNING) {
      this.logEvents.unshift({
        text: this.mostrarhora() + '[WARNING]: ' + event,
        tipo: LogType.WARNING
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
    if (this.loglevel <= LogLevel.ERROR) {
      this.logEvents.unshift({
        text: this.mostrarhora() + '[ERROR]: ' + event,
        tipo: LogType.ERROR
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
