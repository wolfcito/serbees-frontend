import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioRoutingModule } from './servicio-routing.module';
import { ServicioComponent } from './components/servicio/servicio.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ServicioComponent
  ],
  imports: [
    CommonModule,
    ServicioRoutingModule,
    SharedModule
  ]
})
export class ServicioModule { }