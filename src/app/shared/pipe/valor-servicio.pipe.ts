import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valorServicio'
})
export class ValorServicioPipe implements PipeTransform {

  transform(value: number): string {
    return value === 1 ? 'No me ha parecido muy bueno' :
      value === 2 ? 'Ha estado bien pero puede mejorar' :
        value === 3 ? 'Estuvo excelente' : '';
  }

}
