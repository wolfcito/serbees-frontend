import { Component, OnInit , ViewChild} from '@angular/core';
import { StorageService } from '@core/services/storage.service';
import { Usuario } from '@servicio/shared/model/usuario';
import { ServicioService } from '@servicio/shared/service/servicio.service';

import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

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

  staticAlertClosed = false;
  successMessage = '';
  private _success = new Subject<string>();

  finalizarEjecucion

  @ViewChild('staticAlert', {static: false}) staticAlert: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  constructor(protected storageService: StorageService, protected loginService: ServicioService) { }


  ingresarValido() {
    this.status = 'Cargando...';
    this.loginService.login(this.usuarioValidador)
      .subscribe(data => {
        this.identificacion = data.valor;
        this.status = 'Exitoso';
        this.storageService.guardar(this.identificacion);
       this.changeSuccessMessage("Con Experiencia");
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
        this.changeSuccessMessage("Sin Experiencia");
      }, response => {
        this.status = 'Error';
        console.log(response.error.mensaje)
        this.storageService.guardar(1);
      });
  }

  ngOnInit(): void {
    this.usuarioInValido = new Usuario("test1",'1234');
    this.usuarioValidador = new Usuario("test0",'1234');

    this.finalizarEjecucion = setTimeout(() => this.staticAlert.close(), 20000);

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  public changeSuccessMessage(sms: string) { this._success.next(`Se ha logueado correctamente - Usuario ${sms}`); }


}
