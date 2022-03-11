import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioRoutingModule } from './servicio-routing.module';
import { ServicioComponent } from './components/servicio/servicio.component';
import { SharedModule } from '@shared/shared.module';
import { ReservarServicioComponent } from './components/reservar-servicio/reservar-servicio.component';
import { RegistrarServicioComponent } from './components/registrar-servicio/registrar-servicio.component';
import { CalificarServicioComponent } from './components/calificar-servicio/calificar-servicio.component';


@NgModule({
  declarations: [
    ServicioComponent,
    ReservarServicioComponent,
    RegistrarServicioComponent,
    CalificarServicioComponent
  ],
  imports: [
    CommonModule,
    ServicioRoutingModule,
    SharedModule
  ]
})
export class ServicioModule { }
