import { HttpClient } from '@angular/common/http';
// import { CalificaServicio } from '../model/calificar-servicio';
// import { MejorUsuario } from '../model/mejor-usuario';
// import { RegistroUsuario } from '../model/registro-usuario';
// import { ReservaUsuario } from '../model/reservar-usuario';
// import { Observable } from 'rxjs';
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

  // const mockConsulta: MejorUsuario[] = [{
  //   nombreUsuario: 'test',
  //   experiencia: 1,
  //   nombreCategoria: 'D',
  //   nivelSatisfacion: 'SUP',
  //   modalidad: 'PH',
  // }]

  // it('Deberia Consultar correctamente', () => {
  //   servicePost.consultar().subscribe( result => {
  //     expect(result).toEqual(mockConsulta)
  //     // done()
  //   })
  // });

  // const mockRegistroUsuario = new RegistroUsuario(1,1);

  // it('Deberia Registrar correctamente', () => {
  //   servicePost.registrar(mockRegistroUsuario).subscribe( result => {
  //     expect(result).toBeTruthy();
  //     // done() 
  //   })
  // });

  // const mockReservar = new ReservaUsuario(1,1,'PH',2,100,'R')
  // it('Deberia Reservar correctamente', () => {
  //   servicePost.reservar(mockReservar).subscribe( result => {
  //     expect(result).toBeTruthy();
  //     // done() 
  //   })
  // });

  // const mockCalificar = new CalificaServicio(1,'SUP','C');
  
  // it('Deberia Calificar correctamente', () => {
  //   servicePost.calificar(mockCalificar).subscribe( result => {
  //     expect(result).toBeTruthy();
  //     // done() 
  //   })
  // });

});