import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../shared/models/usuario';
import { Disciplina } from '../../../shared/models/disciplina';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { UsuarioService } from '../../../shared/services/usuario.service';
import { MensagemSweetService } from '../../../shared/services/mensagem-sweet.service';


@Component({
  selector: 'disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss'
})
export class DisciplinasComponent implements OnInit {
  usuario!: Usuario | null;
  disciplina: Disciplina = new Disciplina("","");

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, private localStorageService: LocalStorageService, private usuarioService: UsuarioService, public sweet: MensagemSweetService) { }

  ngOnInit(): void {
    this.usuario = this.localStorageService.lerUsuario();
  }

  criarDisciplina() {
    this.usuarioService.criarDisciplina(this.disciplina).subscribe({
      next: res => this.sweet.sucesso("disciplina criada"),
      error: err => this.sweet.erro(err)
    });
  }
}
