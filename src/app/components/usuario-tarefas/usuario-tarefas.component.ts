import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-tarefas',
  templateUrl: './usuario-tarefas.component.html',
  styleUrl: './usuario-tarefas.component.scss'
})
export class UsuarioTarefasComponent {
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) { }

}
