import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../shared/services/usuario.service';
import { Usuario } from '../../shared/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  usuario: Usuario = new Usuario("", "", "");

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, public usuarioService: UsuarioService) { }

  login(): void {
    //
  }

}
