import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioRoutingModule } from './servicio-routing.module';
import { ServicioComponent } from './components/servicio/servicio.component';
import { SharedModule } from '@shared/shared.module';
import { ReservarServicioComponent } from './components/reservar-servicio/reservar-servicio.component';
import { RegistrarServicioComponent } from './components/registrar-servicio/registrar-servicio.component';
import { CalificarServicioComponent } from './components/calificar-servicio/calificar-servicio.component';
import { ValorServicioPipe } from '@shared/pipe/valor-servicio.pipe';


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
  ],
  providers:[ValorServicioPipe]
})
export class ServicioModule { }
