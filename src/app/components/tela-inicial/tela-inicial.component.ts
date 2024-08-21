import { LocalStorageService } from './../../shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ThemeModeService } from '../../shared/services/theme-mode.service';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.scss'
})
export class TelaInicialComponent implements OnInit{

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, public themeService: ThemeModeService, private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    const usuario = this.localStorageService.lerUsuario();
    if (usuario && usuario.id) {
      this.roteador.navigate([`tela-inicial/${usuario.id}`]);
    }
    this.verificarRotaAtual();
  }

  verificarRotaAtual(): void {
    this.roteador.events.subscribe(() => {
      const rotaAtual = this.roteador.url;
      if (rotaAtual.includes('login') || rotaAtual.includes('cadastro')) {
        this.limparDiv();
      }
    });
  }

  toggleThemeMode() {
    this.themeService.updateThemeMode();
    // Recarrega o componente forçando a navegação para a mesma rota
    this.roteador.navigate([this.roteador.url]).then(() => {
      window.location.reload();
    });
  }

  limparDiv() {
    const elemento = document.getElementById('boas-vindas');
    if (elemento) {
      elemento.classList.add('hidden');
    }
  }
}
