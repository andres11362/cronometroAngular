import { Component } from '@angular/core';
import { Reloj } from './clases/reloj';
import { RelojFactory } from "./clases/relojFactory";

@Component({
    selector: 'cronometro',
    templateUrl: 'app/cronometro.html'
})

export class Cronometro{
    public hora:number = 0;
    public minutos:number = 0;
    public segundos:number = 0;

    /*public horaLapso:number;
     public minutoLapso:number;
     public segundoLapso:number;*/

    public collection:Array<Reloj> = [];
    public contador:any;

    private rf:RelojFactory;

    constructor(relojFactory:RelojFactory){
        this.rf = relojFactory;
    }

    start(){
        if(this.contador == undefined){
            this.contador =setInterval(()=>{
                this.segundos += 1;
                if(this.segundos == 60){
                    this.segundos = 0;
                    this.minutos +=1;
                    if(this.minutos == 60){
                        this.minutos = 0;
                        this.hora += 1;
                        if(this.hora == 24){
                            this.hora = 0;
                        }
                    }
                }
            },10);
        }

    }

    lapsus(){
        let obj = this.rf.nuevoReloj(this.hora, this.minutos, this.segundos);

        /*obj.hora = this.hora;
        obj.minuto = this.minutos;
        obj.segundo = this.segundos;*/

        this.collection.push(obj);

        /*this.horaLapso = this.hora;
         this.minutoLapso = this.minutos;
         this.segundoLapso = this.segundos;*/
    }

    end(){
        clearInterval(this.contador);
        this.hora = 0;
        this.minutos = 0;
        this.segundos = 0;
        this.contador = null;

    }

}
