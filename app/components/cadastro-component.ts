import {Component} from 'angular2/core';
import {Aluno} from '../models/aluno';

@Component({
    selector: "cadastro",
    templateUrl: "app/views/cadastro.html"
})

export class CadastroComponent {
    private aluno: Aluno;
    private cursos: Object[];

    constructor(){
        this.aluno = new Aluno(undefined, undefined, undefined);
        this.cursos = [
            {"nome": "Selecione...", "sigla": null},
            {"nome": "Análise de Desenvolvimento de Sistemas", "sigla": "TADS"},
            {"nome": "Ciências da Computação", "sigla": "CC"},
            {"nome": "Sistemas de Informação", "sigla": "SI"}
        ];
    }

    enviar(): void {
        console.log(this.aluno);
    }
}
