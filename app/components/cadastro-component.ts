import {Component} from 'angular2/core';
import {Aluno} from '../models/aluno';
import {ControlGroup, FormBuilder, Validators, AbstractControl} from 'angular2/common';
import {RGAValidator} from '../validators/rga-validator';

@Component({
    selector: "cadastro",
    templateUrl: "app/views/cadastro.html"
})

export class CadastroComponent {
    private aluno: Aluno;
    private cursos: Object[];
    private sucesso: boolean;
    private erro: boolean;
    private alunoText: string;
    private alunoForm: ControlGroup;

    constructor(fb: FormBuilder){
        this.aluno = new Aluno(undefined, undefined, undefined);
        this.cursos = [
            {"nome": "Selecione...", "sigla": null},
            {"nome": "Análise de Desenvolvimento de Sistemas", "sigla": "TADS"},
            {"nome": "Ciências da Computação", "sigla": "CC"},
            {"nome": "Sistemas de Informação", "sigla": "SI"}
        ];
        this.sucesso = false;
        this.buildForm(fb);
    }

    buildForm(fb: FormBuilder): void {
        this.alunoForm = fb.group({
            nome: ['', Validators.required],
            RGA: ['', Validators.compose([
                Validators.required,
                RGAValidator.validate
            ])]
        });
    }

    hasErrors(): boolean {
        var hasE: boolean = false;
        for(var controlName in this.alunoForm.controls) {
            var control: AbstractControl = this.alunoForm.controls[controlName];
            if(!control.valid /*&& !control.pristine*/) {
                hasE = true;
                break;
            }
        }
        this.erro = hasE;
        return hasE;
    }

    enviar(): void {
        if(!this.hasErrors()){
            console.log(this.aluno);
            this.alunoText = JSON.stringify(this.aluno);
            this.sucesso = true;
        }
    }

    esconder():void{
        this.sucesso = false;
    }
}
