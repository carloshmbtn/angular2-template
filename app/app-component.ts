import {Component} from 'angular2/core';
import {CadastroComponent} from './components/cadastro-component';

@Component({
    selector: 'meu-app',
    template: '<cadastro></cadastro>',
    directives: [CadastroComponent]
})
export class AppComponent{

}
