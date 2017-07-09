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
    

    //variables y alcance
    var uno = 8;
    var dos = 15;

    if(uno === 8){
      let uno = 3;
      var dos = 88;
      console.log("dentro del if: " + uno + " " + dos);
    }

    console.log("fuera del if: " + uno + " " + dos);
  }

  cambiarValor(){
    this.cadena = "esto es una cadena";
  }
}
