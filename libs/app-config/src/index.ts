import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken('Application config');

interface config {
  production: boolean;
  timeOut: number;
  minInterval: number;
  showLogs: boolean;
  defaultLanguage: string;
  languages: string[];
  dbVersion: number;
  logLevel: number;
  baseUrl: string;
  storeKeys: {
    DB_VERSION: string;
    USER_LANGUAGE: string;
  };
}

export type AppConfig = Partial<config>;
