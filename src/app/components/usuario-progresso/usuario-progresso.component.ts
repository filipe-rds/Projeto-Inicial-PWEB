import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-progresso',
  templateUrl: './usuario-progresso.component.html',
  styleUrl: './usuario-progresso.component.scss'
})
export class UsuarioProgressoComponent {
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) { }

}
