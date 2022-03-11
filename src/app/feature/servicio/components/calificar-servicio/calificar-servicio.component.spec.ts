import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { ServicioService } from '@servicio/shared/service/servicio.service';

import { CalificarServicioComponent } from './calificar-servicio.component';

describe('CalificarServicioComponent', () => {
  let component: CalificarServicioComponent;
  let fixture: ComponentFixture<CalificarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificarServicioComponent ],
      imports: [HttpClientModule],
      providers: [ServicioService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.miIdCliente).toBe(1);
  });
});
