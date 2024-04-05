import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { LoggerAdapter } from '@iamanderson/shared-providers/logger';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { mockHttpService } from '../mocks/http.service.mock';

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

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: mockHttpService },
        {
          provide: LoggerAdapter,
          useValue: loggerService
        }
      ]
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    it('should call and return value', async () => {
      const url = 'http://www.bde.es/';

      const spyGet = jest.spyOn(service, 'get').mockReturnThis();

      await service.get(url);

      expect(spyGet).toHaveBeenCalled();
      expect(spyGet).toHaveBeenCalledWith(url);
    });

    it('should call and throw error', async () => {
      const url = 'http://www.bde.es/';
      const res = new HttpErrorResponse({
        error: 'test 404',
        status: 404,
        statusText: 'Not Found'
      });

      const httpSpy = jest
        .spyOn(mockHttpService, 'get')
        .mockReturnValue(throwError(res));

      await expect(service.get(url).toPromise()).rejects.toEqual(res);

      expect(httpSpy).toHaveBeenCalled();
    });
  });
  describe('put', () => {
    it('should call and return value', async () => {
      const url = 'http://www.bde.es/';

      const spyGet = jest.spyOn(service, 'put').mockReturnThis();

      await service.put(url);

      expect(spyGet).toHaveBeenCalled();
      expect(spyGet).toHaveBeenCalledWith(url);
    });

    it('should call and throw error', async () => {
      const url = 'http://www.bde.es/';
      const res = new HttpErrorResponse({
        error: 'test 404',
        status: 404,
        statusText: 'Not Found'
      });

      const httpSpy = jest
        .spyOn(mockHttpService, 'put')
        .mockImplementation(() => throwError(res));

      await expect(service.put(url).toPromise()).rejects.toEqual(res);
      expect(httpSpy).toHaveBeenCalled();
    });
  });
  describe('post', () => {
    it('should call and return value', async () => {
      const url = 'http://www.bde.es/';

      const spyGet = jest.spyOn(service, 'post').mockReturnThis();

      await service.post(url);

      expect(spyGet).toHaveBeenCalled();
      expect(spyGet).toHaveBeenCalledWith(url);
    });

    it('should call and throw error', async () => {
      const url = 'http://www.bde.es/';
      const res = new HttpErrorResponse({
        error: 'test 404',
        status: 404,
        statusText: 'Not Found'
      });

      const httpSpy = jest
        .spyOn(mockHttpService, 'post')
        .mockReturnValue(throwError(res));

      await expect(service.post(url).toPromise()).rejects.toEqual(res);

      expect(httpSpy).toHaveBeenCalled();
    });
  });
});
