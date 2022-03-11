import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { ServicioService } from '@servicio/shared/service/servicio.service';

import { ReservarServicioComponent } from './reservar-servicio.component';

describe('ReservarServicioComponent', () => {
  let component: ReservarServicioComponent;
  let fixture: ComponentFixture<ReservarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarServicioComponent ],
      imports: [HttpClientModule],
      providers: [ServicioService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
