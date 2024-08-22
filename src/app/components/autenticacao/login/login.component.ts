import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { UsuarioService } from '../../../shared/services/usuario.service';
import { Usuario } from '../../../shared/models/usuario';
import { MensagemSweetService } from '../../../shared/services/mensagem-sweet.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  usuario: Usuario = new Usuario("", "", "");

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, private usuarioService: UsuarioService, public sweet: MensagemSweetService) { }

  login(): void {
    this.usuarioService.validarUsuario(this.usuario).subscribe({
      next: usuarioRetornado => {
        const usuariosArray = usuarioRetornado;
        const usuarioLogado = usuariosArray.find(element => element.email === this.usuario.email && element.senha === this.usuario.senha);
        if (usuarioLogado) {
          this.sweet.info('Usuário logado:');
        }
      },
      error: error => {
        // Lida com o erro se o login falhar
        this.sweet.info('Erro ao acessar usuário: ' + error.message);
      }
    });
    this.roteador.navigate([`tela-inicial/${this.usuario.id}`]);
  }

}
