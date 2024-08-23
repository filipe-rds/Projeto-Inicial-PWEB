import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../shared/models/usuario';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { UsuarioService } from '../../../shared/services/usuario.service';

@Component({
  selector: 'tarefas',
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.scss'
})
export class TarefasComponent implements OnInit {
  usuario!: Usuario | null;

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, private localStorageService: LocalStorageService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuario = this.localStorageService.lerUsuario();
  }

}