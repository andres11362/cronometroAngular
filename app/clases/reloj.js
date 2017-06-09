"use strict";
var Reloj = (function () {
    function Reloj(hora, minuto, segundo) {
        this._hora = hora;
        this._minuto = minuto;
        this._segundo = segundo;
    }
    Object.defineProperty(Reloj.prototype, "hora", {
        get: function () {
            return this._hora;
        },
        set: function (value) {
            this._hora = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reloj.prototype, "minuto", {
        get: function () {
            return this._minuto;
        },
        set: function (value) {
            this._minuto = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reloj.prototype, "segundo", {
        get: function () {
            return this._segundo;
        },
        set: function (value) {
            this._segundo = value;
        },
        enumerable: true,
        configurable: true
    });
    return Reloj;
}());
exports.Reloj = Reloj;
//# sourceMappingURL=reloj.js.map