import { NgModule } from '@angular/core';
import { BrowserModule } from  '@angular/platform-browser';
import { AppComponent } from './app.component';
import {Cronometro} from "./cronometro";
import {RelojFactory} from "./clases/relojFactory";

@NgModule({
    imports:        [ BrowserModule ],
    declarations:   [ AppComponent, Cronometro ],
    bootstrap:      [ AppComponent ],
    providers:      [ RelojFactory ]
})

export class AppModule{

}
