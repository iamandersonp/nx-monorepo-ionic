/**
 * Logger level enum
 *
 * @export
 * @enum {number}
 */
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARNING = 2,
  ERROR = 3
}

/**
 * Logger type enum
 *
 * @export
 * @enum {number}
 */
export enum LogType {
  NORMAL = 0,
  DEBUG = 1,
  WARNING = 2,
  ERROR = 3
}

/**
 * LogEvent Type
 *
 * @export
 * @interface LogEvent
 */
export type LogEvent = {
  text: string;
  tipo: LogType;
};

/**
 * Logger adapter Class to be implemented by the logger service
 *
 * @export
 * @abstract
 * @class LoggerAdapter
 */
export abstract class LoggerAdapter {
  /**
   * Array to store all the logs in the lifecycle of the app
   *
   * @private
   * @type {Array<LogEvent>}
   * @memberof LoggerAdapter
   */
  private _logEvents: Array<LogEvent> = [];

  /**
   * gettter for logEvents
   *
   * @type {Array<LogEvent>}
   * @memberof LoggerAdapter
   */
  public get logEvents(): Array<LogEvent> {
    return this._logEvents;
  }

  /**
   * setter for logEvents
   *
   * @memberof LoggerAdapter
   */
  public set logEvents(value: Array<LogEvent>) {
    this._logEvents = value;
  }

  /**
   * Debug message
   *
   * @abstract
   * @param {string} message - message to log
   * @memberof LoggerAdapter
   */
  abstract debug(message: string): void;

  /**
   * Info message
   *
   * @abstract
   * @param {string} message - message to log
   * @memberof LoggerAdapter
   */
  abstract info(message: string): void;

  /**
   * Warning message
   *
   * @abstract
   * @param {string} message - message to log
   * @memberof LoggerAdapter
   */
  abstract warning(message: string): void;

  /**
   * Error message
   *
   * @abstract
   * @param {string} message - message to log
   * @memberof LoggerAdapter
   */
  abstract error(message: string): void;

  /**
   * Initialize logger
   *
   * @abstract
   * @param {string} service - service name
   * @memberof LoggerAdapter
   */
  abstract init(service: string): void;

  /**
   * Start message
   *
   * @abstract
   * @param {string} service - service name
   * @memberof LoggerAdapter
   */
  abstract start(service: string): void;

  /**
   * End message
   *
   * @abstract
   * @param {string} service - service name
   * @memberof LoggerAdapter
   */
  abstract end(service: string): void;
}
