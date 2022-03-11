import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservarServicioComponent } from './components/reservar-servicio/reservar-servicio.component';
import { ServicioComponent } from './components/servicio/servicio.component';

const routes: Routes = [
  {
    path: '',
    component: ServicioComponent,
    children: [
      {
        path: 'registrar',
        component: ReservarServicioComponent
      },
      {
        path: 'calificar',
        component: ServicioComponent
      },
      {
        path: 'reservar',
        component: ServicioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioRoutingModule { }
