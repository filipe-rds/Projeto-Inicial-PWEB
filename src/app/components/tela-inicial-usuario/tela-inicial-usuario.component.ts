import { Usuario } from './../../shared/models/usuario';
import { LocalStorageService } from './../../shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ThemeModeService } from '../../shared/services/theme-mode.service';
import { UsuarioService } from '../../shared/services/usuario.service';

@Component({
  selector: 'app-tela-usuario',
  templateUrl: './tela-inicial-usuario.component.html',
  styleUrl: './tela-inicial-usuario.component.scss'
})
  
export class TelaInicialUsuarioComponent implements OnInit{
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, public themeService: ThemeModeService, private localStorageService: LocalStorageService, private usuarioService: UsuarioService) {
    const idUsuario = this.rotaAtual.snapshot.paramMap.get('id') || undefined;
      if (idUsuario) {
        this.usuarioService.usuario = this.usuarioService.getUsuario(idUsuario);
        localStorageService.atualizarUsuario(this.usuarioService.usuario);
      }
  }

  toggleThemeMode() {
    this.themeService.updateThemeMode();
    // Recarrega o componente forçando a navegação para a mesma rota
    this.roteador.navigate([this.roteador.url]).then(() => {
      window.location.reload();
    });
  }
}
