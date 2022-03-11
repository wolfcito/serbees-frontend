import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  miId:number = -1;
  tieneExperiencia: boolean= false;

  constructor() { }

  getMiId(){
    return this.getMiId;
  }

  guardar(id: number){
    this.miId = id;
    this.tieneExperiencia = id===1;
  }

  getExperiencia(){
    return this.tieneExperiencia;
  }
  setExperiencia(){

  }
}
