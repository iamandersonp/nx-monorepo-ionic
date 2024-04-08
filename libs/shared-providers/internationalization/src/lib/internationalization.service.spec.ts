import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

import { LoggerAdapter } from '@iamanderson/shared-providers/logger';
import { StorageAdapter } from '@iamanderson/shared-providers/storage';
import { InternationalizationService } from './internationalization.service';
import { of } from 'rxjs';
import { APP_CONFIG, AppConfig } from '@iamanderson/app-config';

/**
 *  Mock for the translate service
 */
export const translateSrv = {
  onLangChange: {
    subscribe: jest.fn()
  },
  addLangs: jest.fn(),
  getLangs: jest.fn().mockReturnValue(['en', 'es']),
  setDefaultLang: jest.fn(),
  instant: jest.fn(),
  use: jest.fn(),
  get: jest.fn(),
  transform: jest.fn(),
  updateValue: jest.fn().mockReturnValue(of({}))
};

/**
 *  Mock for StorageService
 */
export const storage = {
  create: jest.fn(),
  defineDriver: jest.fn(),
  set: jest.fn(),
  get: jest.fn(),
  remove: jest.fn(),
  clear: jest.fn(),
  storeData: jest.fn()
};

/**
 * Mock for LoggerService
 */
export const loggerService = {
  init: jest.fn(),
  start: jest.fn(),
  end: jest.fn(),
  debug: jest.fn(),
  error: jest.fn(),
  info: jest.fn(),
  warning: jest.fn()
};

describe('InternationalizationService', () => {
  let service: InternationalizationService;
  const config: AppConfig = {
    logLevel: 0,
    dbVersion: 1,
    storeKeys: {
      DB_VERSION: 'DB_VERSION',
      USER_LANGUAGE: 'USER_LANGUAGE'
    },
    production: false,
    timeOut: 0,
    minInterval: 0,
    showLogs: false,
    defaultLanguage: '',
    languages: ['en', 'es'],
    baseUrl: ''
  };
  const titleService = {
    setTitle: jest.fn()
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InternationalizationService,
        { provide: APP_CONFIG, useValue: config },
        {
          provide: TranslateService,
          useValue: translateSrv
        },
        {
          provide: LoggerAdapter,
          useValue: loggerService
        },
        {
          provide: StorageAdapter,
          useValue: storage
        },
        {
          provide: Title,
          useValue: titleService
        }
      ]
    });
    service = TestBed.inject(InternationalizationService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('initializa', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
    it('should have logger propiety', () => {
      expect(service).toBeTruthy();
    });
    it('should initialize logger', () => {
      expect(loggerService.init).toHaveBeenCalledWith(
        'InternationalizationService'
      );
    });
    it('should have title propiety', () => {
      expect(titleService).toBeTruthy();
    });

    it('should return available languages', () => {
      expect(service.languages).toEqual(config.languages);
    });
  });

  describe('handleTitleUpdates', () => {
    it('should update title', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let observer;
      translateSrv.onLangChange.subscribe.mockImplementation(
        (handler) => (observer = handler)
      );
      jest.spyOn(service, 'handleTitleUpdates');

      await service.handleTitleUpdates();
      expect(service.handleTitleUpdates).toHaveBeenCalled();
    });
  });

  describe('checDefaultLanguage', () => {
    it('should initialize _language to stored language', async () => {
      const storedLanguage = 'en';
      const avaibleLanguages = ['en', 'es'];
      jest.spyOn(translateSrv, 'addLangs').mockReturnValue(avaibleLanguages);
      jest.spyOn(storage, 'get').mockResolvedValue(storedLanguage);
      await service.checDefaultLanguage();
      expect(service.language).toEqual(storedLanguage);
    });
    it('should initialize _language to navigator laguage if no language is stored and navigator language is avaible', async () => {
      const navigatorLanguage = 'en';
      jest.spyOn(translateSrv, 'addLangs').mockReturnValue([navigatorLanguage]);
      jest.spyOn(storage, 'get').mockResolvedValue(null);
      jest
        .spyOn(navigator, 'language', 'get')
        .mockReturnValue(navigatorLanguage);
      await service.checDefaultLanguage();
      expect(service.language).toEqual(navigatorLanguage);
    });
    it('should initialize _language to default laguage if no language is stored and navigator language is not avaible', async () => {
      const navigatorLanguage = 'en';
      const avaibleLanguages = ['es'];
      jest.spyOn(translateSrv, 'addLangs').mockReturnValue([avaibleLanguages]);
      jest.spyOn(storage, 'get').mockResolvedValue(null);
      jest
        .spyOn(navigator, 'language', 'get')
        .mockReturnValue(navigatorLanguage);
      jest.spyOn(service, 'checkAvaibible').mockReturnValue(false);
      await service.checDefaultLanguage();
      expect(service.language).toEqual(config.defaultLanguage);
    });
    it('should initialize _language to default laguage if API is not avaible', async () => {
      const avaibleLanguages = ['es'];
      jest.spyOn(translateSrv, 'addLangs').mockReturnValue([avaibleLanguages]);
      jest.spyOn(storage, 'get').mockResolvedValue(null);
      jest.spyOn(service, 'checkApiAvaible').mockReturnValue(false);
      await service.checDefaultLanguage();
      expect(service.language).toEqual(config.defaultLanguage);
    });
  });

  describe('getinstant', () => {
    it('should return instant', () => {
      const label = 'label';
      jest.spyOn(translateSrv, 'instant').mockReturnValue(label);
      expect(service.getinstant(label)).toEqual(label);
    });
  });

  describe('setValueAndLabel', () => {
    it('should setValueAndLabel with string', async () => {
      jest.spyOn(service, 'setValueAndLabel');
      jest.spyOn(service, 'getinstant').mockReturnValue('label');
      await service['setValueAndLabel']('title', 'title');
      expect(service.setValueAndLabel).toHaveBeenCalled();
    });

    it('should setValueAndLabel with number', async () => {
      jest.spyOn(service, 'setValueAndLabel');
      jest.spyOn(service, 'getinstant').mockReturnValue('label');
      await service['setValueAndLabel']('title', 9);
      expect(service.setValueAndLabel).toHaveBeenCalled();
    });
  });
});
