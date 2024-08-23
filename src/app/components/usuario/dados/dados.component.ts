import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../shared/models/usuario';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { UsuarioService } from '../../../shared/services/usuario.service';
import { FormGroup, FormBuilder, EmailValidator } from '@angular/forms';
import { MensagemSweetService } from '../../../shared/services/mensagem-sweet.service';

@Component({
  selector: 'dados',
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.scss'
})
export class DadosComponent implements OnInit {
  usuario!: Usuario | null;
  formulario!: FormGroup;

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, private localStorageService: LocalStorageService, private usuarioService: UsuarioService, private fb: FormBuilder, public sweet: MensagemSweetService) { }

  ngOnInit(): void {
    this.usuario = this.localStorageService.lerUsuario();
    this.formulario = this.fb.group({
      id: this.usuario?.id,
      nome: this.usuario?.nome,
      email: this.usuario?.email,
      senha: this.usuario?.senha,
      disciplinas: this.usuario?.disciplinas
    });
  }
  salvar() {
    const usuarioAtualizado = this.formulario.value;
    if (usuarioAtualizado.nome.length <= 0) {
      this.sweet.info('Nome não pode estar vazio');
      return;
    }
    if (usuarioAtualizado.email.length <= 0) {
      this.sweet.info('E-mail não pode estar vazio');
      return;
    }
    if (usuarioAtualizado.senha.length <= 0) {
      this.sweet.info('Senha não pode estar vazia');
      return;
    }

    this.usuarioService.alterarUsuario(usuarioAtualizado).subscribe(
      () => {
        this.sweet.info("Dados salvos");
        return this.usuario;
      },
      error => {
        this.sweet.info('Erro ao alterar o usuario');
      }
    );
  }

  cancelar() {
    if (this.usuario?.id) {
      this.roteador.navigate([`tela-usuario/${this.usuario.id}`]);
    }
  }

}
