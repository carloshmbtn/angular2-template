import {Component} from 'angular2/core';
import {Aluno} from '../models/aluno';

@Component({
    selector: "cadastro",
    templateUrl: "app/views/cadastro.html"
})

export class CadastroComponent {
    private aluno: Aluno;

    constructor(){
        this.aluno = new Aluno(undefined, undefined);
    }

    enviar(): void {
        console.log(this.aluno);
    }
}
