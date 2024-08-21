import { Component} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../shared/services/usuario.service';
import { Usuario } from '../../shared/models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  usuario: Usuario = new Usuario("", "", "");

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, public usuarioService: UsuarioService) {}

  cadastro(): void {
    //
  }

}
