import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class PeticionesService {
    public url: string;

    constructor(private _http: Http) {
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }

    getPrueba() {
        return 'Respuesta desde el servicio';
    }

    getArticulos() {

        // con map capturamos la respuesta, la devolvemos
        // y en su cb le pasamos el nombre de la respuesta
        // con una arrow function el objeto convertido a json
        return this._http.get(this.url)
            .map(respuesta => respuesta.json());
    }

}