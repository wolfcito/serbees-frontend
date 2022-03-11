import { Component, OnInit } from '@angular/core';
import { StorageService } from '@core/services/storage.service';
import { Usuario } from '@servicio/shared/model/usuario';
import { ServicioService } from '@servicio/shared/service/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuarioValidador: Usuario;
  usuarioInValido: Usuario;
  identificacion = 0;
  status: 'Cargando...' | 'Error' | 'Exitoso' | 'Inicial' = 'Inicial';

  constructor(protected storageService: StorageService, protected loginService: ServicioService) { }

  ngOnInit() {
    this.usuarioInValido = new Usuario("test1",'1234');
    this.usuarioValidador = new Usuario("test0",'1234');
  }

  ingresarValido() {
    this.status = 'Cargando...';
    this.loginService.login(this.usuarioValidador)
      .subscribe(data => {
        this.identificacion = data.valor;
        this.status = 'Exitoso';
        this.storageService.guardar(this.identificacion);
       
      }, response => {
        this.status = 'Error';
        console.log(response.error.mensaje)
        this.storageService.guardar(1);
      });
  }

  ingresarInvalido() {
    this.status = 'Cargando...';
    this.loginService.login(this.usuarioInValido)
      .subscribe(data => {
        this.identificacion = data.valor;
        this.status = 'Exitoso';
        this.storageService.guardar(this.identificacion);
       
      }, response => {
        this.status = 'Error';
        console.log(response.error.mensaje)
        this.storageService.guardar(1);
      });
  }

}
