import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})

export class FrutaComponent {
  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

  public cadena: string;
  public numero: number;
  public boleano: boolean;
  public variableArray: Array<string>;
  public tipoAny: Array<any>;

  constructor(){

    this.cadena = "cadena"
    console.log(this.cadena);
  }

  ngOnInit(){
    this.cambiarValor();
    console.log(this.cadena);
    
  }

  cambiarValor(){
    this.cadena = "esto es una cadena";
  }
}
