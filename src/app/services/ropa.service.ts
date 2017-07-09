import { Injectable } from '@angular/core';

@Injectable()

export class RopaService {
    public nombre_prenda = 'Pantalones vaqueros';

    prueba(prenda) {
        return prenda;
    }

}