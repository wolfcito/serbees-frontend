import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { ServicioService } from '@servicio/shared/service/servicio.service';

import { RegistrarServicioComponent } from './registrar-servicio.component';

describe('RegistrarServicioComponent', () => {
  let component: RegistrarServicioComponent;
  let fixture: ComponentFixture<RegistrarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarServicioComponent ],
      imports: [HttpClientModule],
      providers: [ServicioService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
