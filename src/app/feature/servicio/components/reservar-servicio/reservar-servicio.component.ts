import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PreReservaServicio } from '@servicio/shared/model/pre-reserva-servicio';
import { ServicioService } from '@servicio/shared/service/servicio.service';
import Swal from 'sweetalert2';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-reservar-servicio',
  templateUrl: './reservar-servicio.component.html',
  styleUrls: ['./reservar-servicio.component.scss']
})
export class ReservarServicioComponent implements OnInit {

  // countries = COUNTRIES;

  status: 'Cargando...' | 'Error' | 'Exitoso' | 'Inicial' = 'Inicial';
  servicioForm: FormGroup;

  todosServicios: PreReservaServicio[] = [];

  unaModalidad = 'PH'; //: 'PH' | 'PD' | 'PS'  = 'PH';
  cantidad: number = 1;
  costo: number = -1;
  estado: string = 'R';
  costoTipo: string = "";

  miIdCliente: number = 1;
  closeResult = null;

  miServicioSeleccionado: PreReservaServicio

  constructor(protected servicioService: ServicioService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.obtenerServiciosDisponibles();
  }

  reservar(servicioSeleccionado: PreReservaServicio) {
    this.calcularCosto();
    this.construirFormularioServicio(servicioSeleccionado);
    // console.log(">>>", this.servicioForm.value)
    if (this.servicioForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Se debe ingresar valores enteros positivos.",
      });

      this.servicioForm.markAllAsTouched();
    } else {
      this.servicioService.reservar(this.servicioForm.value).subscribe(data => {
        if (environment.production) {
          console.log(data)
        }
        this.obtenerServiciosDisponibles();
        Swal.fire({
          icon: 'success',
          title: `Servicio reservado correctamente.`,
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

  }

  private construirFormularioServicio(servicioSeleccionado: PreReservaServicio) {
    if (this.cantidad <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Se debe ingresar valores enteros positivos.",
      })
    } else {
      this.servicioForm = new FormGroup({
        id: new FormControl(servicioSeleccionado.idReserva, [Validators.required]),
        idUsuarioCli: new FormControl(this.miIdCliente, [Validators.required]),
        modalidad: new FormControl(this.unaModalidad, [Validators.required]),
        cantidad: new FormControl(this.cantidad, [Validators.required]),
        costo: new FormControl(this.costo, [Validators.required, Validators.min(1)]),
        estado: new FormControl(this.estado, [Validators.required]),

      });
    }



  }

  private obtenerServiciosDisponibles() {
    this.servicioService.consultarTodos().subscribe((todosServicios) => {
      this.todosServicios = todosServicios;
    })
  }

  obtenerModalidad() {
    return this.unaModalidad === 'PH' ? 'HORAS' : this.unaModalidad === 'PD' ? 'DIAS' : 'SEMANAS';
  }

  calcularCosto() {
    // console.log(this.costoTipo)
    // console.log(this.cantidad)
    // console.log(this.costo)
    let valores: string[] = this.costoTipo.split('-');
    // console.log(valores)
    this.costo = Number(valores[0]);
    this.unaModalidad = valores[1];
  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {

        this.reservar(result);

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


}
