export class Reloj{

    private _hora:number;
    private _minuto:number;
    private _segundo:number;

    constructor(hora:number,minuto:number,segundo:number){
        this._hora = hora;
        this._minuto = minuto;
        this._segundo = segundo;
    }


    get hora(): number {
        return this._hora;
    }

    set hora(value: number) {
        this._hora = value;
    }

    get minuto(): number {
        return this._minuto;
    }

    set minuto(value: number) {
        this._minuto = value;
    }

    get segundo(): number {
        return this._segundo;
    }

    set segundo(value: number) {
        this._segundo = value;
    }
}
