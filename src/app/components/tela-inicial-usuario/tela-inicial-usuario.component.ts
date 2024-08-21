import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ThemeModeService } from '../../shared/services/theme-mode.service';

@Component({
  selector: 'app-tela-usuario',
  templateUrl: './tela-inicial-usuario.component.html',
  styleUrl: './tela-inicial-usuario.component.scss'
})
export class TelaInicialUsuarioComponent {
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, public themeService: ThemeModeService) { }

  toggleThemeMode() {
    this.themeService.updateThemeMode();
    // Recarrega o componente forçando a navegação para a mesma rota
    this.roteador.navigate([this.roteador.url]).then(() => {
      window.location.reload();
    });
  }
}
