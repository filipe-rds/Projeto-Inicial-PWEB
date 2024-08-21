import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-disciplinas',
  templateUrl: './usuario-disciplinas.component.html',
  styleUrl: './usuario-disciplinas.component.scss'
})
export class UsuarioDisciplinasComponent {
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) { }

}
