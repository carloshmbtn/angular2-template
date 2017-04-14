import {Component} from 'angular2/core';

@Component({
    selector: 'meu-app',
    template: `
        <h1>Meu primeiro app com o Angular 2! {{teste}}</h1>
    `
})
export class AppComponent{

    private teste: String;

    constructor(){
        this.teste = "Olá Marilene";
    }
}
