import {Component} from '@angular/core';
import {Cronometro} from '../app/cronometro';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [Cronometro]
})

export class AppComponent{


}
