import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-dados',
  templateUrl: './usuario-dados.component.html',
  styleUrl: './usuario-dados.component.scss'
})
export class UsuarioDadosComponent {
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) { }
}
