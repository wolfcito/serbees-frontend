import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '@servicio/shared/model/categorias';
import { ServicioService } from '@servicio/shared/service/servicio.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-servicio',
  templateUrl: './registrar-servicio.component.html',
  styleUrls: ['./registrar-servicio.component.scss']
})
export class RegistrarServicioComponent implements OnInit {

  servicioForm: FormGroup;
  categorias: Categoria[] = [];
  private miIdProveedor: number = 1;
  status: 'Cargando...' | 'Error' | 'Exitoso' | 'Inicial' = 'Inicial';
  valorInvalido: string = 'El item seleccionado es invalido';

  constructor(protected servicioService: ServicioService) { }

  ngOnInit(): void {
    this.construirFormularioServicio();
    this.obtenerServicios();
  }

  private construirFormularioServicio() {
    this.servicioForm = new FormGroup({
      idCategoria: new FormControl(-1, [Validators.required]),
      idUsuarioPro: new FormControl(this.miIdProveedor, [Validators.required])
    });
  }

  registrar() {
    if (this.servicioForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: this.valorInvalido,
      })
    } else {
      this.servicioService.registrar(this.servicioForm.value).subscribe(data => {
        if (environment.production) {
          console.log(data)
        }
        Swal.fire({
          icon: 'success',
          title: `Servicio registrado correctamente.`,
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

  private obtenerServicios() {
    this.servicioService.consultarCategorias().subscribe((categorias) => {
      this.categorias = categorias;
    })
  }

}
