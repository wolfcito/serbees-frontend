import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PreReservaServicio } from '@servicio/shared/model/pre-reserva-servicio';
import { ServicioService } from '@servicio/shared/service/servicio.service';
import Swal from 'sweetalert2';

// interface Country {
//   name: string;
//   flag: string;
//   area: number;
//   population: number;
// }

// const COUNTRIES: Country[] = [
//   {
//     name: 'Russia',
//     flag: 'f/f3/Flag_of_Russia.svg',
//     area: 17075200,
//     population: 146989754
//   },
//   {
//     name: 'Canada',
//     flag: 'c/cf/Flag_of_Canada.svg',
//     area: 9976140,
//     population: 36624199
//   },
//   {
//     name: 'United States',
//     flag: 'a/a4/Flag_of_the_United_States.svg',
//     area: 9629091,
//     population: 324459463
//   },
//   {
//     name: 'China',
//     flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
//     area: 9596960,
//     population: 1409517397
//   }
// ];


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

  constructor(protected servicioService: ServicioService) { }

  ngOnInit(): void {
    this.obtenerServiciosDisponibles();
  }

  reservar(servicioSeleccionado: PreReservaServicio) {
    this.construirFormularioServicio(servicioSeleccionado);
    this.calcularCosto();
    console.log(">>>", this.servicioForm.value)
    if (this.servicioForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Se debe ingresar valores enteros positivos.",
      });

      this.servicioForm.markAllAsTouched();
    } else {
      this.servicioService.reservar(this.servicioForm.value).subscribe(data => {
        console.log(data)
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
        idReserva: new FormControl(servicioSeleccionado.idReserva, [Validators.required]),
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

  calcularCosto(){
    console.log(this.costoTipo)
    console.log(this.cantidad)
    console.log(this.costo)
    let valores: string[] = this.costoTipo.split('-');
    console.log(valores)
    this.costo = Number(valores[0]);
    this.unaModalidad = valores[1];
  }

}
