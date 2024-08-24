import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../shared/models/usuario';
import { Disciplina } from '../../../shared/models/disciplina';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { UsuarioService } from '../../../shared/services/usuario.service';
import { MensagemSweetService } from '../../../shared/services/mensagem-sweet.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { elementAt } from 'rxjs';


@Component({
  selector: 'disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss'
})
export class DisciplinasComponent implements OnInit {
  usuario!: Usuario | null;
  disciplina: Disciplina = new Disciplina("","");
  formulario!: FormGroup;


  constructor(private rotaAtual: ActivatedRoute,private fb: FormBuilder ,private roteador: Router, private localStorageService: LocalStorageService, private usuarioService: UsuarioService, public sweet: MensagemSweetService) { }

  ngOnInit(): void {
    this.usuario = this.localStorageService.lerUsuario();
    this.formulario = this.fb.group({
      id: this.disciplina.id,
      nome: this.disciplina.nome,
      descricao: this.disciplina.descricao  
    });

    if(this.usuario){
      if(this.usuario.disciplinas.length > 0){
        this.disciplina = this.usuario.disciplinas[0];
      }
    }

    this.formulario.patchValue({
      id: this.disciplina.id,
      nome: this.disciplina.nome,
      descricao: this.disciplina.descricao
    });

  }


  criarDisciplina() {
    this.usuarioService.criarDisciplina(this.disciplina).subscribe({
      next: res => this.sweet.sucesso("disciplina criada"),
      error: err => this.sweet.erro(err)
    });
  }
  alterarDisciplina(){
    let disciplinaalt = this.formulario.value;
    this.usuarioService.alterarDisciplina(disciplinaalt);
  }
}
