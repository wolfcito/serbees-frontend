import { Component, OnInit } from '@angular/core';
import { StorageService } from '@core/services/storage.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit {

  experienciaValida: boolean = true;
  constructor(protected storageService: StorageService) {
  }
  
  ngOnInit(): void {
    this.experienciaValida = this.storageService.getExperiencia();
  }

}
