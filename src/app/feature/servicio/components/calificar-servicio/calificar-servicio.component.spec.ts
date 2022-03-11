import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarServicioComponent } from './calificar-servicio.component';

describe('CalificarServicioComponent', () => {
  let component: CalificarServicioComponent;
  let fixture: ComponentFixture<CalificarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificarServicioComponent ]
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
});
