import {Component} from 'angular2/core';
import {Aluno} from '../models/aluno';

@Component({
    selector: "cadastro",
    templateUrl: "app/views/cadastro.html"
})

export class CadastroComponent {
    private aluno: Aluno;
    private cursos: Object[];
    private sucesso: boolean;
    private alunoText: string;

    constructor(){
        this.aluno = new Aluno(undefined, undefined, undefined);
        this.cursos = [
            {"nome": "Selecione...", "sigla": null},
            {"nome": "Análise de Desenvolvimento de Sistemas", "sigla": "TADS"},
            {"nome": "Ciências da Computação", "sigla": "CC"},
            {"nome": "Sistemas de Informação", "sigla": "SI"}
        ];
        this.sucesso = false;
    }

    enviar(): void {
        console.log(this.aluno);
        this.alunoText = JSON.stringify(this.aluno);
        this.sucesso = true;
    }

    esconder():void{
        this.sucesso = false;
    }
}
