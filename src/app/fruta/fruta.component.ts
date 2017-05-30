import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})

export class FrutaComponent {
  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

  public cadena: string = "cadena"
  public numero: number = 23
  public boleano: boolean = true
  public variableArray: Array<string> = ["cadena1", "cadena2"]
  public tipoAny: Array<any> = ["cadena1", "12"]
}
