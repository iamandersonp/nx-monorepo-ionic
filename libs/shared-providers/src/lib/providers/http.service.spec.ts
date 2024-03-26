import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { loggerService } from '../mocks/logger.service.mock';
import { LoggerAdapter } from '../adapters/logger-adapter';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('HttpService', () => {
  let service: HttpService;
  const mockHttpService = {
    get: jest.fn().mockImplementation(() => of(true)),
    put: jest.fn().mockImplementation(() => of(true)),
    post: jest.fn().mockImplementation(() => of(true))
  };

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
