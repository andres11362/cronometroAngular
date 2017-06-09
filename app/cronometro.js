"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var relojFactory_1 = require("./clases/relojFactory");
var Cronometro = (function () {
    function Cronometro(relojFactory) {
        this.hora = 0;
        this.minutos = 0;
        this.segundos = 0;
        /*public horaLapso:number;
         public minutoLapso:number;
         public segundoLapso:number;*/
        this.collection = [];
        this.rf = relojFactory;
    }
    Cronometro.prototype.start = function () {
        var _this = this;
        if (this.contador == undefined) {
            this.contador = setInterval(function () {
                _this.segundos += 1;
                if (_this.segundos == 60) {
                    _this.segundos = 0;
                    _this.minutos += 1;
                    if (_this.minutos == 60) {
                        _this.minutos = 0;
                        _this.hora += 1;
                        if (_this.hora == 24) {
                            _this.hora = 0;
                        }
                    }
                }
            }, 10);
        }
    };
    Cronometro.prototype.lapsus = function () {
        var obj = this.rf.nuevoReloj(this.hora, this.minutos, this.segundos);
        /*obj.hora = this.hora;
        obj.minuto = this.minutos;
        obj.segundo = this.segundos;*/
        this.collection.push(obj);
        /*this.horaLapso = this.hora;
         this.minutoLapso = this.minutos;
         this.segundoLapso = this.segundos;*/
    };
    Cronometro.prototype.end = function () {
        clearInterval(this.contador);
        this.hora = 0;
        this.minutos = 0;
        this.segundos = 0;
        this.contador = null;
    };
    Cronometro = __decorate([
        core_1.Component({
            selector: 'cronometro',
            templateUrl: 'app/cronometro.html'
        }), 
        __metadata('design:paramtypes', [relojFactory_1.RelojFactory])
    ], Cronometro);
    return Cronometro;
}());
exports.Cronometro = Cronometro;
//# sourceMappingURL=cronometro.js.map