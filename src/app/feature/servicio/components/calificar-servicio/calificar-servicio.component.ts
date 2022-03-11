import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CalificaServicio } from '@servicio/shared/model/calificar-servicio';
import { RegistroReserva } from '@servicio/shared/model/registro-reserva';
import { ServicioService } from '@servicio/shared/service/servicio.service';
import Swal from 'sweetalert2';

import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-calificar-servicio',
  templateUrl: './calificar-servicio.component.html',
  styleUrls: ['./calificar-servicio.component.scss']
})
export class CalificarServicioComponent implements OnInit {

  nivelSatisfaccion: string;
  displayedColumns: string[] = ['col1', 'col2', 'col3', 'col4'];
  status: 'Cargando...' | 'Error' | 'Exitoso' | 'Inicial' = 'Inicial';
  todasMisReservas: RegistroReserva[] = [];
  estado: string = 'C';
  miIdCliente: number = 1;

  closeResult = null;
  currentRate: number = 2;

  calificaionServicio: CalificaServicio

  constructor(
    protected servicioService: ServicioService,
    config: NgbRatingConfig, 
    private modalService: NgbModal) {

    config.max = 3;
  }

  ngOnInit(): void {
    this.obtenerServiciosReservados(this.miIdCliente);
  }

  calificar(calificaionServicio: CalificaServicio) {

    this.servicioService.calificar(calificaionServicio).subscribe(data => {
      if (environment.production) {
        console.log("respuesta", data)
      }
      this.obtenerServiciosReservados(this.miIdCliente);
      Swal.fire({
        icon: 'success',
        title: `Servicio calificado correctamente.`,
        showConfirmButton: false,
        timer: 1500
      })
    }, response => {
      this.status = 'Error';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: response.error.mensaje,
      })
    });

  }

  private obtenerServiciosReservados(miIdCliente) {
    this.servicioService.consultarMisReservas(miIdCliente).subscribe((todasMisReservas) => {
      this.todasMisReservas = todasMisReservas;
    })
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        // console.log("close ", result)
        this.calificaionServicio = {
          id: result.idReserva,
          nivelSatisfacion: this.obtenerValorSatisfacion(),
          estado: this.estado
        }
        // console.log("final ", this.calificaionServicio)
        this.calificar(this.calificaionServicio);

      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  private obtenerValorSatisfacion() {
    return this.currentRate == 1 ? 'INF' : this.currentRate == 2 ? 'NOR' : this.currentRate == 3 ? 'SUP' : '';
  }
}
