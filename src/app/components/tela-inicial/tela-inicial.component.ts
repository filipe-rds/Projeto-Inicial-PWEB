import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ThemeModeService } from '../../shared/services/theme-mode.service';
import { UsuarioService } from '../../shared/services/usuario.service';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.scss'
})
export class TelaInicialComponent implements OnInit{

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, public themeService: ThemeModeService, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    const usuario = this.usuarioService.lerUsuarioLocal();
    if (usuario && usuario.id) {
      this.roteador.navigate([`tela-inicial/${usuario.id}`]);
    }
  }

  toggleThemeMode() {
    this.themeService.updateThemeMode();
    // Recarrega o componente forçando a navegação para a mesma rota
    this.roteador.navigate([this.roteador.url]).then(() => {
      window.location.reload();
    });
  }

  limparDiv(id:string) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.classList.add('hidden');
    }
  }
}
