import { ValorServicioPipe } from './valor-servicio.pipe';

describe('ValorServicioPipe', () => {
  it('create an instance', () => {
    const pipe = new ValorServicioPipe();
    expect(pipe).toBeTruthy();
  });

  it('Testea la salida', () => {
    const pipe = new ValorServicioPipe();
    
    expect(pipe.transform(1)).toBe('No me ha parecido muy bueno');
    expect(pipe.transform(2)).toBe('Ha estado bien pero puede mejorar');
    expect(pipe.transform(3)).toBe('Estuvo excelente');
    expect(pipe.transform(0)).toBe('');
  });

});
