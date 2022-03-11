import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarServicioComponent } from './reservar-servicio.component';

describe('ReservarServicioComponent', () => {
  let component: ReservarServicioComponent;
  let fixture: ComponentFixture<ReservarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarServicioComponent ]
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
