import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-servicio',
  templateUrl: './registrar-servicio.component.html',
  styleUrls: ['./registrar-servicio.component.scss']
})
export class RegistrarServicioComponent implements OnInit {

  servicioForm: FormGroup;

  private miIdProveedor: number = 1;  
  
  constructor() { }

  ngOnInit(): void {
    this.construirFormularioServicio();
  }

  private construirFormularioServicio() {
    this.servicioForm = new FormGroup({
      idCategoria: new FormControl(1, [Validators.required]),
      idUsuarioPro: new FormControl(this.miIdProveedor, [Validators.required])
    });
  }

  registrar() {   
    console.log("test") 
    // this.servicioService.registrar(this.servicioForm.value).subscribe(data => {
    //   console.log(data)
    //   Swal.fire({
    //     icon: 'success',
    //     title: `Servcico registrado correctamente.`,
    //     showConfirmButton: false,
    //     timer: 1500
    //   })
    // }, response => {
    //   this.status = 'Error';
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: response.error.mensaje,
    //   })
    // });
  }

}
