import { Component } from '@angular/core';
import { Empleado } from './empleado';


@Component({
    selector: 'empleado-tag',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent {

    public titulo = 'Componente empleado';
    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    constructor() {
        this.empleado = new Empleado('Miguel', 39, 'programador', true);
        this.trabajadores = [
            new Empleado('pablo', 23, 'junior', true),
            new Empleado('nacho', 54, 'becario', true),
            new Empleado('jose', 21, 'leader', false)
        ];

    }


    ngOnInit() {
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

}