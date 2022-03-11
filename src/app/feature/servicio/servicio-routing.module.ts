import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalificarServicioComponent } from './components/calificar-servicio/calificar-servicio.component';
import { RegistrarServicioComponent } from './components/registrar-servicio/registrar-servicio.component';
import { ReservarServicioComponent } from './components/reservar-servicio/reservar-servicio.component';
import { ServicioComponent } from './components/servicio/servicio.component';

const routes: Routes = [
  {
    path: '',
    component: ServicioComponent,
    children: [
      {
        path: 'registrar',
        component: RegistrarServicioComponent
      },
      {
        path: 'calificar',
        component: CalificarServicioComponent
      },
      {
        path: 'reservar',
        component: ReservarServicioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioRoutingModule { }
