import { Injectable } from '@angular/core';
import { Reloj } from './reloj';

@Injectable()
export class RelojFactory{

    constructor(){

    }

    nuevoReloj(hora:number, minuto:number, segundo:number ):Reloj{

            return new Reloj(hora,minuto,segundo);

    }
}

