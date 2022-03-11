import { HttpClient } from '@angular/common/http';
// import { TestBed } from '@angular/core/testing';

import { ServicioService } from './servicio.service';

describe('Servicio HTTP GET/POST', () => {
  let serviceGet: ServicioService;
  let servicePost: ServicioService;
  let httpClientSpyGet: jasmine.SpyObj<HttpClient>;
  let httpClientSpyPost: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(ServicioService);
    httpClientSpyGet = jasmine.createSpyObj('HttpClient', ['get']);
    serviceGet = new ServicioService(httpClientSpyGet as any);

    httpClientSpyPost = jasmine.createSpyObj('HttpClient', ['post']);
    servicePost = new ServicioService(httpClientSpyPost as any);
  });

  it('Deberia crearse el servicio GET correctamente', () => {
    expect(serviceGet).toBeTruthy();
  });

  it('Deberia crearse el servicio POST correctamente', () => {
    expect(servicePost).toBeTruthy();
  });

});