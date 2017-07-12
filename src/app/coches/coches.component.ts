import { Component } from '@angular/core';
import { Coche } from 'app/coches/coche';


@Component({
    selector: 'coches',
    templateUrl: './coches.component.html'
})

export class CochesComponent {
    public coche: Coche;
    public coches: Coche[];

    constructor() {
        this.coche = new Coche('', '', '');
        this.coches = [
            new Coche('Seat Panda', '70', 'blanco'),
            new Coche('Ford Fiesta', '120', 'negro')
        ];
    }

    onSubmit() {
        this.coches.push(this.coche);
        this.coche = new Coche('', '', '');
    }

}