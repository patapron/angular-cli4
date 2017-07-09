import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})

export class HomeComponent {
    public titulo = 'Página Principal';

    constructor(
        private _ropaService: RopaService
    ) { }

    ngOnInit(){
        console.log(this._ropaService.prueba('camiseta'));
    }
}