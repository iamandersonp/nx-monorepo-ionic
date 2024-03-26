import { TestBed } from '@angular/core/testing';
import { LoggerService } from './logger.service';

import { APP_CONFIG } from '@iamanderson/app-config';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: APP_CONFIG, useValue: {} }]
    });
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('init', () => {
    it('should call init', () => {
      const spy = jest.spyOn(service, 'init');
      service.init('test');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('start', () => {
    it('should call init', () => {
      const spy = jest.spyOn(service, 'start');
      service.start('test');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('end', () => {
    it('should call init', () => {
      const spy = jest.spyOn(service, 'end');
      service.end('test');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('Debug', () => {
    it('should call debug with log level 0', () => {
      const configSpy = jest
        .spyOn(service, 'appConfig', 'get')
        .mockReturnValue({ logLevel: 0 });
      const spy = jest.spyOn(service, 'debug');
      service.debug('test');
      expect(spy).toHaveBeenCalled();
      expect(configSpy).toHaveBeenCalled();
    });
    it('should call debug with log level 1', () => {
      const configSpy = jest
        .spyOn(service, 'appConfig', 'get')
        .mockReturnValue({ logLevel: 0 });
      const spy = jest.spyOn(service, 'debug');
      service.debug('test');
      expect(spy).toHaveBeenCalled();
      expect(configSpy).toHaveBeenCalled();
    });
  });
  describe('Info', () => {
    it('should call Info with log level 0', () => {
      const configSpy = jest
        .spyOn(service, 'appConfig', 'get')
        .mockReturnValue({ logLevel: 1 });
      const spy = jest.spyOn(service, 'info');
      service.info('test');
      expect(spy).toHaveBeenCalled();
      expect(configSpy).toHaveBeenCalled();
    });
    it('should call debug with log level 1', () => {
      const configSpy = jest
        .spyOn(service, 'appConfig', 'get')
        .mockReturnValue({ logLevel: 1 });
      const spy = jest.spyOn(service, 'info');
      service.info('test');
      expect(spy).toHaveBeenCalled();
      expect(configSpy).toHaveBeenCalled();
    });
  });
  describe('Warning', () => {
    it('should call Warning with log level 0', () => {
      const configSpy = jest
        .spyOn(service, 'appConfig', 'get')
        .mockReturnValue({ logLevel: 2 });
      const spy = jest.spyOn(service, 'warning');
      service.warning('test');
      expect(spy).toHaveBeenCalled();
      expect(configSpy).toHaveBeenCalled();
    });
    it('should call Warning with log level 1', () => {
      const configSpy = jest
        .spyOn(service, 'appConfig', 'get')
        .mockReturnValue({ logLevel: 2 });
      const spy = jest.spyOn(service, 'warning');
      service.warning('test');
      expect(spy).toHaveBeenCalled();
      expect(configSpy).toHaveBeenCalled();
    });
  });
  describe('Error', () => {
    it('should call Error with log level 0', () => {
      const configSpy = jest
        .spyOn(service, 'appConfig', 'get')
        .mockReturnValue({ logLevel: 3 });
      const spy = jest.spyOn(service, 'error');
      service.error('test');
      expect(spy).toHaveBeenCalled();
      expect(configSpy).toHaveBeenCalled();
    });
    it('should call debug with log level 1', () => {
      const configSpy = jest
        .spyOn(service, 'appConfig', 'get')
        .mockReturnValue({ logLevel: 3 });
      const spy = jest.spyOn(service, 'error');
      service.error('test');
      expect(spy).toHaveBeenCalled();
      expect(configSpy).toHaveBeenCalled();
    });
  });
});
