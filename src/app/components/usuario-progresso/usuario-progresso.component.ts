import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../shared/models/usuario';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { UsuarioService } from '../../shared/services/usuario.service';

@Component({
  selector: 'app-usuario-progresso',
  templateUrl: './usuario-progresso.component.html',
  styleUrl: './usuario-progresso.component.scss'
})
export class UsuarioProgressoComponent {
  usuario: Usuario | null;

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, private localStorageService: LocalStorageService, public usuarioService: UsuarioService) {
    this.usuario = this.localStorageService.lerUsuario();
  }



}
